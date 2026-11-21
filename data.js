/**
 * ============================================================================
 * DATA PORTOFOLIO PRIBADI — SATU-SATUNYA FILE YANG PERLU DIEDIT
 * ============================================================================
 *
 * Cara mengganti isi website (tanpa menyentuh index.html):
 * 1. Ubah bagian `site`, `hero`, `about`, dan `contact` dengan identitas asli.
 * 2. Taruh gambar karya di folder `assets/works/` (disarankan format .webp,
 *    lebar maks 1400px, ukuran < 250 KB), lalu tambahkan objek baru di `works`.
 * 3. Taruh pratinjau sertifikat di folder `assets/certs/` (resolusi rendah /
 *    tutup nomor sensitif demi privasi repo publik), lalu tambahkan di `certs`.
 * 4. Jika gambar belum ada atau salah ketik path, situs otomatis menggantinya
 *    dengan blok warna rapi agar tata letak tidak pernah rusak.
 *
 * Catatan keamanan:
 * Semua teks di file ini otomatis di-escape saat dirender, dan semua tautan
 * divalidasi protokolnya (hanya https://, http://, atau mailto:).
 */

window.PORTFOLIO_DATA = {
  // Metadata halaman & navigasi
  site: {
    title: "Raka Pratama — Portofolio Karya & Sertifikat",
    description:
      "Portofolio lintas bidang berisi karya identitas visual, antarmuka web, ilustrasi editorial, serta daftar sertifikat yang terverifikasi.",
    shortName: "Raka Pratama",
    navLabels: {
      works: "Karya",
      certs: "Sertifikat",
      about: "Tentang",
      contact: "Kontak"
    },
    sectionTitles: {
      works: "Karya Pilihan",
      certs: "Sertifikat & Kredensial",
      about: "Tentang",
      contact: "Kontak"
    },
    footerNote: "Disusun dan dirawat langsung dari satu berkas data."
  },

  // Blok kobalt di layar pertama (satu-satunya momen animasi naik)
  hero: {
    // Nama besar yang naik saat halaman dibuka (gunakan 1–2 baris singkat)
    nameLines: ["Raka", "Pratama"],
    role: "Desainer Visual, Pengembang Antarmuka & Ilustrator Editorial",
    summary:
      "Saya merancang sistem identitas, antarmuka web yang ringan, dan materi cetak bagi merek independen, penerbit, serta tim produk digital.",
    metaLocation: "Bandung, Indonesia (WIB)",
    metaAvailability: "Terbuka untuk proyek lepas & kolaborasi terpilih",
    primaryCtaLabel: "Jelajahi Karya",
    primaryCtaHref: "#karya",
    secondaryCtaLabel: "Hubungi Langsung",
    secondaryCtaHref: "#kontak"
  },

  // Daftar karya visual (galeri masonry + filter kategori otomatis)
  // Prinsip konten: setiap karya menjawab 3 hal — masalah, peran, dan hasil.
  works: [
    {
      id: "kopi-teduh-kemasan",
      title: "Kopi Teduh — Sistem Kemasan & Identitas",
      category: "Identitas Visual",
      year: "2026",
      client: "Kopi Teduh Roastery",
      image: "assets/works/work-kopi-teduh.webp",
      imageAlt:
        "Dua kantong kopi kertas matte berwarna putih gading dan biru kobalt bersama kotak kopi seduh tetes di atas lempeng batu dengan bayangan cahaya alami.",
      aspectRatio: "3 / 4",
      fallbackColor: "#2338D9",
      tools: ["Illustrator", "InDesign", "Cetak Offset"],
      problem:
        "Tujuh varian biji single-origin dari Kopi Teduh sulit dibedakan di rak kedai karena label lama memakai format tempelan seragam dengan kontras tipis.",
      role:
        "Merancang ulang arsitektur kemasan dari nol: kode warna per profil sangrai, sistem grid tipografi tahan cetak dua warna, serta panduan produksi untuk percetakan lokal.",
      result:
        "Biaya cetak per kemasan turun 22% berkat pengurangan plat warna, sementara pengunjung kedai dapat mengenali tingkat keasaman dan asal biji dalam satu pandang.",
      projectUrl: ""
    },
    {
      id: "loka-katalog-buku",
      title: "Loka — Katalog Web Penerbit Independen",
      category: "Antarmuka Web",
      year: "2026",
      client: "Kolektif Penerbit Loka",
      image: "assets/works/work-loka-web.webp",
      imageAlt:
        "Laptop perak matte di atas meja kayu dan beton terang menampilkan antarmuka katalog buku independen dengan grid sampul bersih dan tombol biru kobalt.",
      aspectRatio: "16 / 10",
      fallbackColor: "#263042",
      tools: ["HTML", "CSS", "JavaScript", "Figma"],
      problem:
        "Pembaca di ponsel kesulitan mencari stok buku terbitan kecil karena situs lama memuat gambar mentah berukuran besar dan memaksa login sebelum melihat rincian harga.",
      role:
        "Mendesain antarmuka katalog berbasis filter instan dan membangun front-end statis ringan tanpa kerangka kerja berat agar langsung bisa dihosting di GitHub Pages.",
      result:
        "Bobot muat awal halaman turun dari 4,2 MB menjadi 180 KB dengan skor Lighthouse Performance 98, dan pesan pemesanan buku lewat tautan langsung naik dalam bulan pertama.",
      projectUrl: ""
    },
    {
      id: "pekan-arsip-poster",
      title: "Pekan Arsip Nusantara — Poster & Sistem Grafis",
      category: "Identitas Visual",
      year: "2025",
      client: "Forum Arsip Kota",
      image: "assets/works/work-pekan-arsip.webp",
      imageAlt:
        "Poster pameran modernis berbahan kertas katun putih gading dengan komposisi geometris biru kobalt, tinta arang, dan terakota terpasang di dinding galeri beton.",
      aspectRatio: "4 / 5",
      fallbackColor: "#1E304F",
      tools: ["Illustrator", "Cetak Risograf", "Grid Swiss"],
      problem:
        "Pameran arsip foto dan peta kota sering dianggap kaku oleh pengunjung muda sehingga materi publikasi sebelumnya kurang menarik perhatian di ruang publik.",
      role:
        "Menyusun bahasa visual pameran berupa seri 4 poster A2, papan penunjuk ruang, dan buku saku jadwal yang seluruhnya dapat dicetak dengan tiga tinta dasar.",
      result:
        "Seluruh edisi cetak terbatas 250 lembar habis dikoleksi pengunjung dalam tiga hari pertama pameran dan identitasnya dipakai ulang untuk program diskusi bulanan.",
      projectUrl: ""
    },
    {
      id: "atlas-kampung-ilustrasi",
      title: "Atlas Kampung Kota — Seri Ilustrasi Editorial",
      category: "Ilustrasi & Cetak",
      year: "2025",
      client: "Jurnal Ruang & Kota",
      image: "assets/works/work-atlas-kampung.webp",
      imageAlt:
        "Ilustrasi editorial bergaya cetak risograf dengan sudut isometris menampilkan atap genteng terakota, pohon pisang, gang sempit, warung kopi, dan sepeda dalam palet kobalt dan oker.",
      aspectRatio: "1 / 1",
      fallbackColor: "#8C3B2B",
      tools: ["Procreate", "Photoshop", "Tekstur Cetak"],
      problem:
        "Artikel liputan panjang tentang tata ruang gang padat penduduk butuh visual pendamping yang hangat dan informatif tanpa terasa seperti diagram teknis yang dingin.",
      role:
        "Menggambar enam ilustrasi isometris berseri dari observasi lapangan langsung, mulai dari sketsa struktur bangunan hingga pewarnaan palet empat warna.",
      result:
        "Diterbitkan sebagai sampul dan sisipan lipatan tengah edisi cetak 1.500 eksemplar serta dijadikan materi pameran keliling di tiga ruang baca independen.",
      projectUrl: ""
    },
    {
      id: "ruang-dengar-audio",
      title: "Ruang Dengar — Pemutar Arsip Audio Komunitas",
      category: "Antarmuka Web",
      year: "2025",
      client: "Proyek Inisiatif Mandiri",
      image: "assets/works/work-ruang-dengar.webp",
      imageAlt:
        "Tablet hitam matte di dudukan aluminium di samping headphone studio menampilkan antarmuka pemutar audio minimalis dengan gelombang suara biru kobalt dan latar terang.",
      aspectRatio: "4 / 3",
      fallbackColor: "#234B3E",
      tools: ["Web Audio API", "CSS Grid", "Aksesibilitas WCAG"],
      problem:
        "Rekaman sejarah lisan dari komunitas daerah tersimpan acak di folder penyimpanan daring tanpa penanda bab, transkrip sinkron, maupun navigasi keyboard.",
      role:
        "Merancang antarmuka pemutar web yang tenang dan membangun pemutar audio interaktif dengan penanda waktu per topik serta kontrol penuh via tombol keyboard.",
      result:
        "Sebanyak 42 rekaman narasumber lokal berhasil diindeks dan dapat diputar mulus di koneksi seluler lambat dengan dukungan pembaca layar penuh.",
      projectUrl: ""
    },
    {
      id: "monograf-keramik-buku",
      title: "Monograf Keramik Kasongan — Tata Letak Buku",
      category: "Ilustrasi & Cetak",
      year: "2024",
      client: "Studio Gerabah & Arsip",
      image: "assets/works/work-monograf-keramik.webp",
      imageAlt:
        "Foto dari atas buku monograf keramik bersampul keras yang terbuka di atas kain linen abu terang, memperlihatkan tata letak grid bersih dengan foto bejana terakota.",
      aspectRatio: "3 / 2",
      fallbackColor: "#7A5C2E",
      tools: ["InDesign", "Tipografi Buku", "Kurasi Foto"],
      problem:
        "Dokumentasi 120 halaman karya perajin keramik lokal memerlukan ritme tata letak yang memberi ruang napas bagi foto tekstur tanah liat sekaligus memuat catatan teknis pembakaran.",
      role:
        "Bertanggung jawab atas struktur grid 6 kolom, pemilihan pasangan huruf cetak, penyesuaian profil warna CMYK, hingga pendampingan uji cetak perdana.",
      result:
        "Buku dicetak dalam 800 eksemplar bersampul keras tanpa revisi cetak ulang dan masuk koleksi referensi perpustakaan desain lokal.",
      projectUrl: ""
    }
  ],

  // Daftar sertifikat (tampil sebagai daftar rapi + pratinjau dialog + verifikasi opsional)
  // Tips privasi: unggah pratinjau resolusi rendah dan samarkan nomor identitas sensitif.
  certs: [
    {
      id: "cert-google-ux",
      title: "Google UX Design Professional Certificate",
      issuer: "Google · Coursera",
      year: "2025",
      credentialNote: "ID Kredensial disamarkan untuk publik: GUX-••••-4918",
      summary:
        "Riset pengguna, arsitektur informasi, wireframe, uji kebergunaan, dan sistem desain responsif.",
      image: "assets/certs/cert-ux-design.webp",
      imageAlt:
        "Pratinjau sertifikat Google UX Design Professional Certificate tahun 2025 dengan nomor kredensial disamarkan.",
      fallbackColor: "#2338D9",
      verifyUrl: "https://www.coursera.org/professional-certificates/google-ux-design"
    },
    {
      id: "cert-fcc-rwd",
      title: "Responsive Web Design & Web Accessibility",
      issuer: "freeCodeCamp",
      year: "2025",
      credentialNote: "Kurikulum 300 jam · HTML Semantik, CSS Grid/Flexbox, WCAG AA",
      summary:
        "Membangun halaman web semantik, tata letak adaptif mulai layar 360px, kontras aksesibel, dan navigasi keyboard.",
      image: "assets/certs/cert-web-accessibility.webp",
      imageAlt:
        "Pratinjau sertifikat Responsive Web Design & Web Accessibility dari freeCodeCamp tahun 2025.",
      fallbackColor: "#263042",
      verifyUrl: "https://www.freecodecamp.org/learn/2022/responsive-web-design/"
    },
    {
      id: "cert-editorial-type",
      title: "Lokakarya Tipografi Editorial & Sistem Grid",
      issuer: "Forum Tipografi Bandung",
      year: "2024",
      credentialNote: "Sertifikat Kelulusan Lokakarya Intensif 6 Pekan",
      summary:
        "Hierarki tipografi dwibahasa, rasio skala huruf untuk cetak dan layar, serta komposisi grid asimetris.",
      image: "assets/certs/cert-editorial-type.webp",
      imageAlt:
        "Pratinjau sertifikat Lokakarya Tipografi Editorial & Sistem Grid tahun 2024.",
      fallbackColor: "#234B3E",
      verifyUrl: ""
    }
  ],

  // Bagian Tentang
  about: {
    lead:
      "Bekerja di persimpangan desain grafis, pengembangan antarmuka web, dan ilustrasi — dengan fokus pada kejelasan baca dan ketahanan jangka panjang.",
    paragraphs: [
      "Selama lima tahun terakhir saya membantu usaha kecil, penerbit independen, dan tim produk merapikan cara mereka tampil di cetak maupun layar. Pendekatan kerja saya sederhana: mulai dari masalah nyata di lapangan, singkirkan ornamen yang tidak perlu, lalu eksekusi sampai detail tipografi dan kodenya beres.",
      "Seluruh karya di halaman ini dipilih bukan karena efek visualnya semata, melainkan karena keputusannya bisa dipertanggungjawabkan — baik ke pembaca, percetakan, maupun pengembang yang merawatnya nanti."
    ],
    disciplinesTitle: "Bidang Kerja",
    disciplines: [
      "Identitas visual, kemasan, dan panduan grafis cetak",
      "Desain antarmuka & pengembangan front-end statis (HTML, CSS, JS)",
      "Ilustrasi editorial, tata letak buku, dan materi pameran",
      "Audit aksesibilitas web (WCAG AA) dan optimasi performa muat"
    ],
    principlesTitle: "Cara Kerja",
    principles: [
      {
        label: "Ringkas & Langsung",
        detail: "Setiap halaman dan kemasan memiliki satu hierarki baca yang jelas dalam 10 detik pertama."
      },
      {
        label: "Tanpa Beban Berlebih",
        detail: "Kode web ditulis bersih, mudah dirawat dari satu berkas data, dan cepat dibuka di ponsel."
      },
      {
        label: "Terbuka Diuji",
        detail: "Tata letak diperiksa langsung di layar sempit, navigasi keyboard, dan kondisi gambar gagal muat."
      }
    ]
  },

  // Bagian Kontak (tanpa formulir berbasis server)
  contact: {
    lead:
      "Punya rencana proyek identitas, website ringkas, atau ingin melihat berkas studi kasus lengkap?",
    note:
      "Kirim ringkasan singkat lewat email. Biasanya saya membalas dalam 1–2 hari kerja (WIB).",
    email: "halo@rakapratama.example",
    links: [
      { label: "GitHub", url: "https://github.com/deinnaja" }
      // Tambahkan akun lain jika sudah siap, misalnya:
      // { label: "LinkedIn", url: "https://linkedin.com/in/username-kamu" },
      // { label: "Instagram", url: "https://instagram.com/username-kamu" }
    ]
  }
};
