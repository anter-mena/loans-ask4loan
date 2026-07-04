'use client';

import { Check, X } from "lucide-react";
import FaqAccordion from "@/components/shared/FaqAccordion";
import type { ContentBlock, HeadingBlock, ListBlock } from "@/lib/content-blocks";

const STEP_HEADING_RE = /^(step\s*\d+|\d+\.)\s*[:.]?\s*/i;

const renderList = (block: ListBlock, key: React.Key) => {
  const ListTag = block.ordered ? "ol" : "ul";
  const isNegative = block.negative;
  return (
    <ListTag key={key} className="space-y-2.5">
      {block.items.map((item, itemIndex) => {
        let marker: React.ReactNode;
        if (block.ordered) {
          marker = (
            <span
              className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5"
              style={{ backgroundColor: "rgba(16, 185, 129, 0.1)", color: "#10B981" }}
            >
              {itemIndex + 1}
            </span>
          );
        } else if (isNegative) {
          marker = <X className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#EF4444" }} />;
        } else {
          marker = <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#10B981" }} />;
        }

        return (
          <li key={item} className="flex items-start gap-2.5">
            {marker}
            <span className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
              {item}
            </span>
          </li>
        );
      })}
    </ListTag>
  );
};

const renderBlock = (block: ContentBlock, key: React.Key): React.ReactNode => {
  if (block.type === "heading") {
    const HeadingTag = block.level === 2 ? "h2" : "h3";
    return (
      <HeadingTag
        key={key}
        className={
          block.level === 2
            ? "text-xl sm:text-2xl font-bold mt-10 mb-2"
            : "text-lg font-bold mt-6 mb-1"
        }
        style={{ color: "#1F2937" }}
      >
        {block.text}
      </HeadingTag>
    );
  }

  if (block.type === "paragraph") {
    return (
      <p key={key} className="leading-relaxed" style={{ color: "#64748B" }}>
        {block.text}
      </p>
    );
  }

  if (block.type === "callout") {
    return (
      <div
        key={key}
        className="rounded-xl border-l-4 p-4"
        style={{ backgroundColor: "#F0FDF9", borderColor: "#10B981" }}
      >
        <p className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
          {block.text}
        </p>
      </div>
    );
  }

  if (block.type === "list") {
    return renderList(block, key);
  }

  if (block.type === "table") {
    return (
      <div
        key={key}
        className="rounded-2xl border overflow-hidden my-2"
        style={{ borderColor: "#E2E8F0" }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "#F8FAFC" }}>
                {block.headers.map((header, headerIndex) => (
                  <th
                    key={header}
                    className="text-left font-semibold p-4"
                    style={{ color: headerIndex === 0 ? "#1F2937" : "#10B981" }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr
                  key={row[0]}
                  style={{ borderTop: rowIndex === 0 ? "none" : "1px solid #E2E8F0" }}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={cellIndex === 0 ? "p-4 font-medium whitespace-nowrap" : "p-4"}
                      style={{ color: cellIndex === 0 ? "#1F2937" : "#64748B" }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (block.type === "faq") {
    return (
      <div key={key} className="pt-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6" style={{ color: "#1F2937" }}>
          Frequently Asked Questions
        </h2>
        <FaqAccordion items={block.items} variant="flat" />
      </div>
    );
  }

  return null;
};

type ProsConsPair = {
  prosHeading: HeadingBlock;
  prosList: ListBlock;
  consHeading: HeadingBlock;
  consList: ListBlock;
};

const renderProsConsPair = (pair: ProsConsPair, key: React.Key) => (
  <div key={key} className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
    <div className="rounded-2xl p-5" style={{ backgroundColor: "#F0FDF9" }}>
      <h4 className="font-bold text-sm mb-3" style={{ color: "#059669" }}>
        {pair.prosHeading.text}
      </h4>
      <ul className="space-y-2">
        {pair.prosList.items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#10B981" }} />
            <span className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <div className="rounded-2xl p-5" style={{ backgroundColor: "#FEF2F2" }}>
      <h4 className="font-bold text-sm mb-3" style={{ color: "#DC2626" }}>
        {pair.consHeading.text}
      </h4>
      <ul className="space-y-2">
        {pair.consList.items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <X className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#EF4444" }} />
            <span className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

type Step = { heading: string; body: ContentBlock[] };

const renderStepTimeline = (steps: Step[], key: React.Key) => (
  <div key={key} className="relative my-2">
    <div
      className="absolute left-3.25 top-3 bottom-3 w-0.5"
      style={{ backgroundColor: "#D1FAE5" }}
    />
    <div className="space-y-6">
      {steps.map((step, stepIndex) => (
        <div key={step.heading} className="relative flex gap-4">
          <span
            className="relative z-10 shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: "#10B981", color: "#FFFFFF" }}
          >
            {stepIndex + 1}
          </span>
          <div className="flex-1 space-y-2 pb-1">
            <h3 className="font-bold text-base" style={{ color: "#1F2937" }}>
              {step.heading.replace(STEP_HEADING_RE, "")}
            </h3>
            {step.body.map((block, blockIndex) => renderBlock(block, blockIndex))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const renderContentBlocks = (blocks: ContentBlock[]) => {
  const nodes: React.ReactNode[] = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];

    if (block.type === "heading" && block.level === 3 && STEP_HEADING_RE.test(block.text)) {
      const steps: Step[] = [];
      while (
        i < blocks.length &&
        blocks[i].type === "heading" &&
        (blocks[i] as HeadingBlock).level === 3 &&
        STEP_HEADING_RE.test((blocks[i] as HeadingBlock).text)
      ) {
        const heading = (blocks[i] as HeadingBlock).text;
        i++;
        const body: ContentBlock[] = [];
        while (i < blocks.length && blocks[i].type !== "heading") {
          body.push(blocks[i]);
          i++;
        }
        steps.push({ heading, body });
      }
      nodes.push(renderStepTimeline(steps, nodes.length));
      continue;
    }

    const next1 = blocks[i + 1];
    const next2 = blocks[i + 2];
    const next3 = blocks[i + 3];
    if (
      block.type === "heading" &&
      block.level === 3 &&
      next1?.type === "list" &&
      !next1.negative &&
      next2?.type === "heading" &&
      next2.level === 3 &&
      next3?.type === "list" &&
      next3.negative
    ) {
      nodes.push(
        renderProsConsPair(
          { prosHeading: block, prosList: next1, consHeading: next2, consList: next3 },
          nodes.length
        )
      );
      i += 4;
      continue;
    }

    nodes.push(renderBlock(block, nodes.length));
    i++;
  }

  return nodes;
};

const ContentBlocks = ({ blocks }: { blocks: ContentBlock[] }) => {
  return <div className="space-y-5">{renderContentBlocks(blocks)}</div>;
};

export function findFaqBlock(blocks: ContentBlock[]) {
  return blocks.find((block) => block.type === "faq");
}

export default ContentBlocks;
