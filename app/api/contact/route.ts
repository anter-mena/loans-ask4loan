import nodemailer from "nodemailer";
import { buildBrandedContactEmail } from "@/lib/contact-email";

const SITE_NAME = "Ask4Loan";
export const dynamic = "force-dynamic";
const LIMITS = { name: 100, email: 200, message: 5000, subject: 200, phone: 40 };
const hits = new Map<string, number[]>();
function rateLimited(ip: string) { const now = Date.now(); if (hits.size > 5000) hits.clear(); const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000); if (recent.length >= 3) return true; recent.push(now); hits.set(ip, recent); return false; }
function clientIp(r: Request) { return r.headers.get("cf-connecting-ip") ?? r.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown"; }
function isEmail(v: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }

export async function POST(request: Request) {
  const host = process.env.SMTP_HOST, user = process.env.SMTP_USER, pass = process.env.SMTP_PASSWORD;
  const port = Number(process.env.SMTP_PORT ?? "465"), from = process.env.CONTACT_FROM ?? user, to = process.env.CONTACT_TO;
  if (!host || !Number.isInteger(port) || !user || !pass || !from || !to) return Response.json({ error: "The contact form is not configured. Please email us directly." }, { status: 500 });
  if (rateLimited(clientIp(request))) return Response.json({ error: "Too many messages. Please wait a minute and try again." }, { status: 429 });
  let body: unknown; try { body = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const { name, email, message, company, topic, subject, phone } = (body ?? {}) as Record<string, unknown>;
  if (typeof company === "string" && company.trim()) return Response.json({ ok: true });
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string" || !name.trim() || !message.trim() || !isEmail(email.trim())) return Response.json({ error: "Please fill in your name, a valid email, and a message." }, { status: 400 });
  const n = name.trim().slice(0, LIMITS.name), e = email.trim().slice(0, LIMITS.email), m = message.trim().slice(0, LIMITS.message);
  const t = typeof topic === "string" && topic.trim() ? topic.trim().slice(0, 40) : "New message";
  const s = typeof subject === "string" ? subject.trim().slice(0, LIMITS.subject) : "", p = typeof phone === "string" ? phone.trim().slice(0, LIMITS.phone) : "";
  const emailSubject = `[${SITE_NAME}] ${t} — ${n}`;
  const text = `${t}\n\nName: ${n}\nEmail: ${e}${p ? `\nPhone: ${p}` : ""}${s ? `\nSubject: ${s}` : ""}\n\nMessage:\n${m}\n\n— Sent from the ${SITE_NAME} contact form.`;
  const content = buildBrandedContactEmail({ name: n, email: e, message: m, topic: t, subject: s, phone: p, emailSubject, text });
  try {
    const transporter = nodemailer.createTransport({ host, port, secure: process.env.SMTP_SECURE !== "false", auth: { user, pass }, connectionTimeout: 10_000, greetingTimeout: 10_000, socketTimeout: 20_000 });
    await transporter.sendMail({ from: `${SITE_NAME} Contact <${from}>`, to, replyTo: e, ...content });
  } catch (error) { console.error("[contact] Gmail SMTP send failed", error); return Response.json({ error: "We couldn't send your message. Please email us directly." }, { status: 502 }); }
  return Response.json({ ok: true });
}
