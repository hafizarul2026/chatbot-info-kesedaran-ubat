# Chatbot Info Kesedaran Ubat

Chatbot untuk orang awam yang memberi maklumat berkaitan ubat berdaftar, kosmetik bernotifikasi, dan kesedaran bahaya ubat tidak sah.

Jawapan berasaskan bahan Cawangan Penguatkuasaan Farmasi (modul Sahabat Ubat / SOBAT) dan maklumat rasmi Program Perkhidmatan Farmasi KKM.

Kandungan chatbot disusun daripada slaid SOBAT CPF Pahang yang berkaitan dan FAQ rasmi KKM.

## Tambah sumber maklumat

Boleh. Sumber baharu dimasukkan dalam `src/lib/extra-sources.ts` tanpa mengubah jawapan sedia ada:

- `EXTRA_TOPICS` — topik/jawapan baru
- `EXTRA_RESOURCES` — pautan rasmi di panel kanan
- `EXTRA_STARTER_QUESTIONS` — soalan cadangan di skrin mula

Hantar slaid, FAQ, memo, atau nota rasmi kemudian. Ia akan ditukar kepada topik chatbot (tajuk, kata kunci, dan jawapan).

## Laman web

Laman rasmi: [https://cekmal.hafizarul.my](https://cekmal.hafizarul.my)

Deploy ke Cloudflare Workers (laman statik pada domain `cekmal.hafizarul.my`):

```bash
npx wrangler login
npm install
npm run deploy
```

Kod sumber juga ada di GitHub: [https://github.com/hafizarul2026/chatbot-info-kesedaran-ubat](https://github.com/hafizarul2026/chatbot-info-kesedaran-ubat)

## Jalankan secara tempatan

```bash
npm install
npm run dev
```

Buka [http://localhost:43147](http://localhost:43147).

## Apa yang chatbot boleh jawab

- Ciri ubat berdaftar (nombor MAL + hologram)
- Maksud kod MAL A, X, T, N, H
- Cara semak QUEST 3+ dan FarmaChecker
- Kosmetik bernotifikasi (nombor NOT)
- Tanda tipu daya ubat dan bahaya produk tidak sah
- Iklan ubat dan nombor KKLIU
- Saluran aduan: platform SOBAT (https://beacons.ai/cpfpahang) atau 095707737
- 5B penggunaan ubat berkualiti

## Catatan

- Tiada kunci API diperlukan. Padanan soalan dijalankan secara tempatan.
- Pautan rasmi dipaparkan di panel kanan.

## Skrip

- `npm run dev` — pelayan pembangunan (port 43147)
- `npm run build` — binaan produksi
- `npm run start` — pelayan produksi
- `npm run test:engine` — ujian padanan soalan
- `npm run deploy` — bina export statik dan hantar ke Cloudflare Workers
