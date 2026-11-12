import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'id'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.expertise': 'Expertise',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.tagline': 'I turn ideas into useful digital experiences.',
    'hero.role': 'Software Engineering Student',
    'hero.location': 'Bogor, Indonesia',
    'hero.status': 'Available for Internship & Collaboration',
    'hero.cta.work': 'View Work',
    'hero.cta.contact': 'Contact Me',
    'hero.scroll': 'Scroll',
    
    // About
    'about.title': 'ABOUT',
    'about.headline': 'Bridging Ideas and Digital Reality.',
    'about.headline.accent': '',
    'about.bio1': "I dedicate myself to translating complex concepts into functional, intuitive applications. With expertise in full-stack and mobile development, I'm accustomed to managing product development cycles from idea to deployment.",
    'about.bio2': 'Committed to high-quality standards, attention to detail, and system efficiency to create seamless user experiences.',
    'about.location.label': 'Location',
    'about.location.value': '📍 Bogor, Indonesia',
    'about.education.label': 'Education',
    'about.education.value': 'Software Engineering',
    'about.facts': 'Quick Facts',
    'about.projects': 'Projects Completed',
    'about.code': 'Lines of Code',
    'about.solving': 'Problem Solving',
    'about.awards.title': 'AWARDS & ACHIEVEMENTS',
    'about.awards.best.title': 'Best Presentation Award',
    'about.awards.best.event': 'National Business Plan Competition 2025',
    'about.awards.best.date': '2025',
    'about.awards.best.desc': 'Best Presentation at the National Business Plan Competition, organized by HMPS MBS UIN Sayyid Ali Rahmatullah Tulungagung.',
    'about.awards.bronze.title': 'Participant',
    'about.awards.bronze.event': 'Business Model Canvas Competition',
    'about.awards.bronze.date': '2025',
    'about.awards.bronze.desc': 'Participant in the Business Model Canvas Competition at USK Pharmacy Fair 2025, hosted by Himpunan FMIPA Universitas Syiah Kuala.',
    
    // Capabilities
    'cap.title': 'EXPERTISE',
    'cap.headline': 'What I bring to the table',
    'cap.create.title': 'CREATE',
    'cap.create.desc': 'Craft responsive interfaces and engaging user experiences',
    'cap.build.title': 'BUILD',
    'cap.build.desc': 'Develop robust backends and scalable architectures',
    'cap.improve.title': 'IMPROVE',
    'cap.improve.desc': 'Optimize performance and enhance code quality',
    'cap.stats.tech': 'Technologies',
    'cap.stats.projects': 'Projects',
    'cap.stats.awards': 'Awards',
    'cap.stats.gpa': 'GPA',
    
    // Projects
    'proj.title': 'SELECTED WORK',
    'proj.headline': 'Projects that solve real problems',
    'proj.problem': 'Problem',
    'proj.solution': 'Solution',
    'proj.role': 'My Role',
    'proj.features': 'Key Features',
    'proj.stack': 'Tech Stack',
    'proj.code': 'View Code →',
    
    // SimToko
    'proj.simtoko.category': 'Full-Stack POS System',
    'proj.simtoko.problem': 'Small retail businesses needed an efficient store management system that works across both web and mobile platforms with flexible data storage.',
    'proj.simtoko.solution': 'Designed and developed SIMTOKO, a complete store management system with web and mobile interfaces. Built RESTful APIs using Laravel for seamless backend-mobile integration, and managed NoSQL database architecture using MongoDB for scalable data storage.',
    'proj.simtoko.role': 'Full-Stack Developer',
    
    // RuangBelajar
    'proj.ruang.category': 'Class Booking Web Application',
    'proj.ruang.problem': 'An educational platform needed a scalable backend system to handle class bookings, instructor schedules, and student reservations accurately.',
    'proj.ruang.solution': 'Developed scalable backend services and RESTful APIs for a class booking web application. Designed database schemas to handle class schedules, instructor availability, and student reservations. Implemented real-time slot/capacity validation and integrated backend API endpoints seamlessly with frontend components.',
    'proj.ruang.role': 'Backend Developer',
    
    // iGUN
    'proj.igun.category': 'Web GIS School Zoning System',
    'proj.igun.problem': 'Schools needed a transparent and real-time system for school zoning (PPDB) radius verification to ensure fair student enrollment based on geographic location.',
    'proj.igun.solution': 'Developed an interactive Web GIS application with spatial data integration including school coordinates and regional boundary layers (GeoJSON). Implemented spatial analysis features using turf.buffer for boundary buffering and automated zoning validation using point-in-polygon algorithms. Built interactive maps with search features using Leaflet.js.',
    'proj.igun.role': 'Frontend Developer',
    
    // Contact
    'contact.title': 'CONTACT',
    'contact.headline': 'Have an idea',
    'contact.headline.accent': 'worth building?',
    'contact.subheading': "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    'contact.form.title': 'Send a message',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Tell me about your project...',
    'contact.form.submit': 'Send Message →',
    'contact.form.success': "Thank you for your message! I'll get back to you soon.",
    
    // Footer
    'footer.built': 'Built with React, TypeScript & Tailwind CSS',
  },
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.work': 'Karya',
    'nav.about': 'Tentang',
    'nav.expertise': 'Keahlian',
    'nav.contact': 'Kontak',
    
    // Hero
    'hero.tagline': 'Saya mengubah ide menjadi pengalaman digital yang berguna.',
    'hero.role': 'Mahasiswa Software Engineering',
    'hero.location': 'Bogor, Indonesia',
    'hero.status': 'Tersedia untuk Magang & Kolaborasi',
    'hero.cta.work': 'Lihat Karya',
    'hero.cta.contact': 'Hubungi Saya',
    'hero.scroll': 'Gulir',
    
    // About
    'about.title': 'TENTANG',
    'about.headline': 'Membangun Jembatan antara Ide dan Realitas Digital.',
    'about.headline.accent': '',
    'about.bio1': 'Saya mendedikasikan diri untuk menerjemahkan konsep kompleks menjadi aplikasi fungsional yang intuitif. Dengan keahlian di ranah full-stack dan mobile development, saya terbiasa menangani siklus pengembangan produk dari nol hingga siap digunakan.',
    'about.bio2': 'Berkomitmen pada standar kualitas tinggi, ketelitian terhadap detail, dan efisiensi sistem untuk menciptakan pengalaman pengguna yang berkesan.',
    'about.location.label': 'Lokasi',
    'about.location.value': '📍 Bogor, Indonesia',
    'about.education.label': 'Pendidikan',
    'about.education.value': 'Software Engineering',
    'about.facts': 'Fakta Singkat',
    'about.projects': 'Proyek Selesai',
    'about.code': 'Baris Kode',
    'about.solving': 'Pemecahan Masalah',
    'about.awards.title': 'PENGHARGAAN & PRESTASI',
    'about.awards.best.title': 'Penghargaan Best Presentation',
    'about.awards.best.event': 'Kompetisi Rencana Bisnis Nasional 2025',
    'about.awards.best.date': '2025',
    'about.awards.best.desc': 'Best Presentation pada Kompetisi Rencana Bisnis Nasional, diselenggarakan oleh HMPS MBS UIN Sayyid Ali Rahmatullah Tulungagung.',
    'about.awards.bronze.title': 'Peserta',
    'about.awards.bronze.event': 'Kompetisi Business Model Canvas',
    'about.awards.bronze.date': '2025',
    'about.awards.bronze.desc': 'Peserta dalam Kompetisi Business Model Canvas di USK Pharmacy Fair 2025, yang diselenggarakan oleh Himpunan FMIPA Universitas Syiah Kuala.',
    
    // Capabilities
    'cap.title': 'KEAHLIAN',
    'cap.headline': 'Apa yang saya tawarkan',
    'cap.create.title': 'MEMBUAT',
    'cap.create.desc': 'Merancang interface responsif dan pengalaman pengguna yang menarik',
    'cap.build.title': 'MEMBANGUN',
    'cap.build.desc': 'Mengembangkan backend yang robust dan arsitektur yang scalable',
    'cap.improve.title': 'MENINGKATKAN',
    'cap.improve.desc': 'Mengoptimalkan performa dan meningkatkan kualitas kode',
    'cap.stats.tech': 'Teknologi',
    'cap.stats.projects': 'Proyek',
    'cap.stats.awards': 'Penghargaan',
    'cap.stats.gpa': 'IPK',
    
    // Projects
    'proj.title': 'KARYA PILIHAN',
    'proj.headline': 'Proyek yang memecahkan masalah nyata',
    'proj.problem': 'Masalah',
    'proj.solution': 'Solusi',
    'proj.role': 'Peran Saya',
    'proj.features': 'Fitur Utama',
    'proj.stack': 'Teknologi',
    'proj.code': 'Lihat Kode →',
    
    // SimToko
    'proj.simtoko.category': 'Sistem POS Full-Stack',
    'proj.simtoko.problem': 'Bisnis ritel kecil membutuhkan sistem manajemen toko yang efisien yang bekerja di platform web dan mobile dengan penyimpanan data yang fleksibel.',
    'proj.simtoko.solution': 'Merancang dan mengembangkan SIMTOKO, sistem manajemen toko lengkap dengan interface web dan mobile. Membangun RESTful API menggunakan Laravel untuk integrasi backend-mobile yang seamless, dan mengelola arsitektur database NoSQL menggunakan MongoDB untuk penyimpanan data yang scalable.',
    'proj.simtoko.role': 'Full-Stack Developer',
    
    // RuangBelajar
    'proj.ruang.category': 'Aplikasi Web Pemesanan Kelas',
    'proj.ruang.problem': 'Platform edukasi membutuhkan sistem backend yang scalable untuk menangani pemesanan kelas, jadwal instruktur, dan reservasi siswa dengan akurat.',
    'proj.ruang.solution': 'Mengembangkan layanan backend yang scalable dan RESTful API untuk aplikasi web pemesanan kelas. Merancang skema database untuk menangani jadwal kelas, ketersediaan instruktur, dan reservasi siswa. Mengimplementasikan validasi slot/kapasitas real-time dan mengintegrasikan endpoint API backend dengan komponen frontend secara seamless.',
    'proj.ruang.role': 'Backend Developer',
    
    // iGUN
    'proj.igun.category': 'Sistem Zonasi Sekolah Web GIS',
    'proj.igun.problem': 'Sekolah membutuhkan sistem yang transparan dan real-time untuk verifikasi radius zonasi sekolah (PPDB) guna memastikan pendaftaran siswa yang adil berdasarkan lokasi geografis.',
    'proj.igun.solution': 'Mengembangkan aplikasi Web GIS interaktif dengan integrasi data spasial termasuk koordinat sekolah dan layer batas wilayah (GeoJSON). Mengimplementasikan fitur analisis spasial menggunakan turf.buffer untuk buffering batas dan validasi zonasi otomatis menggunakan algoritma point-in-polygon. Membangun peta interaktif dengan fitur pencarian menggunakan Leaflet.js.',
    'proj.igun.role': 'Frontend Developer',
    
    // Contact
    'contact.title': 'KONTAK',
    'contact.headline': 'Punya ide yang',
    'contact.headline.accent': 'layak dibangun?',
    'contact.subheading': 'Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda.',
    'contact.form.title': 'Kirim pesan',
    'contact.form.name': 'Nama',
    'contact.form.name.placeholder': 'Nama Anda',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'email@anda.com',
    'contact.form.message': 'Pesan',
    'contact.form.message.placeholder': 'Ceritakan tentang proyek Anda...',
    'contact.form.submit': 'Kirim Pesan →',
    'contact.form.success': 'Terima kasih atas pesan Anda! Saya akan segera menghubungi Anda.',
    
    // Footer
    'footer.built': 'Dibuat dengan React, TypeScript & Tailwind CSS',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language')
    return (saved as Language) || 'en'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
