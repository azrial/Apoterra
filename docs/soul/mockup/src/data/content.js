// Content data for Apoterra landing page.
// All user-facing strings are in Indonesian as per brand guidelines.
// Code identifiers remain in English.

export const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Pilar", href: "#pilar" },
  { label: "Fitur", href: "#fitur" },
  { label: "Prinsip", href: "#prinsip" },
  { label: "Persona", href: "#persona" },
  { label: "Sukses", href: "#sukses" },
  { label: "Visi", href: "#visi" },
];

export const HERO = {
  tagline: "Berpijak kokoh. Bertumbuh tenang.",
  narrative:
    "Apotek yang baik tidak dibangun di atas pasir — ia butuh tanah yang kokoh. Apoterra adalah tanah itu: tempat apotek Anda berpijak kuat, berakar dalam, dan bertumbuh tenang.",
  promise:
    "Apoterra menopang operasional apotek Anda — memberi pijakan yang kokoh, kendali yang penuh, dan ketenangan yang nyata.",
  primaryCta: "Coba Sekarang",
  secondaryCta: "Pelajari Lebih Lanjut",
};

export const PILLARS = [
  {
    id: "pijakan-kokoh",
    title: "Pijakan kokoh",
    description:
      "Fondasi operasional yang stabil & tepercaya. Data stok/harga/kedaluwarsa yang akurat dan sistem yang andal sebagai dasar harian.",
    iconName: "foundation",
  },
  {
    id: "kendali-penuh",
    title: "Kendali penuh",
    description:
      "Kendali & visibilitas tetap di tangan pemilik atas data dan operasional bisnis apotek. Pemilik dapat memantau dan mengendalikan seluruh operasional dari mana pun.",
    iconName: "control",
  },
  {
    id: "ketenangan-nyata",
    title: "Ketenangan nyata",
    description:
      "Keyakinan bahwa semuanya beres / pada tempatnya. Transparansi + peringatan dini (kedaluwarsa, selisih) yang mengurangi kekhawatiran.",
    iconName: "peace",
  },
];

export const FEATURES = [
  {
    id: "data-lengkap",
    title: "Data & catatan lengkap",
    description:
      "Semua transaksi, stok, dan pembelian tercatat digital, transparan, dan bisa diaudit.",
    iconName: "database",
  },
  {
    id: "pantau-jarak-jauh",
    title: "Pantau dari mana pun",
    description:
      "Dashboard ringkasan harian, laporan, dan status stok diakses dari jarak jauh.",
    iconName: "monitor",
  },
  {
    id: "rekonsiliasi-selisih",
    title: "Rekonsiliasi selisih",
    description: "Deteksi dan lacak asal-usul selisih kas & stok.",
    iconName: "reconcile",
  },
  {
    id: "peringatan-kedaluwarsa",
    title: "Peringatan kedaluwarsa",
    description:
      "Obat kedaluwarsa terdeteksi lebih dini, pembuangan berkurang.",
    iconName: "expiry",
  },
  {
    id: "sumber-harga",
    title: "Sumber harga terpusat",
    description:
      "Harga akurat dan terpusat, anti salah input di kasir.",
    iconName: "price",
  },
  {
    id: "kasir-cepat",
    title: "Kasir cepat & intuitif",
    description:
      "Proses transaksi cepat, cek stok mudah, antrean berkurang.",
    iconName: "cashier",
  },
];

export const PRINCIPLES = {
  core: [
    {
      id: "kesederhanaan",
      title: "Kesederhanaan & Kemudahan",
      description:
        "Antarmuka sederhana, intuitif, minim pelatihan — mudah dipahami dan digunakan.",
    },
    {
      id: "akurasi",
      title: "Akurasi Data",
      description:
        "Data yang tercatat benar — stok, harga, kedaluwarsa, transaksi.",
    },
    {
      id: "transparansi",
      title: "Transparansi",
      description:
        "Semua terlacak & bisa diaudit — pengguna merasa tenang karena semuanya transparan.",
    },
  ],
  dualStandards: {
    heading: "Standar Ganda",
    items: ["Cepat DAN Akurat", "Konsisten DAN Fleksibel"],
    note: "Kedua standar harus terpenuhi secara bersamaan — bukan pilihan salah satu.",
  },
};

export const PERSONAS = [
  {
    id: "pemilik",
    role: "Pemilik (Owner)",
    summary: "Mengelola, memantau, dan mengambil keputusan.",
    types: [
      "Tipe A: Hadir & Terlibat Langsung",
      "Tipe B: Jarang Hadir / Memantau Jarak Jauh",
    ],
    iconName: "owner",
  },
  {
    id: "staf",
    role: "Staf",
    summary: "Seluruh tim operasional menjalankan operasional harian.",
    devices: "Tablet/handphone dan komputer di loket kasir. Antarmuka responsif.",
    iconName: "staff",
  },
];

export const VISION_MISSION = {
  vision:
    "Menjadi fondasi digital yang menumbuhkan apotek secara organik — berakar kokoh dan bertumbuh tenang.",
  mission: [
    "Membangun aplikasi operasional apotek yang akurat dan mudah dipakai sehari-hari.",
    "Menghadirkan kendali operasional dan visibilitas menyeluruh bagi pemilik — kapan pun, dari mana pun.",
    "Menekan kerugian operasional agar apotek lebih sehat dan berkelanjutan.",
    "Memberdayakan apotek bertumbuh dari satu toko menjadi jaringan yang kokoh.",
  ],
};

export const SUCCESS_METRICS = {
  customer: {
    heading: "Sukses untuk Apotek Pelanggan",
    outcomes: [
      "Data operasional lengkap, teraudit, dan akurat",
      "Pemilik bisa memantau ringkasan harian dari mana pun",
      "Selisih kas & stok menurun / terlacak",
      "Obat kedaluwarsa terdeteksi lebih dini, pembuangan berkurang",
      "Kesalahan harga menurun",
    ],
  },
  business: {
    heading: "Sukses untuk Apoterra (Bisnis)",
    priorities: [
      { rank: 1, label: "Retensi", description: "Pengguna tetap aktif menggunakan Apoterra." },
      { rank: 2, label: "Aktivasi", description: "Pengguna baru mencapai nilai inti dengan cepat." },
      { rank: 3, label: "Pertumbuhan", description: "Adopsi meluas ke lebih banyak apotek." },
      { rank: 4, label: "Kepuasan (NPS)", description: "Pengguna merekomendasikan Apoterra." },
    ],
  },
};

export const FOOTER = {
  tagline: "Berpijak kokoh. Bertumbuh tenang.",
  columns: [
    {
      heading: "Produk",
      links: ["Fitur", "Pilar", "Prinsip", "Harga"],
    },
    {
      heading: "Perusahaan",
      links: ["Tentang Kami", "Visi & Misi", "Karier", "Kontak"],
    },
    {
      heading: "Dukungan",
      links: ["Pusat Bantuan", "Dokumentasi", "Status Sistem", "Kebijakan Privasi"],
    },
  ],
  copyright: "© 2026 Apoterra. Semua hak dilindungi.",
};
