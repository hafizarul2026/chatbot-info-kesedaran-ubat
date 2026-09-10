import { TOPICS, type Topic } from "./knowledge";

const STOPWORDS = new Set([
  "apa",
  "yang",
  "dan",
  "atau",
  "untuk",
  "dengan",
  "pada",
  "dari",
  "ke",
  "di",
  "ini",
  "itu",
  "ada",
  "tak",
  "tidak",
  "ke",
  "saya",
  "awak",
  "anda",
  "kami",
  "boleh",
  "nak",
  "mahukan",
  "minta",
  "tolong",
  "sila",
  "adakah",
  "adakah",
  "macam",
  "mana",
  "bagaimana",
  "kenapa",
  "mengapa",
  "berapa",
  "the",
  "is",
  "a",
  "an",
  "of",
  "to",
  "in",
  "for",
  "please",
  "me",
  "my",
  "la",
  "kah",
  "ke",
  "je",
  "jer",
  "dulu",
  "sekejap",
  "ya",
  "ye",
  "eh",
  "ah",
  "oh",
  "ok",
  "okay",
]);

const SYNONYMS: Record<string, string[]> = {
  palsu: ["tidak berdaftar", "palsu", "tiruan", "tipu"],
  fake: ["tidak berdaftar", "palsu"],
  hologram: ["hologram", "farmatag", "meditag", "farmachecker"],
  mal: ["mal", "pendaftaran", "nombor"],
  aduan: ["aduan", "lapor", "report", "complain", "sispaa", "sobat"],
  iklan: ["iklan", "kkliu", "liu", "promosi", "advertisement"],
  kosmetik: ["kosmetik", "notifikasi", "not", "krim", "skincare"],
  semak: ["semak", "check", "quest", "carian", "npra"],
  kuat: ["kuat", "sildenafil", "tadalafil", "viagra"],
  kurus: ["pelangsing", "sibutramine", "kurus", "slimming"],
  steroid: ["steroid", "dexamethasone"],
  farmasi: ["farmasi", "pharmacist", "cpf"],
  tipu: ["tipu", "daya", "scam", "penipuan"],
  beli: ["beli", "jual", "sumber", "online"],
  preskripsi: ["preskripsi", "resep", "antibiotik"],
};

const GREETING_RE =
  /^(hai|hi|hello|helo|hey|assalamualaikum|assalam|salam|selamat\s*(pagi|petang|tengahari|malam)|apa\s*khabar|good\s*(morning|afternoon|evening)|yo)\b/i;

const THANKS_RE = /^(terima kasih|thanks|thank you|thx|tq|trima kasih|ok terima kasih)\b/i;

const MEDICAL_RE =
  /\b(sakit|demam|batuk|darah tinggi|kencing manis|diabetes|migrain|hamil|alergi|allergy|dos untuk saya|ubat apa yang sesuai|diagnose|diagnosis|prescribe)\b/i;

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[“”"']/g, "")
    .replace(/[^a-z0-9\u00c0-\u024f\u0400-\u04ff\s+]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text: string) {
  return normalize(text)
    .split(" ")
    .map((token) => token.trim())
    .filter((token) => token.length >= 2 && !STOPWORDS.has(token));
}

function expand(tokens: string[]) {
  const extra: string[] = [];
  for (const token of tokens) {
    extra.push(token);
    for (const [key, values] of Object.entries(SYNONYMS)) {
      if (token.includes(key) || key.includes(token)) {
        extra.push(...values);
      }
    }
  }
  return extra;
}

function scoreTopic(query: string, tokens: string[], topic: Topic) {
  const q = normalize(query);
  let score = 0;

  for (const phrase of topic.phrases) {
    if (q.includes(normalize(phrase))) score += 8;
  }

  const expanded = expand(tokens);
  for (const keyword of topic.keywords) {
    const k = normalize(keyword);
    if (k.length < 2) continue;
    if (q.includes(k)) score += k.length > 6 ? 3 : 2;
    if (expanded.includes(k)) score += 1.2;
  }

  if (q.includes(normalize(topic.shortLabel))) score += 4;
  if (q.includes(normalize(topic.title))) score += 6;

  if (
    topic.id === "tanda-tipu-daya" &&
    /(tiktok|facebook|whatsapp|telegram|instagram|viral)/.test(q)
  ) {
    score += 5;
  }

  return score;
}

export type EngineResult = {
  kind: "greeting" | "thanks" | "medical" | "topic" | "fallback";
  topic?: Topic;
  related: Topic[];
};

export function answerQuestion(
  query: string,
  previousTopicId?: string,
): EngineResult {
  const trimmed = query.trim();
  if (!trimmed) {
    return { kind: "fallback", related: TOPICS.slice(0, 4) };
  }

  if (GREETING_RE.test(trimmed) && trimmed.split(/\s+/).length <= 6) {
    return { kind: "greeting", related: TOPICS.slice(0, 4) };
  }

  if (THANKS_RE.test(trimmed) && trimmed.split(/\s+/).length <= 8) {
    return { kind: "thanks", related: [] };
  }

  const tokens = tokenize(trimmed);
  const ranked = TOPICS.map((topic) => ({
    topic,
    score: scoreTopic(trimmed, tokens, topic),
  })).sort((a, b) => b.score - a.score);

  if (previousTopicId && tokens.length <= 4) {
    const previous = ranked.find((item) => item.topic.id === previousTopicId);
    if (previous) previous.score += 3;
    ranked.sort((a, b) => b.score - a.score);
  }

  const best = ranked[0];
  const second = ranked[1];
  const related = ranked.slice(1, 4).map((item) => item.topic);

  if (MEDICAL_RE.test(trimmed) && (!best || best.score < 10)) {
    return { kind: "medical", related: ranked.slice(0, 3).map((item) => item.topic) };
  }

  if (!best || best.score < 4) {
    if (MEDICAL_RE.test(trimmed)) {
      return { kind: "medical", related: ranked.slice(0, 3).map((item) => item.topic) };
    }
    return { kind: "fallback", related: ranked.slice(0, 4).map((item) => item.topic) };
  }

  if (second && best.score - second.score < 1.5 && best.score < 8) {
    return { kind: "fallback", related: ranked.slice(0, 4).map((item) => item.topic) };
  }

  return { kind: "topic", topic: best.topic, related };
}

export const GREETING_BLOCKS = [
  {
    type: "p" as const,
    text: "Assalamualaikum dan salam sejahtera. Saya Chatbot Info Kesedaran Ubat. Saya memberi maklumat berkaitan ubat berdaftar, kosmetik bernotifikasi, dan kesedaran bahaya ubat tidak sah.",
  },
  {
    type: "tip" as const,
    text: "Saya menjawab berdasarkan bahan kesedaran Cawangan Penguatkuasaan Farmasi dan maklumat rasmi KKM. Untuk maklumat lanjut dan aduan, boleh layari platform SOBAT di https://beacons.ai/cpfpahang atau hubungi 095707737.",
  },
];

export const THANKS_BLOCKS = [
  {
    type: "p" as const,
    text: "Sama-sama. Jika ada soalan lain — semak MAL, hologram, iklan, atau cara aduan — sila tanya. Jaga kesihatan, beli ubat dari sumber yang sah.",
  },
];

export const MEDICAL_BLOCKS = [
  {
    type: "p" as const,
    text: "Saya boleh bantu soalan berkaitan ubat berdaftar, kosmetik bernotifikasi, semak QUEST 3+, bahaya ubat tidak sah, dan saluran aduan.",
  },
  {
    type: "tip" as const,
    text: "Untuk maklumat lanjut dan aduan, boleh layari platform SOBAT di https://beacons.ai/cpfpahang atau hubungi 095707737.",
  },
];

export const FALLBACK_BLOCKS = [
  {
    type: "p" as const,
    text: "Saya belum pasti soalan itu. Cuba tanya dengan lebih khusus, atau pilih salah satu topik di bawah. Contoh: “Macam mana nak kenal ubat berdaftar?” atau “Bagaimana nak buat aduan?”",
  },
];
