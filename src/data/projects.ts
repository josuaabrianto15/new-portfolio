export const projectsData = {
  simtoko: {
    title: 'SimToko',
    images: [
      '/assets/images/simtoko-web.jpg',
      '/assets/images/simtoko-web-kasir.jpg',
      '/assets/images/simtoko-mobile.jpg',
    ],
    features: {
      en: ['Multi-role authentication', 'Real-time inventory', 'Sales analytics', 'Mobile sync'],
      id: ['Autentikasi multi-role', 'Inventaris real-time', 'Analisis penjualan', 'Sinkronisasi mobile']
    },
    stack: ['Laravel', 'Flutter', 'MongoDB', 'REST API'],
    links: {
      web: 'https://github.com/josuaabrianto15/SIMTOKO-WEB.git',
      mobile: 'https://github.com/josuaabrianto15/simtoko.git',
    },
  },
  ruangbelajar: {
    title: 'RuangBelajar',
    images: [
      '/assets/images/ruangbelajar.png',
      '/assets/images/ruangbelajar-program.png',
      '/assets/images/ruangbelajar-admin.png',
    ],
    features: {
      en: ['Real-time slot validation', 'Student registration', 'Admin dashboard', 'API integration'],
      id: ['Validasi slot real-time', 'Pendaftaran siswa', 'Dashboard admin', 'Integrasi API']
    },
    stack: ['Laravel', 'MySQL', 'RESTful API', 'JavaScript'],
    links: {
      github: 'https://github.com/josuaabrianto15/ruangbelajar.git',
    },
  },
  igun: {
    title: 'iGUN WebGIS',
    images: [
      '/assets/images/igun-webgis-landing.jpg',
      '/assets/images/igun-webgis-map.jpg',
    ],
    features: {
      en: ['Interactive maps', 'Spatial analysis', 'GeoJSON integration', 'Real-time verification'],
      id: ['Peta interaktif', 'Analisis spasial', 'Integrasi GeoJSON', 'Verifikasi real-time']
    },
    stack: ['JavaScript', 'Leaflet.js', 'Turf.js', 'GeoJSON'],
    links: {
      github: 'https://github.com/josuaabrianto15/IGUN_Technology.git',
      demo: 'https://eduzone-bogor.vercel.app',
    },
  },
}

export const socialLinks = {
  email: 'josuaabrianto15@gmail.com',
  github: 'https://github.com/josuaabrianto15',
  linkedin: 'https://www.linkedin.com/in/josua-abrianto-harianja-74a704328',
}
