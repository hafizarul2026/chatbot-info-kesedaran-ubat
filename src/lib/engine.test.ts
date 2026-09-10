import assert from "node:assert/strict";
import { answerQuestion } from "./engine";

const cases: Array<[string, string]> = [
  ["Macam mana nak kenal ubat berdaftar?", "ubat-berdaftar"],
  ["Apa maksud nombor MAL?", "kod-mal"],
  ["Bagaimana nak semak produk di QUEST 3+?", "cara-semak"],
  ["Apa tanda tipu daya ubat?", "tanda-tipu-daya"],
  ["Bagaimana nak buat aduan?", "aduan"],
  ["Apa itu hologram FarmaTag?", "hologram"],
  ["Boleh ke beli ubat di TikTok?", "tanda-tipu-daya"],
  ["Apa bezanya ubat dengan kosmetik?", "kosmetik"],
  ["Apa itu 5B?", "lima-b"],
];

let failed = 0;
for (const [question, expected] of cases) {
  const result = answerQuestion(question);
  const actual = result.topic?.id ?? result.kind;
  if (result.kind !== "topic" || result.topic?.id !== expected) {
    failed += 1;
    console.error(`FAIL: "${question}" -> ${actual}, expected ${expected}`);
  } else {
    console.log(`OK: ${question}`);
  }
}

const greeting = answerQuestion("Assalamualaikum");
assert.equal(greeting.kind, "greeting");
const medical = answerQuestion("Saya demam, ubat apa yang sesuai?");
assert.equal(medical.kind, "medical");

if (failed) {
  process.exit(1);
}
console.log("All engine tests passed.");
