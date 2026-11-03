# Portofolio Pribadi — Josua Abrianto Harianja

Website portofolio pribadi modern, profesional, dan futuristik dengan interpretasi orisinal dari gaya visual **Awwwards**: minimalis, berani, tipografi berukuran besar, ruang kosong elegan, dan berfokus penuh pada proyek.

---

## 🎨 Palet & Karakteristik Desain

- **Warna Utama**: Burgundy (*Merah Marun Gelap*: `#3b0914`, `#8c102c`, `#e6234b`) berpadu dengan Charcoal & Deep Obsidian Black (`#080709`, `#120c11`).
- **Gaya Tipografi**:
  - Judul: **Syne** (Weights 700, 800, 900) — Bold, avant-garde, dan dramatis.
  - Teks Bacaan: **Plus Jakarta Sans** (Weights 400, 500, 600) — Bersih, proporsional, dan sangat mudah dibaca.
- **Efek Interaktif**:
  - Sticky glassmorphic navigation bar dengan progress bar gulir di sisi atas.
  - Ambient radial glow orbs & geometric mesh grid di latar belakang.
  - Interactive cursor glow follower (untuk desktop).
  - Animasi scroll reveal menggunakan `IntersectionObserver`.
  - Micro-interactions pada tombol dan kartu proyek.
  - Tombol salin email satu klik (*copy to clipboard*) dengan toast notifikasi.
  - Formulir pesan interaktif dengan validasi *real-time*.

---

## 📂 Struktur Berkas

```
portofolio/
│
├── index.html                   # Berkas HTML utama (struktur semantik lengkap)
├── style.css                    # Berkas stylesheet modern & variabel CSS
├── script.js                    # Skrip JavaScript interaktif murni (Vanilla ES6+)
├── README.md                    # Petunjuk penggunaan & kustomisasi
│
└── assets/
    └── images/
        ├── josua-profile.jpg         # Foto Profil Asli: Josua Abrianto Harianja
        ├── igun-webgis-map.jpg       # Screenshot Asli: Peta Interaktif WebGIS EduZone (Bogor)
        ├── igun-webgis-landing.jpg   # Screenshot Asli: Beranda EduZone (Ina-Geoportal)
        ├── simtoko-mobile-owner.jpg  # Screenshot Asli: Mobile Dashboard Owner (Flutter)
        ├── simtoko-mobile-kasir.png  # Screenshot Asli: Mobile Dashboard Kasir (Flutter)
        ├── simtoko-mobile-gudang.png # Screenshot Asli: Mobile Dashboard Gudang (Flutter)
        ├── simtoko-mobile-login.png  # Screenshot Asli: Mobile Halaman Login (Flutter)
        ├── ruangbelajar-beranda.png  # Screenshot Asli: Beranda Utama Ruang Belajar
        ├── ruangbelajar-admin.png    # Screenshot Asli: Dashboard Admin CMS
        ├── ruangbelajar-daftar.png   # Screenshot Asli: Formulir Pendaftaran Siswa
        ├── ruangbelajar-program.png  # Screenshot Asli: Halaman Program Belajar
        ├── ruangbelajar-login-admin.png # Screenshot Asli: Halaman Login Admin
        ├── project-4.svg             # Mockup SVG Proyek 4 (SIMTOKO Web)
        ├── simtoko-web-owner.jpg     # Screenshot Asli: Dashboard Owner (Rapi tanpa browser bar)
        ├── simtoko-web-kasir.jpg     # Screenshot Asli: Dashboard Kasir (Rapi tanpa browser bar)
        ├── simtoko-web-gudang.jpg    # Screenshot Asli: Dashboard Petugas Gudang (Rapi tanpa browser bar)
        └── simtoko-web-login.jpg     # Screenshot Asli: Halaman Login Multi-Role (Rapi tanpa browser bar)
```

---

## 🚀 Cara Menjalankan

Website ini dibuat dengan **100% HTML, CSS, dan JavaScript murni tanpa ketergantungan framework apapun**.

### Cara 1: Langsung Buka di Browser
1. Buka folder `c:\Intern\portofolio` di File Explorer Anda.
2. Klik ganda berkas `index.html`.
3. Website akan langsung terbuka di browser Anda (Chrome, Edge, Firefox, Safari).

### Cara 2: Menggunakan Local Server (Direkomendasikan)
Jika Anda menggunakan **VS Code**:
1. Pasang ekstensi **Live Server**.
2. Klik kanan pada `index.html` lalu pilih **Open with Live Server**.

Atau jika Anda memiliki **Python**:
```bash
python -m http.server 8000
```
Lalu buka `http://localhost:8000` di browser Anda.

---

## 🖼️ Cara Mengganti Gambar & Foto

### 1. Mengganti Foto Profil
- Letakkan foto asli Anda di folder `assets/images/` (contoh: `profile.jpg` atau `profile.png`).
- Buka berkas `index.html`, cari baris berikut di bagian `#tentang`:
  ```html
  <img src="assets/images/profile-placeholder.svg" alt="Josua Abrianto Harianja" class="profile-image" />
  ```
- Ubah `src` menjadi foto Anda:
  ```html
  <img src="assets/images/profile.jpg" alt="Josua Abrianto Harianja" class="profile-image" />
  ```

### 2. Mengganti Gambar Proyek
- Simpan tangkapan layar (*screenshot*) proyek Anda ke dalam folder `assets/images/` (contoh: `proyek-toko.png`, `proyek-kanban.png`).
- Di `index.html`, cari tag `<article class="project-card">` dan perbarui atribut `src` pada tag `<img>`:
  ```html
  <img src="assets/images/proyek-toko.png" alt="Nama Proyek Anda" class="project-img" loading="lazy" />
  ```

---

## 🔗 Integrasi Formulir Kontak ke Gmail

Formulir kontak pada website ini telah dihubungkan langsung ke **Gmail Anda** (`josuaabrianto15@gmail.com`) menggunakan layanan **FormSubmit API**:

### Cara Kerja & Langkah Aktivasi Pertama Kali:
1. Pengunjung mengisi Nama, Email, Subjek, dan Pesan di bagian `#kontak`, lalu menekan tombol **Kirim Pesan Sekarang**.
2. **Saat pertama kali ada pesan yang dikirim**:
   - FormSubmit akan mengirimkan satu email konfirmasi ke `josuaabrianto15@gmail.com` berjudul *"Action Required: Activate your form"*.
   - Buka email tersebut di Gmail Anda dan klik tombol **Activate Form**.
3. **Setelah diaktivasi**:
   - Setiap pesan baru dari pengunjung akan langsung masuk ke kotak masuk Gmail Anda dalam format tabel rapi berisi Nama, Email pengirim, dan Pesan mereka, tanpa perlu refresh halaman atau konfigurasi server tambahan.
   - Anda bisa langsung membalas (*Reply*) pesan tersebut langsung ke email pengunjung dari Gmail Anda.

