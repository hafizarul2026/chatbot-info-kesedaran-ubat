export type AnswerBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "warn"; text: string }
  | { type: "tip"; text: string }
  | { type: "links"; items: { label: string; href: string }[] };

export type Topic = {
  id: string;
  title: string;
  shortLabel: string;
  keywords: string[];
  phrases: string[];
  blocks: AnswerBlock[];
  followUps: string[];
};

export type ResourceLink = {
  label: string;
  href: string;
  hint: string;
};
