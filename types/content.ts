export type Publication = {
  title: string;
  type: "Research Paper" | "Report" | "Policy Brief";
  date: string;
  topic: string;
  excerpt: string;
};

export type MediaItem = {
  title: string;
  slug?: string;
  type: "story" | "video";
  excerpt?: string;
  publishedAt?: string;
  image?: { asset?: { _ref: string } } | null;
};
