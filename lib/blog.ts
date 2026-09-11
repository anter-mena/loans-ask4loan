import { createPostCollection, type ArticleSection } from "@/lib/content";

export type { PostMeta as BlogMeta } from "@/lib/content";

export const BLOG_DESCRIPTION =
  "Practical guidance on personal loans in Canada — borrowing tips, rate insights, and plain-English takes on the decisions that shape what you pay.";

export const BLOG_SECTION: ArticleSection = {
  label: "Blog",
  path: "/blog",
  schemaType: "BlogPosting",
  dateLine: "updated",
  backLabel: "All blog posts",
  next: { label: "In-depth loan guides", href: "/resources/guides" },
};

const blog = createPostCollection({
  folder: "blog",
  defaultAuthor: "Ask4Loan Editorial Team",
  defaultCategory: "Article",
});

/** Published blog posts, newest first. */
export const getAllPosts = blog.getAll;
export const getPost = blog.get;
