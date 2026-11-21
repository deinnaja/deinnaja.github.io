# PRD: Website Portofolio Pribadi

## 1. Ringkasan
Website portofolio pribadi untuk kreator lintas bidang. Menampilkan karya visual dan sertifikat, dihosting gratis di GitHub Pages, dan bisa diperbarui hanya dengan mengedit satu file data (`data.js`) dan menambah gambar.

## 2. Tujuan
- Calon klien atau perekrut memahami apa yang pemilik kerjakan dalam 10 detik pertama.
- Pemilik bisa menambah karya baru dalam kurang dari 5 menit tanpa menyentuh HTML.
- Tampilan punya identitas sendiri dan tidak terlihat seperti template.

## 3. Pengguna
| Pengguna | Kebutuhan |
|---|---|
| Calon klien / perekrut | Melihat kualitas karya cepat, memverifikasi sertifikat, menghubungi pemilik |
| Pemilik (admin) | Menambah dan mengubah konten tanpa server atau database |

## 4. Ruang lingkup (v1)
- **Masuk:** hero nama dan peran, galeri karya dengan filter kategori, tampilan detail (lightbox), daftar sertifikat dengan pratinjau dan tautan verifikasi, bagian tentang, kontak, responsif, mendukung `prefers-reduced-motion`.
- **Tidak masuk:** login admin, CMS, blog, komentar, analitik, formulir kontak berbasis server.

## 5. Kebutuhan fungsional
| ID | Kebutuhan | Prioritas | Status v1 |
|---|---|---|---|
| F1 | Semua teks dan daftar item dibaca dari `data.js` | Wajib | Terpenuhi |
| F2 | Karya tampil sebagai galeri masonry, bisa difilter per kategori | Wajib | Terpenuhi |
| F3 | Klik karya membuka dialog berisi gambar besar, judul, tahun, deskripsi (masalah, peran, hasil) | Wajib | Terpenuhi |
| F4 | Sertifikat tampil sebagai daftar: thumbnail, nama, penyelenggara, tahun, pratinjau, tautan verifikasi opsional | Wajib | Terpenuhi |
| F5 | Gambar yang hilang diganti blok warna otomatis, halaman tidak rusak | Wajib | Terpenuhi |
| F6 | Navigasi menempel di atas dengan tautan ke tiap bagian | Wajib | Terpenuhi |
| F7 | Dikirim via GitHub Pages tanpa proses build | Wajib | Terpenuhi |
| F8 | Halaman detail terpisah per karya (studi kasus) | Nanti | Backlog v2 |
| F9 | Mode gelap | Nanti | Backlog v2 |

## 6. Kebutuhan non-fungsional
- **Performa:** halaman awal di bawah 200 KB tanpa gambar; gambar `loading="lazy"`; skor Lighthouse Performance 90+.
- **Aksesibilitas:** fokus keyboard terlihat (WCAG AA/AAA), dialog bisa ditutup dengan `Esc`, kontras teks memenuhi WCAG AA, `alt` text pada gambar, navigasi keyboard lengkap.
- **Kompatibilitas:** dua versi terbaru Chrome, Safari, Firefox; layar mulai 360px hingga desktop lebar.
- **Keamanan:** semua teks dari `data.js` di-escape / dirender aman via DOM `textContent` sebelum ditampilkan; seluruh URL divalidasi protokolnya.

## 7. Arah desain
- **Warna:** kobalt `#2338D9` sebagai blok hero, kertas abu kebiruan `#EEF0F4`, tinta `#181A20`, penanda kuning `#FFD83D` hanya untuk fokus dan hover.
- **Tipografi:** `Bricolage Grotesque` (judul, tegas dan padat) dipadukan dengan `Source Serif 4` (isi).
- **Satu momen yang diingat:** nama besar di blok kobalt yang naik saat halaman dibuka. Bagian lain tenang.
- **Hindari:** gradient ungu, kartu seragam bersudut bulat, label huruf kapital di atas setiap judul, animasi masuk di setiap bagian, teks placeholder seperti "Lorem ipsum" atau slogan kosong.
- **Prinsip konten:** tiap karya menjawab tiga hal, yaitu **masalah**, **peran pemilik**, dan **hasil**.

## 8. Struktur repo
```
index.html   data.js   README.md
assets/works/   assets/certs/
docs/PRD.md
```

## 9. Metrik keberhasilan
- Waktu menambah satu karya baru kurang dari 5 menit.
- Skor Lighthouse Performance dan Accessibility di atas 90.
- Minimal 5 karya dan 2 sertifikat terisi sebelum dibagikan.

## 10. Rencana rilis
1. Isi `data.js` dengan konten asli, tambahkan gambar ke `assets/works/` dan `assets/certs/`.
2. Uji lokal di desktop dan ponsel (minimal lebar 360px).
3. Push ke GitHub, aktifkan GitHub Pages (branch `main`, root `/`).
4. Pasang domain sendiri jika diinginkan (opsional).

## 11. Risiko
| Risiko | Mitigasi |
|---|---|
| Gambar terlalu besar membuat situs lambat | Panduan ukuran di `README.md`; kompres ke WebP (maks. lebar 1400px, < 250 KB per karya) |
| Konten masih berupa contoh saat rilis | Daftar periksa siap-rilis di `README.md` dan metrik keberhasilan |
| Repo publik membuka file asli sertifikat | Unggah versi resolusi rendah atau tutup nomor kredensial sensitif |
