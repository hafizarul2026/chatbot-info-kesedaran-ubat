import type { ResourceLink, Topic } from "./types";

/**
 * Tambah sumber maklumat baharu di sini tanpa mengubah topik sedia ada.
 *
 * - EXTRA_TOPICS: jawapan chatbot (soalan orang awam)
 * - EXTRA_RESOURCES: pautan di panel "Saluran rasmi"
 * - EXTRA_STARTER_QUESTIONS: soalan cadangan pada skrin mula
 *
 * Hantar slaid, FAQ, atau nota rasmi kemudian — ia boleh dimasukkan
 * sebagai topik baru dalam senarai ini.
 */
export const EXTRA_TOPICS: Topic[] = [
  // {
  //   id: "contoh-sumber-baru",
  //   title: "Tajuk topik baharu",
  //   shortLabel: "Topik baharu",
  //   keywords: ["kata kunci"],
  //   phrases: ["soalan biasa"],
  //   blocks: [
  //     { type: "p", text: "Jawapan berdasarkan sumber rasmi." },
  //   ],
  //   followUps: ["Macam mana nak buat aduan?"],
  // },
];

export const EXTRA_RESOURCES: ResourceLink[] = [
  // {
  //   label: "Nama sumber",
  //   href: "https://contoh.contoh",
  //   hint: "Ringkasan sumber",
  // },
];

export const EXTRA_STARTER_QUESTIONS: string[] = [
  // "Soalan cadangan baharu?",
];
