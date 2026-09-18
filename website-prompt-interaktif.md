# Prompt: Website Portfolio Interaktif — Yukie Kiyoshi

Gunakan prompt di bawah ini untuk membangun ulang website ini (atau versi yang lebih interaktif) dari nol:

```text
Buat website portfolio personal SINGLE-PAGE (React + TypeScript + Tailwind + shadcn/ui)
untuk Yukie Kiyoshi — mahasiswi Informatika, Voice Over Artist, Content Creator & Spokesperson.

=== 1. TEMA & VISUAL ===
- Palet elegan: baby blue (#dbeafe / #e3f0fb) sebagai latar utama, maroon (#7f1d2e / #8c2f39)
  sebagai warna primer (tombol, heading, aksen). Semua warna wajib design token semantik
  di index.css — dilarang hardcode warna — sehingga mendukung dark mode.
- Dark mode: latar deep maroon gelap, teks baby blue, toggle tersedia di navbar.
- Tipografi: display serif elegan untuk nama/judul besar (mis. Playfair Display),
  sans-serif modern untuk body (mis. Inter/Work Sans).
- Aesthetic: creative-agency premium — whitespace luas, kartu rounded-xl, soft shadow
  berlapis, garis aksen maroon tipis sebagai pembatas section.

=== 2. PRELOADER & FIRST IMPRESSION ===
- Preloader fullscreen: logo beranimasi (scale + fade) dengan progress bar tipis maroon,
  otomatis hilang setelah aset termuat (maks 2 detik), transisi fade ke hero.
- Hero memainkan animasi entrance berurutan (stagger): nama → subtitle → tombol → slideshow.

=== 3. NAVBAR (STICKY & INTERAKTIF) ===
- Logo di kiri atas, fade-in saat load, scale-up lembut saat hover.
- Menu kanan: Home | About | Experience | Projects | Gallery | Certificates | Portfolio | Contact.
- Sticky: transparan di posisi paling atas → berubah Asphalt/maroon solid + teks putih saat scroll.
- Hover menu: underline animasi slide dari kiri ke kanan.
- TAMBAHAN INTERAKTIF: progress bar tipis di bawah navbar yang terisi mengikuti posisi scroll;
  menu item aktif (section yang sedang terlihat) otomatis ter-highlight.
- Mobile: hamburger → drawer fullscreen dengan stagger animation per item.
- Smooth scroll ke section tujuan dengan offset navbar.

=== 4. HERO ===
- Nama "YUKIE KIYOSHI" sangat besar (klamp typography), dengan efek
  reveal per-huruf (fade + slide-up stagger) saat load.
- Subtitle dengan efek TYPING (typewriter): "Voice Over Artist", "Content Creator",
  "Informatics Student" — berganti otomatis dengan cursor berkedip.
- Slideshow 3 foto di samping teks: ukuran proporsional kecil-elegan, auto-ganti
  tiap 4 detik dengan crossfade + subtle Ken Burns zoom; dot indicator klikable.
- 2 tombol CTA: "Complete Resume" (maroon, hover lift + glow lembut, membuka modal CV)
  dan "View Portfolio" (outline, scroll ke Portfolio).
- Scroll indicator animatif (mouse icon dengan dot bergerak) di bawah hero.
- Background hero: subtle baby-blue gradient + blob dekoratif blur yang bergerak pelan.

=== 5. ABOUT / SUMMARY ===
- Foto profil dengan frame dekoratif + hover tilt 3D ringan.
- Tabel info singkat (pendidikan, fokus, lokasi) + paragraf summary.
- Animasi counter angka (mis. 14+ Proyek, 30+ Sertifikat, 6+ Pengalaman Organisasi)
  yang menghitung naik saat masuk viewport.

=== 6. EDUCATION ===
- Timeline vertikal dengan garis maroon, titik yang menyala saat item aktif in-view,
  kartu slide-in dari kiri/kanan bergantian.

=== 7. EXPERIENCE (TABS INTERAKTIF) ===
- Tab pills: Voice Over | Content Creation | Organization | Leadership.
- Tab aktif: indikator pill geser dengan animasi spring.
- Kartu pengalaman: hover → border maroon menyala + panah menggeliat.
- Tiap kartu: jabatan, perusahaan, periode, lokasi, deskripsi, badge tahun.
- Isi: Spokesperson & Content Narrator dan Voice Over Artist di PT KITAANTER,
  Spokesperson (Jul 2025), Voice Over Artist Odesa Indonesia, Voice Over & Talent TRAVL,
  Voice Over Artist AyPay Mitra, Creative Talent bdgfolk, Field Marketing Staff BFI Finance,
  dst. — lengkap sesuai CV.
- Tombol "Complete Resume" di bawah section → membuka modal CV lengkap.

=== 8. ACADEMIC & PROJECT EXPERIENCE ===
- Grid kartu 3 kolom (responsive 1→2→3), tiap kartu punya ikon, judul, deskripsi singkat.
- Hover: kartu terangkat + tilt 3D mengikuti kursor (transform perspective).
- 15 proyek lengkap: Medical Data Diabetes Prediction, TCP vs UDP Proxy Analysis,
  HydroWatch, Cat Detection CNN, Digital Forensics, CineMagz, 2x Daily Mood Prediction FIS,
  LMS UX Analysis, SAMS, Valorant Economy Analysis, Query Indexing, Femina Care,
  E-Connect, Diskominfo West Java UI/Testing, Cyberbullying Detection CNN-BiLSTM,
  Exit Apparel Company Profile.
- Di bawah grid: kartu QR code "Scan for full project details" dengan hover scale.

=== 9. GALLERY ===
- Layout 2 kolom, foto pakai object-contain (rasio asli, TIDAK di-crop, tanpa border/padding putih).
- Caption judul + deskripsi DI BAWAH foto, warna teks hitam/gelap.
- Klik foto → LIGHTBOX fullscreen dengan animasi zoom-in, navigasi panah kiri/kanan,
  tombol close, dan dukungan keyboard (Esc, arrow keys).
- Hover foto: zoom lembut + overlay tipis maroon transparan.
- Isi: Mahasiswa '23 of The Year (penyerahan + plakat 2025), Award Plaque 2024,
  foto kegiatan HIMA/KMS, dst.

=== 10. CERTIFICATES (SCROLL HORIZONTAL) ===
- Carousel horizontal drag-to-scroll + tombol panah kiri/kanan + snap scroll.
- Kartu sertifikat: gambar saja tanpa keterangan; hover → kartu terangkat + shadow.
- Auto-scroll pelan yang berhenti saat kursor di atas area (pause on hover).
- Klik → lightbox zoom.
- Di atas section: quote motivasi dengan animasi fade-in berganti otomatis
  (3-4 quotes inspiratif).
- 30+ sertifikat termasuk Azure AI Fundamentals (2026), Arkavidia 10.0 UXVidia.

=== 11. PORTFOLIO (QR UNIFIED) ===
- SATU kartu portfolio terpadu: QR code tunggal yang mencakup Voice Over, Design,
  dan Content Creator (tanpa section terpisah).
- Kartu dengan animasi shine/glow saat hover, teks narasi di sampingnya.

=== 12. SKILLS ===
- 2 kelompok: Hard Skills & Soft Skills, masing-masing progress bar animasi
  yang terisi saat masuk viewport (soft skills: PR 98%, Leadership 95%,
  Communication 98%, Teamwork 95%, Problem-Solving 92%).
- Badge pill untuk tools/teknologi dengan hover bounce.

=== 13. MODAL COMPLETE RESUME ===
- Tombol muncul di Hero & Experience → modal fullscreen-scrollable.
- Konten CV lengkap & terbaru: contact info, summary, education, 15+ academic projects
  berikut deskripsi, seluruh professional experience, organisasi, leadership,
  sertifikasi lengkap (termasuk UXVidia Mar 2026 & Azure AI Fundamentals Mar 2026),
  hard/soft skills, languages, achievements.
- HANYA SATU tombol close (X) di pojok kanan atas — tanpa duplikat.
- Animasi masuk: fade + scale dari 0.95.

=== 14. SCROLL & MOTION SYSTEM ===
- Scroll-reveal global: semua section fade + slide saat masuk viewport (IntersectionObserver).
- Parallax lembut: background blob & elemen dekoratif bergerak lebih lambat dari konten.
- Back-to-top floating button (muncul setelah scroll 50%, hover lift).
- Semua animasi menghormati prefers-reduced-motion.

=== 15. CONTACT (PENUTUP) ===
- Background Paper/baby blue, judul besar "Contact".
- Grid card: Email (yukiekiyoshi123@gmail.com), Phone (081280106134),
  Location (Bandung, West Java), LinkedIn (linkedin.com/in/yukiekiyoshi — link aktif).
- Hover LinkedIn: underline animasi + perubahan warna biru; ikon semua kontak scale-up lembut.
- TANPA form "Send Message".
- Footer mini: © 2026 Yukie Kiyoshi + back-to-top.

=== TEKNIS ===
- Single-page + smooth scroll, fully responsive (mobile-first).
- Meta SEO: title, description, og tags.
- Gambar dioptimasi, lazy-load di bawah fold.
```
