export const GOVERNANCE: {
  icon: string;
  title: string;
  href: string;
  description: string;
}[] = [
  {
    icon: "/icon/pengurus-inti.svg",
    title: "Kantor Staf Presiden",
    href: "/struktural/ksp",
    description: `Kepala Staf Presiden adalah Kepengurusan Non Struktural yang ada di Kabinet Eskalasi
Cita Udayana. KSP Merupakan Perpanjangan tangan dari Presiden dan Wakil Presiden Badan
Eksekutif Mahasiswa Universitas Udayana dalam menjalankan visi misi Eskalasi Cita Udayana
KSP mempunyai bidang fungsi diantaranya yaitu analisis isu protokoler, manajemen pres
wapres,dan relasi. KSP membantu PRESMA dan WAPRESMA dalam menjalankan fungsi di
Internal maupun eksternal`,
  },
  {
    icon: "/icon/satuan-pengendali-internal.svg",
    title: "Satuan Pengendali Internal",
    href: "/struktural/spi",
    description: `Bertugas untuk memastikan bahwa operasi dan kegiatan ormawa berjalan sesuai dengan
            prosedur, kebijakan, serta standar yang telah ditetapkan. Fungsi utamanya adalah untuk
            mengawasi dan menilai efektivitas serta efisiensi manajemen dan penggunaan sumber daya
            dalam ormawa. SPI juga bertanggung jawab untuk memberikan rekomendasi perbaikan atau
            saran kepada pengurus ormawa untuk meningkatkan tata kelola dan kinerja organisasi.`,
  },
  {
    icon: "/icon/pengurus-harian.svg",
    title: "Badan Pengurus Harian",
    href: "/struktural/bph",
    description: `Bertanggung jawab atas operasional harian ormawa, seperti koordinasi rapat, pengawasan
kegiatan, dan administrasi. Menyelenggarakan keputusan dan kebijakan yang telah disetujui oleh
organisasi. Mengkoordinasikan kegiatan antar departemen atau divisi dalam ormawa untuk
memastikan konsistensi dan sinergi. Menjadi jembatan komunikasi antara anggota
ormawa.Bertanggung jawab atas operasional harian ormawa, seperti koordinasi rapat,
pengawasan kegiatan, dan administrasi. Menyelenggarakan keputusan dan kebijakan yang telah
disetujui oleh organisasi. Mengkoordinasikan kegiatan antar departemen atau divisi dalam
ormawa untuk memastikan konsistensi dan sinergi. Menjadi jembatan komunikasi antara anggota
ormawa.`,
  },
  {
    icon: "/icon/kemahasiswaan.svg",
    title: "Kemahasiswaan",
    href: "/struktural/kemaha",
    description: `Menjadi garda terdepan dalam pemenuhan kebutuhan fasilitas mahasiswa dalam
kehidupan berkampus di Udayana baik untuk short-term serta long-term effect untuk
menciptakan rasa nyaman serta aman bagi mahasiswa melalui kegiatan yang sustainable baik
dengan program kerja ataupun program elaborasi.`,
  },
  {
    icon: "/icon/kemasyarakatan.svg",
    title: "Kemasyarakatan",
    href: "/struktural/kemasya",
    description: `Bergerak dalam ruang lingkup sosial dan kemasyarakatan yang berkontribusi pada
pemberdayaan masyarakat sekitar, terhusus desa yang betul membutuhkan perhatian dan
pemberdayaan. Lalu pada aspek sosial tentunya turut menumbuhkan rasa kepedulian dan
memberikan akses dan ruang untuk melatih intelek emosional mahasiswa.`,
  },
  {
    icon: "/icon/relasi-dan-harmonisasi-hubungan.svg",
    title: "Relasi & Harmonisasi Hubungan",
    href: "/struktural/rhh",
    description: `Media sinergi untuk Badan Eksekutif Mahasiswa dalam menjalin hubungan antar
organisasi mahasiswa di luar dan di dalam lingkup Universitas Udayana serta membersamai
proses hubungan dengan pendekatan harmonis.`,
  },
  {
    icon: "/icon/minat-bakat-dan-prestasi.svg",
    title: "Minat, Bakat, & Prestasi",
    href: "/struktural/mikatpres",
    description: `Hadir sebagai wadah pemenuhan mahasiswa dalam berekspresi mengembangkan potensi
diri di berbagai macam jenis aspek minat dan bakat, baik itu adalah bakat kognitif, seni dan
olahraga. Lalu sebagai penyalur minat para mahasiswa yang memiliki keinginan untuk
mempelajari hal baru pada aspek bakat yang telah disebutkan.
`,
  },
  {
    icon: "/icon/analisis-dan-pergerakan.svg",
    title: "Analisis & Pergerakan",
    href: "/struktural/asper",
    description: `Bergerak sebagai ujung tombak dan garda terdepan dalam menyuarakan segala aspirasi
dan keresahan yang terstruktur dan ilmiah berdasarkan kajian. Dan mampu Menjadi pencerdas
isu sosial dan politik kepada masyarakat dan mahasiswa secara luas melalui propaganda
media-media.`,
  },
];

export const AUDIT: {
  title: string;
  href: string;
  description: string;
  target: string;
}[] = [
  {
    title: "Laporan Keuangan",
    href: "/path/to/laporan-keuangan.pdf",
    description: "pass",
    target: "_self",
  },
  {
    title: "Laporan 100 hari kerja",
    href: "https://drive.google.com/file/d/1hqrsnI3tur_h--66riUbK-3gKKllgw8o/view?usp=sharing",
    description: "Transparansi 100 hari kerja BEM Udayana",
    target: "_blank",
  },
];

export const TENTANG: { title: string; href: string }[] = [
  {
    title: "Tentang BEM",
    href: "/",
  },
  {
    title: "Pusat Layanan",
    href: "/",
  },
  {
    title: "Pengumuman",
    href: "/",
  },
];

export const DEPARTEMEN:{name: string; username: string; body:string; img:string; label:string;}[] = [
  {
    name: "KOMINFO",
    username: "Kementerian",
    body: "Kementerian Komunikasi, Media dan Informasi",
    img: "/icon/kominfo.svg",
    label: "rhh",
  },
  {
    name: "ADJARMAS",
    username: "Kementerian",
    body: "Kementerian Advokasi dan Jejaring Masyarakat",
    img: "/icon/adjarmas.svg",
    label: "asper",
  },
  {
    name: "ADKESMA",
    username: "Kementerian",
    body: "Kementerian Advokasi dan Kesejahteraan Mahasiswa",
    img: "/icon/adkesma.svg",
    label: "asper",
  },
  {
    name: "AKSPRO",
    username: "Kementerian",
    body: "Kementerian Aksi dan Propaganda",
    img: "/icon/akspro.svg",
    label: "asper",
  },
  {
    name: "DAGRI",
    username: "Kementerian",
    body: "Kementerian Dalam Negeri",
    img: "/icon/dagri.svg",
    label: "rhh",
  },
  {
    name: "EKOKRAF",
    username: "Kementerian",
    body: "Kementerian Ekonomi Kreatif",
    img: "/icon/ekokraf.svg",
    label: "kemaha",
  },
  {
    name: "HK",
    username: "Biro",
    body: "Biro Harmonisasi Kabinet",
    img: "/icon/hk.svg",
    label: "bph",
  },
  {
    name: "HUKUM",
    username: "Biro",
    body: "Biro Hukum",
    img: "/icon/hukum.svg",
    label: "spi",
  },
  {
    name: "KASTRAT",
    username: "Kementerian",
    body: "Kementerian Kajian & Analisis Isu Strategis",
    img: "/icon/kastrat.svg",
    label: "asper",
  },
  {
    name: "KESKAB",
    username: "Biro",
    body: "Biro Kesekretariatan Kabinet",
    img: "/icon/keskab.svg",
    label: "bph",
  },
  {
    name: "KEUANGAN",
    username: "Biro",
    body: "Biro Keuangan",
    img: "/icon/keuangan.svg",
    label: "bph",
  },
  {
    name: "KPM",
    username: "Kementerian",
    body: "Kementerian Keperempuanan & Perlindungan Mahasiswa",
    img: "/icon/kpm.svg",
    label: "kemaha",
  },
  {
    name: "MENBUD",
    username: "Kementerian",
    body: "Kementerian Kebudayaan",
    img: "/icon/menbud.svg",
    label: "kemasya",
  },
  {
    name: "MENLU",
    username: "Kementerian",
    body: "Kementerian Luar Negeri",
    img: "/icon/menlu.svg",
    label: "rhh",
  },
  {
    name: "MENPORA",
    username: "Kementerian",
    body: "Kementerian Pemuda dan Olahraga",
    img: "/icon/menpora.svg",
    label: "mikatpres",
  },
  {
    name: "MONEV",
    username: "Biro",
    body: "Biro Monitoring & Evaluasi",
    img: "/icon/monev.svg",
    label: "spi",
  },
  {
    name: "P2K",
    username: "Kementerian",
    body: "Kementerian Pengembangan Potensi & Karir",
    img: "/icon/p2k.svg",
    label: "kemaha",
  },
  {
    name: "PEMDES",
    username: "Kementerian",
    body: "Kementerian Pemberdayaan Desa",
    img: "/icon/pemdes.svg",
    label: "kemasya",
  },
  {
    name: "PI",
    username: "Biro",
    body: "Biro Pengembangan Internal",
    img: "/icon/pi.svg",
    label: "spi",
  },
  {
    name: "PSDM",
    username: "Kementerian",
    body: "Kementerian Pengembangan Sumber Daya Mahasiswa",
    img: "/icon/psdm.svg",
    label: "kemaha",
  },
  {
    name: "RISPEK",
    username: "Kementerian",
    body: "Kementerian Riset, Penalaran, & Keilmuan",
    img: "/icon/rispek.svg",
    label: "mikatpres",
  },
  {
    name: "SENKRES",
    username: "Kementerian",
    body: "Kementerian Seni & Kreativitas",
    img: "/icon/senkres.svg",
    label: "mikatpres",
  },
  {
    name: "SOSLINDUP",
    username: "Kementerian",
    body: "Kementerian Sosial & Lingkungan Hidup",
    img: "/icon/soslindup.svg",
    label: "kemasya",
  },
];

// post.cover.file.url