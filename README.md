# Portofolio Pribadi

Website portofolio pribadi statis untuk kreator lintas bidang — menampilkan galeri karya masonry dengan filter kategori, dialog detail (lightbox), serta daftar sertifikat dengan pratinjau dan tautan verifikasi.

Dirancang ringan untuk **GitHub Pages** tanpa proses build, tanpa framework berat, dan seluruh konten dikendalikan dari satu berkas: [`data.js`](./data.js).

## Struktur Repositori

```text
.
├── index.html          # Struktur halaman, gaya visual, dan logika render aman
├── data.js             # Satu-satunya file yang perlu diedit untuk konten
├── README.md           # Panduan pengelolaan & publikasi
├── assets/
│   ├── works/          # Gambar karya visual (.webp disarankan)
│   └── certs/          # Pratinjau sertifikat resolusi aman (.webp disarankan)
└── docs/
    └── PRD.md          # Dokumen Product Requirements (PRD)
```

## Cara Menambah Karya Baru (< 5 Menit)

Kamu **tidak perlu menyentuh `index.html`** sama sekali.

1. Siapkan gambar karya dan simpan ke folder `assets/works/` (misalnya `assets/works/karya-baru.webp`).
2. Buka [`data.js`](./data.js), lalu tambahkan satu objek baru ke dalam array `works`:

```js
{
  id: "nama-unik-karya",
  title: "Judul Karya",
  category: "Identitas Visual", // Kategori baru otomatis muncul di bar filter
  year: "2026",
  client: "Nama Klien atau Proyek Mandiri",
  image: "assets/works/karya-baru.webp",
  imageAlt: "Deskripsi singkat apa yang tampak pada gambar untuk aksesibilitas.",
  aspectRatio: "4 / 5", // Pilihan: "3 / 4", "4 / 5", "1 / 1", "4 / 3", "16 / 10", "3 / 2"
  fallbackColor: "#2338D9", // Warna blok otomatis bila gambar belum siap
  tools: ["Figma", "HTML/CSS"],
  problem: "Masalah nyata yang ingin diselesaikan.",
  role: "Peran dan keputusan konkret yang kamu kerjakan.",
  result: "Hasil atau dampak yang tercapai.",
  projectUrl: "https://contoh-tautan-opsional.com" // Kosongkan "" jika tidak ada
}
```

3. Simpan `data.js`, lalu commit & push ke GitHub. GitHub Pages akan memperbarui situs secara otomatis dalam ~1 menit.

## Cara Menambah Sertifikat

1. Siapkan gambar pratinjau sertifikat di `assets/certs/`.
   > **Catatan Privasi:** Karena repositori GitHub Pages bersifat publik, unggah versi **resolusi rendah** (maks. lebar 900px) dan **samarkan/tutup nomor kredensial, tanda tangan, atau data pribadi sensitif** pada file gambar sebelum diunggah.
2. Tambahkan objek baru ke array `certs` di [`data.js`](./data.js):

```js
{
  id: "cert-baru",
  title: "Nama Sertifikat",
  issuer: "Nama Penyelenggara",
  year: "2026",
  credentialNote: "Catatan singkat / ID disamarkan",
  summary: "Ringkasan kompetensi utama.",
  image: "assets/certs/cert-baru.webp",
  imageAlt: "Pratinjau sertifikat Nama Sertifikat tahun 2026.",
  fallbackColor: "#263042",
  verifyUrl: "https://tautan-verifikasi-resmi.com" // Opsional, kosongkan "" jika tidak ada
}
```

## Panduan Ukuran & Kompresi Gambar (WebP)

Agar halaman tetap cepat dan skor Lighthouse Performance di atas 90:

| Jenis Gambar | Lebar Maksimal | Format Disarankan | Target Ukuran File |
|---|---|---|---|
| Karya (`assets/works/`) | 1200–1400 px | `.webp` (kualitas 80–84) | < 250 KB |
| Sertifikat (`assets/certs/`) | 800–1000 px | `.webp` (kualitas 78–82) | < 120 KB |

Jika ingin mengonversi gambar dari PNG/JPG ke WebP secara lokal (menggunakan `cwebp` atau [Squoosh](https://squoosh.app)):

```bash
cwebp -q 82 input.png -o assets/works/karya-baru.webp
```

## Menjalankan Secara Lokal

Karena `index.html` membaca `data.js` tanpa module bundler, kamu bisa langsung membuka `index.html` di browser, atau menjalankan server lokal ringan:

```bash
npx serve .
```

## Publikasi ke GitHub Pages

1. Buat repositori baru di GitHub (misal `portofolio` atau `<username>.github.io`).
2. Hubungkan dan push branch `main`:
   ```bash
   git remote add origin https://github.com/<username>/<nama-repo>.git
   git push -u origin main
   ```
3. Di repositori GitHub, buka **Settings → Pages → Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **`main`** · Folder: **`/ (root)`**
   - Klik **Save**.

## Daftar Periksa Sebelum Dibagikan (Metrik Rilis)

- [ ] Nama, peran, bio, email, dan tautan sosial di `data.js` sudah diganti dengan data asli.
- [ ] Minimal **5 karya asli** terisi (masing-masing menjawab *masalah*, *peran*, dan *hasil*).
- [ ] Minimal **2 sertifikat asli** terisi (dengan nomor sensitif disamarkan).
- [ ] Semua gambar dikompres ke WebP dan memiliki `imageAlt` yang deskriptif.
- [ ] Diuji di browser desktop dan layar ponsel (mulai 360px), termasuk navigasi keyboard dan tombol `Esc` pada dialog.
