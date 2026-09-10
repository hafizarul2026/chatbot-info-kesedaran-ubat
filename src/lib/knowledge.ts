import {
  EXTRA_RESOURCES,
  EXTRA_STARTER_QUESTIONS,
  EXTRA_TOPICS,
} from "./extra-sources";
import type { ResourceLink, Topic } from "./types";

export type { AnswerBlock, ResourceLink, Topic } from "./types";

const CORE_RESOURCES: ResourceLink[] = [
  {
    label: "Semak ubat (QUEST 3+)",
    href: "https://quest3plus.bpfk.gov.my/pmo2/index.php",
    hint: "Carian rasmi NPRA",
  },
  {
    label: "Portal NPRA",
    href: "https://www.npra.gov.my",
    hint: "Status pendaftaran produk",
  },
  {
    label: "SOBAT Pahang (aduan)",
    href: "https://beacons.ai/cpfpahang",
    hint: "Saluran aduan CPF Pahang",
  },
  {
    label: "SISPAA KKM",
    href: "https://moh.spab.gov.my/",
    hint: "Aduan rasmi dalam talian",
  },
  {
    label: "Produk dilarang",
    href: "https://www.pharmacy.gov.my/v2/ms/apps/banned-product",
    hint: "Senarai produk dilarang KKM",
  },
  {
    label: "Perkhidmatan Farmasi KKM",
    href: "https://www.pharmacy.gov.my",
    hint: "Maklumat rasmi farmasi",
  },
];

export const RESOURCES: ResourceLink[] = [
  ...CORE_RESOURCES,
  ...EXTRA_RESOURCES,
];

export const STARTER_QUESTIONS = [
  "Macam mana nak kenal ubat berdaftar?",
  "Apa maksud nombor MAL?",
  "Bagaimana nak semak produk di QUEST 3+?",
  "Apa tanda tipu daya ubat?",
  "Boleh ke beli ubat di TikTok atau Facebook?",
  "Bagaimana nak buat aduan?",
  ...EXTRA_STARTER_QUESTIONS,
];

const CORE_TOPICS: Topic[] = [
  {
    id: "ubat-berdaftar",
    title: "Ciri-ciri ubat berdaftar KKM",
    shortLabel: "Ubat berdaftar",
    keywords: [
      "berdaftar",
      "sah",
      "tulen",
      "asli",
      "lulus",
      "kkm",
      "ciri",
      "kenal",
      "mengenalpasti",
      "hologram",
      "mal",
      "pendaftaran",
      "selamat",
      "kualiti",
      "berkesan",
    ],
    phrases: [
      "ubat berdaftar",
      "kenal ubat",
      "ciri ubat",
      "ubat sah",
      "lulus kkm",
      "produk berdaftar",
    ],
    blocks: [
      {
        type: "p",
        text: "Semua produk ubat di Malaysia — termasuk yang dibuat di luar negara — mesti berdaftar dengan Kementerian Kesihatan Malaysia (KKM) sebelum dijual. Produk berdaftar dinilai dari segi keselamatan, kualiti dan keberkesanan.",
      },
      {
        type: "p",
        text: "Ubat berdaftar mempunyai DUA ciri wajib pada bungkusan:",
      },
      {
        type: "ul",
        items: [
          "Nombor pendaftaran MAL — contoh MAL20125467T. Dimulakan dengan MAL, diikuti 8 digit, dan diakhiri huruf kategori (A, X, T, N atau H).",
          "Label keselamatan hologram yang dilekatkan pada setiap bungkusan ubat.",
        ],
      },
      {
        type: "warn",
        text: "Jika produk ubat tiada nombor MAL atau tiada hologram, ia dikhuatiri tidak berdaftar. Jangan beli dan jangan guna.",
      },
      {
        type: "tip",
        text: "Selepas nampak nombor MAL, semak juga statusnya di QUEST 3+ dan ketulenan hologram melalui FarmaChecker atau ahli farmasi.",
      },
    ],
    followUps: [
      "Apa perbezaan kod MAL A, X, T dan N?",
      "Bagaimana nak semak di QUEST 3+?",
      "Apa itu hologram FarmaTag?",
    ],
  },
  {
    id: "kod-mal",
    title: "Maksud nombor MAL dan kod kategori",
    shortLabel: "Nombor MAL",
    keywords: [
      "mal",
      "kod",
      "kategori",
      "digit",
      "nombor",
      "pendaftaran",
      "a",
      "x",
      "t",
      "n",
      "h",
      "otc",
      "tradisional",
      "suplemen",
      "veterinar",
      "racun",
      "terkawal",
    ],
    phrases: [
      "nombor mal",
      "no mal",
      "kod mal",
      "maksud mal",
      "mal a",
      "mal x",
      "mal t",
      "mal n",
      "huruf mal",
    ],
    blocks: [
      {
        type: "p",
        text: "Nombor pendaftaran dimulakan dengan huruf MAL, diikuti 8 digit, dan diakhiri huruf kategori. Contoh: MAL20125467T.",
      },
      {
        type: "ul",
        items: [
          "A — Ubat terkawal (racun). Hanya melalui doktor dan ahli farmasi dengan preskripsi. Contoh: antibiotik, ubat darah tinggi.",
          "X — Ubat am (OTC). Boleh diperoleh di farmasi atau premis menjual ubat tanpa preskripsi. Contoh: paracetamol.",
          "T — Ubat tradisional. Contoh: jamu, minyak urut, minyak gamat.",
          "N — Suplemen kesihatan / produk natural. Contoh: minyak ikan kod, multivitamin.",
          "H — Ubat veterinar (untuk haiwan).",
        ],
      },
      {
        type: "p",
        text: "Kadang-kadang terdapat kod pentadbiran tambahan selepas kategori, contoh C (kontrak pengilang), E (untuk eksport sahaja, bukan jualan tempatan), R (dibungkus semula), S (sumber kedua) atau Y (produk yatim).",
      },
      {
        type: "tip",
        text: "Nombor MAL wajib dipamerkan pada label atau pembungkusan ubat. Tanpa nombor ini, produk tidak boleh dijual atau diiklankan di Malaysia.",
      },
    ],
    followUps: [
      "Macam mana nak semak nombor MAL?",
      "Apa bezanya ubat dengan kosmetik?",
      "Ubat tradisional perlu MAL ke?",
    ],
  },
  {
    id: "cara-semak",
    title: "Cara semak status pendaftaran di QUEST 3+",
    shortLabel: "Cara semak QUEST",
    keywords: [
      "semak",
      "check",
      "quest",
      "quest3",
      "npra",
      "carian",
      "status",
      "aplikasi",
      "laman",
      "online",
      "portal",
      "bpfk",
      "product status",
    ],
    phrases: [
      "cara semak",
      "nak check",
      "quest 3",
      "quest3+",
      "npra product",
      "semak mal",
      "semak produk",
      "carian produk",
    ],
    blocks: [
      {
        type: "p",
        text: "Sebelum beli, semak status pendaftaran di laman rasmi Bahagian Regulatori Farmasi Negara (NPRA) atau aplikasi NPRA Product Status.",
      },
      {
        type: "ol",
        items: [
          "Buka QUEST 3+ Product Search (pautan rasmi NPRA).",
          "Pilih kategori: Pharmaceutical (ubat/suplemen) atau Cosmetic (kosmetik).",
          "Pilih cara carian: nama produk, nombor MAL / NOT, bahan aktif, pemegang pendaftaran, atau pengilang.",
          "Masukkan maklumat dan tekan Search.",
          "Lihat hasil: berdaftar, bernotifikasi, atau tidak dijumpai.",
        ],
      },
      {
        type: "warn",
        text: "Jika carian tiada hasil, status digantung, atau dibatalkan — jangan beli. Produk itu tidak selamat untuk diguna sebagai produk berdaftar.",
      },
      {
        type: "links",
        items: [
          {
            label: "QUEST 3+ Product Search",
            href: "https://quest3plus.bpfk.gov.my/pmo2/index.php",
          },
          {
            label: "Portal NPRA",
            href: "https://www.npra.gov.my",
          },
        ],
      },
      {
        type: "tip",
        text: "NPRA juga boleh dihubungi di talian 03-7883 5400. Selepas semak MAL, sahkan hologram dengan ahli farmasi atau FarmaChecker.",
      },
    ],
    followUps: [
      "Apa itu hologram FarmaTag?",
      "Kalau tiada dalam QUEST, apa perlu buat?",
      "Bagaimana nak buat aduan?",
    ],
  },
  {
    id: "hologram",
    title: "Label hologram dan FarmaChecker",
    shortLabel: "Hologram",
    keywords: [
      "hologram",
      "farmatag",
      "meditag",
      "farmachecker",
      "uv",
      "pelekat",
      "keselamatan",
      "scan",
      "imbas",
      "tulen",
      "palsu",
    ],
    phrases: [
      "label hologram",
      "farma tag",
      "farma checker",
      "semak hologram",
      "hologram palsu",
      "pelekat hologram",
    ],
    blocks: [
      {
        type: "p",
        text: "Setiap bungkusan ubat berdaftar wajib ada label keselamatan hologram. Versi yang pernah digunakan termasuk Meditag II (2006), Meditag III (2012), Meditag 4 (2017) dan FarmaTag (2019).",
      },
      {
        type: "p",
        text: "Semak ketulenan hologram dengan aplikasi FarmaChecker:",
      },
      {
        type: "ol",
        items: [
          "Buka aplikasi FarmaChecker.",
          "Imbas label selari dengan kotak pada skrin.",
          "Tekan Scan Now.",
        ],
      },
      {
        type: "ul",
        items: [
          "Tulen — label FarmaTag sah.",
          "Palsu — jangan guna produk itu.",
          "Belum diaktifkan / tidak dapat disahkan — jangan beli sehingga disahkan oleh ahli farmasi.",
        ],
      },
      {
        type: "tip",
        text: "Pengimbas UV FarmaTag juga ada di premis farmasi komuniti. Jika ragu, bawa kotak ubat ke farmasi berdekatan.",
      },
    ],
    followUps: [
      "Ciri ubat berdaftar apa lagi?",
      "Ubat tanpa hologram boleh beli ke?",
      "Di mana nak beli ubat yang selamat?",
    ],
  },
  {
    id: "tanda-tipu-daya",
    title: "Tanda-tanda tipu daya ubat",
    shortLabel: "Tanda tipu daya",
    keywords: [
      "tipu",
      "daya",
      "scam",
      "penipuan",
      "janji",
      "manis",
      "testimoni",
      "viral",
      "tiktok",
      "facebook",
      "whatsapp",
      "shopee",
      "lazada",
      "online",
      "influencer",
      "ajaib",
      "100%",
      "sembuh",
      "semua penyakit",
      "stok terhad",
      "murah",
    ],
    phrases: [
      "tipu daya",
      "ubat palsu",
      "penipuan ubat",
      "janji manis",
      "iklan viral",
      "beli online",
      "ubat tiktok",
      "beli di tiktok",
      "beli kat tiktok",
      "beli ubat di tiktok",
      "ubat facebook",
    ],
    blocks: [
      {
        type: "p",
        text: "Tipu daya ubat biasanya memikat dengan janji cepat, testimoni, dan jualan tanpa premis berlesen. Waspada jika anda nampak tanda-tanda ini:",
      },
      {
        type: "ul",
        items: [
          "Tiada nombor MAL dan tiada hologram pada bungkusan.",
          "Dakwaan melampau: sembuh 100%, hilangkan semua penyakit, tanpa kesan sampingan, kurus cepat tanpa diet.",
          "Banyak testimoni, sebelum-selepas, atau desakan “stok terhad / inbox sekarang”.",
          "Dijual di media sosial, WhatsApp, atau marketplace oleh penjual tanpa farmasi/klinik berlesen.",
          "Iklan tiada nombor kelulusan KKLIU.",
          "Ubat kuat, pelangsing, “herba sendi/resdung” yang didakwa semulajadi tetapi berkesan terlalu cepat.",
        ],
      },
      {
        type: "warn",
        text: "Jangan percaya janji manis penjual atau testimoni pengguna. Jangan beli ubat tanpa nasihat doktor atau ahli farmasi.",
      },
      {
        type: "p",
        text: "Produk tidak berdaftar yang dirampas sering dicemari bahan terlarang seperti sildenafil/tadalafil (ubat kuat), sibutramine (pelangsing), dan dexamethasone (steroid).",
      },
    ],
    followUps: [
      "Kenapa ubat tidak berdaftar berbahaya?",
      "Boleh ke beli ubat di Shopee?",
      "Bagaimana nak buat aduan?",
    ],
  },
  {
    id: "tidak-berdaftar",
    title: "Bahaya ubat tidak berdaftar",
    shortLabel: "Ubat tidak berdaftar",
    keywords: [
      "tidak berdaftar",
      "tak berdaftar",
      "palsu",
      "haram",
      "dilarang",
      "banned",
      "rampas",
      "bahaya",
      "risiko",
      "dicemari",
      "adulterat",
      "steroid",
      "sibutramine",
      "sildenafil",
      "tadalafil",
      "dexamethasone",
      "kuat",
      "pelangsing",
      "resdong",
      "revolusi",
    ],
    phrases: [
      "ubat tidak berdaftar",
      "ubat palsu",
      "produk dilarang",
      "kenapa berbahaya",
      "ubat kuat haram",
      "ubat kurus haram",
    ],
    blocks: [
      {
        type: "p",
        text: "Ubat tidak berdaftar tidak melalui tapisan keselamatan, kualiti dan keberkesanan NPRA. Kandungan sebenar mungkin berbeza daripada label — atau mengandungi racun berjadual yang tersembunyi.",
      },
      {
        type: "p",
        text: "Contoh bahan terlarang yang kerap dijumpai dalam produk “herba” atau “suplemen” haram:",
      },
      {
        type: "ul",
        items: [
          "Sildenafil, tadalafil dan analognya — dalam produk “ubat kuat”.",
          "Sibutramine — dalam produk pelangsing. Bahan ini telah ditarik kerana risiko jantung.",
          "Dexamethasone (steroid) dan chlorpheniramine — dalam produk “tahan sakit / resdung / sendi” yang nampak semulajadi.",
        ],
      },
      {
        type: "warn",
        text: "Steroid tersembunyi boleh beri kesan cepat, tetapi penggunaan tanpa pengawasan merosakkan tulang, hormon, imuniti dan boleh mengancam nyawa jika dihentikan secara mengejut.",
      },
      {
        type: "links",
        items: [
          {
            label: "Senarai produk dilarang KKM",
            href: "https://www.pharmacy.gov.my/v2/ms/apps/banned-product",
          },
        ],
      },
    ],
    followUps: [
      "Apa tanda tipu daya ubat?",
      "Bagaimana nak semak produk?",
      "Ke mana nak adu?",
    ],
  },
  {
    id: "kosmetik",
    title: "Kosmetik bernotifikasi",
    shortLabel: "Kosmetik",
    keywords: [
      "kosmetik",
      "not",
      "notifikasi",
      "krim",
      "pemutih",
      "pencerah",
      "sabun",
      "losyen",
      "makeup",
      "skincare",
      "whitening",
    ],
    phrases: [
      "nombor not",
      "kosmetik bernotifikasi",
      "semak kosmetik",
      "krim pemutih",
      "produk kecantikan",
    ],
    blocks: [
      {
        type: "p",
        text: "Kosmetik tidak didaftarkan seperti ubat. Ia dikawal melalui notifikasi kepada KKM. Nombor notifikasi bermula dengan NOT, 9 digit, dan diakhiri huruf K. Contoh: NOT123456789K.",
      },
      {
        type: "ul",
        items: [
          "Ubat: pendaftaran MAL + hologram; nombor MAL wajib pada label.",
          "Kosmetik: notifikasi NOT; nombor NOT tidak diwajibkan dicetak pada label atau kotak.",
          "Tempoh sah notifikasi kosmetik ialah 2 tahun.",
        ],
      },
      {
        type: "p",
        text: "Contoh produk kosmetik: solekan, penjagaan kulit, pencerahan, mandian, pewangi, penjagaan rambut, deodoran, penjagaan gigi dan mulut.",
      },
      {
        type: "warn",
        text: "Krim “pemutih segera” atau “anti jerawat ajaib” tanpa notifikasi berisiko mengandungi merkuri, steroid atau hidrokuinon haram. Semak di QUEST 3+ (kategori Cosmetic).",
      },
    ],
    followUps: [
      "Macam mana nak semak nombor NOT?",
      "Apa bezanya MAL dan NOT?",
      "Bagaimana nak buat aduan kosmetik?",
    ],
  },
  {
    id: "iklan-kkliu",
    title: "Iklan ubat dan nombor KKLIU",
    shortLabel: "Iklan & KKLIU",
    keywords: [
      "iklan",
      "kkliu",
      "liu",
      "lembaga",
      "pengiklanan",
      "promosi",
      "advertisement",
      "kelulusan",
      "media",
      "tiktok",
      "facebook",
    ],
    phrases: [
      "nombor kkliu",
      "lembaga iklan ubat",
      "iklan ubat",
      "iklan tidak diluluskan",
      "kelulusan iklan",
    ],
    blocks: [
      {
        type: "p",
        text: "Pendaftaran produk dan kelulusan iklan adalah dua perkara berbeza. Walaupun produk ada MAL, iklannya masih perlu diluluskan oleh Lembaga Iklan Ubat (LIU).",
      },
      {
        type: "ul",
        items: [
          "Iklan yang diluluskan diberi nombor seperti KKLIU xxxx/EXP 31.12.2025.",
          "Nombor ini wajib dipamerkan dengan jelas pada setiap iklan.",
          "Ubat tanpa nombor MAL tidak boleh dijual atau diiklankan di Malaysia. LIU tidak akan lulus iklan produk tidak berdaftar.",
          "Ubat terkawal (preskripsi) secara amnya tidak boleh diiklankan kepada orang ramai.",
        ],
      },
      {
        type: "warn",
        text: "Jika iklan produk kesihatan tiada KKLIU, buat dakwaan “cepat kurus / kuat / sembuh”, atau dipromosi oleh akaun yang meragukan — jangan percaya. Aduan boleh dibuat di SISPAA KKM.",
      },
      {
        type: "links",
        items: [
          {
            label: "SISPAA KKM (aduan iklan)",
            href: "https://moh.spab.gov.my/",
          },
          {
            label: "Program Perkhidmatan Farmasi",
            href: "https://www.pharmacy.gov.my",
          },
        ],
      },
    ],
    followUps: [
      "Apa tanda tipu daya dalam iklan?",
      "Ubat tanpa MAL boleh diiklankan ke?",
      "Bagaimana nak buat aduan?",
    ],
  },
  {
    id: "aduan",
    title: "Cara membuat aduan",
    shortLabel: "Buat aduan",
    keywords: [
      "aduan",
      "adu",
      "lapor",
      "report",
      "complain",
      "hotline",
      "telefon",
      "sispaa",
      "sobat",
      "cpf",
      "penguatkuasaan",
      "hubungi",
      "talian",
    ],
    phrases: [
      "buat aduan",
      "nak lapor",
      "ke mana adu",
      "nombor telefon",
      "hubungi farmasi",
      "sobat pahang",
    ],
    blocks: [
      {
        type: "p",
        text: "Jika anda jumpa ubat tidak berdaftar, kosmetik tidak bernotifikasi, hologram meragukan, atau iklan tanpa KKLIU, sila adu. Aduan orang awam membantu Penguatkuasaan Farmasi bertindak.",
      },
      {
        type: "ul",
        items: [
          "SOBAT Pahang: https://beacons.ai/cpfpahang",
          "Telefon: 095707737",
          "SISPAA KKM (aduan rasmi dalam talian): https://moh.spab.gov.my/",
        ],
      },
      {
        type: "tip",
        text: "Semasa adu, nyatakan nama produk, gambar bungkusan, tempat/pautan jualan, dan tarikh. Jangan teruskan pembelian atau pengambilan produk itu.",
      },
      {
        type: "links",
        items: [
          {
            label: "SOBAT CPF Pahang",
            href: "https://beacons.ai/cpfpahang",
          },
          {
            label: "SISPAA KKM",
            href: "https://moh.spab.gov.my/",
          },
        ],
      },
    ],
    followUps: [
      "Apa perlu ada dalam aduan?",
      "Macam mana nak semak produk dulu?",
      "Apa itu SOBAT?",
    ],
  },
  {
    id: "lima-b",
    title: "Penggunaan ubat berkualiti (5B)",
    shortLabel: "5B ubat",
    keywords: [
      "5b",
      "lima b",
      "berkualiti",
      "cara makan",
      "dos",
      "penggunaan",
      "betul",
      "kualiti",
      "panduan",
    ],
    phrases: [
      "penggunaan ubat berkualiti",
      "lima b",
      "5b",
      "cara makan ubat",
      "ubat yang betul",
    ],
    blocks: [
      {
        type: "p",
        text: "Penggunaan ubat secara berkualiti berasaskan 5B:",
      },
      {
        type: "ol",
        items: [
          "Ubat yang betul — pilih bersama doktor atau ahli farmasi, ambil kira risiko, manfaat dan alahan.",
          "Pengguna ubat yang betul — ubat itu untuk anda, bukan dikongsi dengan orang lain.",
          "Dos yang betul — ikut jumlah dan kekerapan yang ditetapkan.",
          "Cara penggunaan yang betul — ditelan, dihisap, dilumur dan sebagainya mengikut arahan.",
          "Masa penggunaan yang betul — ikut selang masa dan arahan khas (contoh: sebelum makan).",
        ],
      },
      {
        type: "p",
        text: "Sebelum ambil ubat: semak nama pada label, pastikan ia untuk masalah yang dialami, baca arahan, dan patuhi selang masa.",
      },
    ],
    followUps: [
      "Apa perlu ada pada label ubat?",
      "Boleh ke kongsikan antibiotik?",
      "Apa hak pengguna ubat?",
    ],
  },
  {
    id: "apa-itu-ubat",
    title: "Apa itu ubat?",
    shortLabel: "Apa itu ubat",
    keywords: [
      "definisi",
      "maksud ubat",
      "apa itu ubat",
      "mencegah",
      "merawat",
      "mengawal",
      "vaksin",
      "kimia",
    ],
    phrases: ["apa itu ubat", "maksud ubat", "ubat adalah", "fungsi ubat"],
    blocks: [
      {
        type: "p",
        text: "Ubat ialah bahan yang digunakan untuk mencegah, mengawal atau merawat penyakit — sama ada ubat moden atau tradisional.",
      },
      {
        type: "ul",
        items: [
          "Mencegah — contoh: vaksin.",
          "Mengawal — contoh: ubat kencing manis, ubat darah tinggi.",
          "Merawat — contoh: ubat tahan sakit, antibiotik untuk jangkitan bakteria.",
        ],
      },
      {
        type: "p",
        text: "Dari segi undang-undang, ubat dibahagikan kepada ubat berpreskripsi, ubat tanpa preskripsi (termasuk yang hanya daripada ahli farmasi, dan ubat am di rak), serta ubat tradisional dan komplementari.",
      },
    ],
    followUps: [
      "Apa itu ubat berpreskripsi?",
      "Apa ciri ubat berdaftar?",
      "Apa itu 5B?",
    ],
  },
  {
    id: "preskripsi",
    title: "Ubat berpreskripsi dan tanpa preskripsi",
    shortLabel: "Preskripsi",
    keywords: [
      "preskripsi",
      "resep",
      "antibiotik",
      "racun",
      "kumpulan",
      "farmasi",
      "doktor",
      "otc",
      "kaunter",
      "panadol",
    ],
    phrases: [
      "ubat berpreskripsi",
      "tanpa preskripsi",
      "perlu preskripsi",
      "antibiotik",
      "beli sendiri",
    ],
    blocks: [
      {
        type: "p",
        text: "Ubat berpreskripsi (kumpulan A dan B Akta Racun 1952) hanya boleh diperoleh selepas doktor menulis preskripsi. Preskripsi mesti ada nama pesakit, nama ubat, dos, tandatangan dan cop doktor.",
      },
      {
        type: "p",
        text: "Ubat tanpa preskripsi merangkumi:",
      },
      {
        type: "ul",
        items: [
          "Ubat Kumpulan C — hanya boleh dibeli daripada ahli farmasi di premis farmasi berdaftar.",
          "Ubat am (OTC) — boleh dipamerkan di rak farmasi atau pasaraya. Contoh: paracetamol (Panadol), aspirin, plaster berubat, antiseptik.",
        ],
      },
      {
        type: "warn",
        text: "Antibiotik, ubat darah tinggi dan ubat kencing manis bukan barang rak. Jangan beli tanpa preskripsi, dan jangan kongsi baki ubat dengan orang lain.",
      },
    ],
    followUps: [
      "Apa maksud kod MAL A dan X?",
      "Di mana patut beli ubat?",
      "Apa itu 5B?",
    ],
  },
  {
    id: "beli-mana",
    title: "Di mana patut beli ubat",
    shortLabel: "Tempat beli",
    keywords: [
      "beli",
      "beli",
      "farmasi",
      "klinik",
      "hospital",
      "pasaraya",
      "online",
      "shopee",
      "lazada",
      "tiktok",
      "sumber",
      "premis",
    ],
    phrases: [
      "mana nak beli",
      "beli kat mana",
      "beli online",
      "farmasi berdaftar",
      "sumber dipercayai",
    ],
    blocks: [
      {
        type: "p",
        text: "Beli ubat dan kosmetik daripada sumber yang boleh dipercayai: hospital, klinik, dan premis farmasi berlesen. Elakkan penjual tanpa identiti di media sosial atau e-dagang.",
      },
      {
        type: "ul",
        items: [
          "Rujuk doktor atau ahli farmasi jika ada masalah kesihatan.",
          "Jangan beli ubat tanpa pengawasan profesional kesihatan.",
          "Jika beli dalam talian, pastikan penjual ialah farmasi/premis berlesen, produk ada MAL + hologram, dan semak QUEST 3+ terlebih dahulu.",
        ],
      },
      {
        type: "warn",
        text: "Jualan ubat di Facebook, TikTok, Telegram atau WhatsApp oleh individu peribadi adalah tanda amaran. Banyak rampasan ubat tidak berdaftar bermula daripada aduan jualan dalam talian.",
      },
    ],
    followUps: [
      "Apa tanda tipu daya ubat?",
      "Bagaimana nak semak produk?",
      "Bagaimana nak buat aduan?",
    ],
  },
  {
    id: "label",
    title: "Baca label, sampul dan sisip bungkusan",
    shortLabel: "Label ubat",
    keywords: [
      "label",
      "sampul",
      "sisip",
      "bungkusan",
      "tarikh luput",
      "expired",
      "dos",
      "arahan",
      "bahan aktif",
      "jenama",
      "nama kimia",
    ],
    phrases: [
      "baca label",
      "sampul ubat",
      "tarikh luput",
      "nama ubat",
      "bahan aktif",
    ],
    blocks: [
      {
        type: "p",
        text: "Kenali ubat anda: baca label, sampul ubat dan sisip bungkusan. Nama kimia ubat sama di seluruh dunia, tetapi jenama berbeza (contoh paracetamol = Panadol, Uphamol).",
      },
      {
        type: "p",
        text: "Pada label, pastikan ada:",
      },
      {
        type: "ul",
        items: [
          "Nama produk dan bahan aktif",
          "Cara pengambilan dan dos",
          "Indikasi (kegunaan) dan amaran",
          "Tarikh luput, nombor kelompok, maklumat pengilang",
          "Cara penyimpanan",
          "Nombor MAL dan hologram (untuk ubat berdaftar)",
        ],
      },
      {
        type: "p",
        text: "Pada sampul ubat dari klinik/farmasi, anda berhak nampak nama penuh ubat, nama pesakit, tarikh, dos, dan label “Ubat Terkawal” jika berkaitan.",
      },
    ],
    followUps: [
      "Apa itu 5B?",
      "Apa ciri ubat berdaftar?",
      "Apa hak pengguna ubat?",
    ],
  },
  {
    id: "hak-pengguna",
    title: "Hak pengguna ubat",
    shortLabel: "Hak pengguna",
    keywords: [
      "hak",
      "pengguna",
      "maklumat",
      "pilihan",
      "lupus",
      "buang",
      "pendidikan",
    ],
    phrases: ["hak pengguna", "hak saya", "hak sebagai pengguna"],
    blocks: [
      {
        type: "p",
        text: "Sebagai pengguna ubat, anda berhak:",
      },
      {
        type: "ul",
        items: [
          "Menerima rawatan kesihatan yang baik",
          "Mendapat maklumat lengkap tentang ubat yang digunakan",
          "Menerima ubat yang berkualiti, selamat dan berkesan",
          "Membuat pilihan ke atas ubat dan produk kesihatan",
          "Mendapat pendidikan kepenggunaan",
          "Menyuarakan pendapat dan masalah mengikut saluran yang betul",
          "Alam sekitar yang sihat melalui pelupusan ubat yang selamat",
        ],
      },
      {
        type: "tip",
        text: "Jangan buang ubat ke dalam sinki atau tong sampah biasa jika ada pusat pengumpulan. Tanya ahli farmasi tentang pelupusan yang selamat.",
      },
    ],
    followUps: [
      "Bagaimana nak buat aduan?",
      "Apa itu 5B?",
      "Di mana patut beli ubat?",
    ],
  },
  {
    id: "sobat-program",
    title: "Program SOBAT",
    shortLabel: "SOBAT",
    keywords: [
      "sobat",
      "sahabat",
      "kesedaran",
      "cpf",
      "pahang",
      "penguatkuasaan",
      "program",
    ],
    phrases: [
      "apa itu sobat",
      "sahabat ubat",
      "penguatkuasaan farmasi",
    ],
    blocks: [
      {
        type: "p",
        text: "Chatbot Info Kesedaran Ubat memberi maklumat berkaitan ubat berdaftar, kosmetik bernotifikasi, dan kesedaran bahaya ubat tidak sah. Kandungan berasaskan bahan Cawangan Penguatkuasaan Farmasi (CPF) Pahang — termasuk modul Sahabat Ubat (SOBAT) — dan maklumat rasmi Program Perkhidmatan Farmasi KKM.",
      },
      {
        type: "p",
        text: "SOBAT (Sahabat Ubat) ialah platform sehenti CPF Pahang untuk orang awam: semak status ubat/kosmetik, semak hologram, semak kelulusan iklan, dan salurkan aduan.",
      },
      {
        type: "links",
        items: [
          {
            label: "SOBAT CPF Pahang",
            href: "https://beacons.ai/cpfpahang",
          },
        ],
      },
      {
        type: "tip",
        text: "Untuk maklumat lanjut dan aduan, boleh layari platform SOBAT di https://beacons.ai/cpfpahang atau hubungi 095707737.",
      },
    ],
    followUps: [
      "Macam mana nak kenal ubat berdaftar?",
      "Bagaimana nak buat aduan?",
      "Apa tanda tipu daya ubat?",
    ],
  },
  {
    id: "nasihat",
    title: "Nasihat kepada pengguna",
    shortLabel: "Nasihat",
    keywords: [
      "nasihat",
      "tips",
      "amalan",
      "elak",
      "berhati",
      "waspada",
      "panduan pengguna",
    ],
    phrases: ["nasihat pengguna", "tips elak tertipu", "amalan selamat"],
    blocks: [
      {
        type: "p",
        text: "Sebelum membeli dan menggunakan ubat atau kosmetik, amalkan langkah ini:",
      },
      {
        type: "ol",
        items: [
          "Semak status pendaftaran di QUEST 3+ / NPRA.",
          "Semak ketulenan hologram (FarmaChecker atau farmasi).",
          "Beli daripada sumber dipercayai.",
          "Rujuk profesional kesihatan yang diiktiraf.",
          "Pastikan iklan ada kelulusan Lembaga Iklan Ubat (KKLIU).",
          "Jangan percaya janji manis atau testimoni.",
        ],
      },
      {
        type: "p",
        text: "Untuk maklumat lanjut dan aduan, boleh layari platform SOBAT di https://beacons.ai/cpfpahang atau hubungi 095707737.",
      },
    ],
    followUps: [
      "Bagaimana nak semak di QUEST 3+?",
      "Apa tanda tipu daya ubat?",
      "Ke mana nak adu?",
    ],
  },
];

export const TOPICS: Topic[] = [...CORE_TOPICS, ...EXTRA_TOPICS];
