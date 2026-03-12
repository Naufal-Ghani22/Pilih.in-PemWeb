const skillIcons = {
  Python: '🐍',
  'Problem Solving': '🧠',
  HTML: '🌐',
  CSS: '🎨',
  SQL: '🗃️',
  'Machine Learning': '🤖',
  AWS: '☁️',
  Portfolio: '📁',
  'Interview Skill': '💼',
  Logic: '⚙️',
  'Business Analysis': '📈',
  'System Design': '🔧',
  JavaScript: '⚡',
  React: '⚛️',
  Node: '🔴',
  'Public Speaking': '📢',
  Git: '🐙',
  Docker: '🐳',
  MATLAB: '📐',
  AutoCAD: '📐',
  'Circuit Design': '⚡',
  Anestesi: '💉',
  Farmakologi: '💊'
};

const jurusanData = {
  informatika: {
    nama: "Informatika",
    deskripsi: "Jurusan yang mempelajari pengembangan software, AI, data science, dan teknologi digital. Prospek kerja cerah di era industri 4.0.",
    roadmap: [
      {
        tahun: "📚 Tahun 1 - Fondasi",
        subtitle: "Membangun dasar pemrograman & logika komputasi",
        matkul: [
          "Algoritma & Pemrograman Dasar (Python)",
          "Matematika Diskrit", 
          "Logika Informatika",
          "Pengenalan Komputer"
        ],
        project: "Mini calculator app",
        skill: ["Python", "Problem Solving"],
        tips: "Fokus pada logika, bukan syntax"
      },
      {
        tahun: "🔍 Tahun 2 - Eksplorasi", 
        subtitle: "Memahami struktur data & development web",
        matkul: [
          "Struktur Data & Algoritma", 
          "Development Web (HTML/CSS/JS)",
          "Basis Data (SQL)",
          "Sistem Operasi"
        ],
        project: "Website portfolio pribadi + CRUD app",
        skill: ["HTML", "CSS", "JavaScript", "SQL"],
        tips: "Buat project nyata untuk portofolio"
      },
      {
        tahun: "🏢 Tahun 3 - Profesional",
        subtitle: "Siap industri dengan magang & teknologi mutakhir", 
        matkul: [
          "Magang Industri (3-6 bulan)",
          "Machine Learning Dasar",
          "Cloud Computing (AWS/GCP)",
          "Keamanan Siber"
        ],
        sertifikasi: "AWS Certified Developer, Google Data Analytics",
        skill: ["Machine Learning", "AWS", "Git"],
        tips: "Magang adalah kunci masuk perusahaan besar"
      },
      {
        tahun: "🎓 Tahun 4 - Finalisasi", 
        subtitle: "Skripsi & persiapan karir tingkat lanjut",
        matkul: [
          "Skripsi/Tugas Akhir (AI/ML project)",
          "Portfolio & Personal Branding",
          "Technical Interview Preparation",
          "Soft Skills Workshop"
        ],
        project: "AI/ML capstone project + production deployment",
        skill: ["React", "Node", "Docker", "Public Speaking"],
        tips: "Portfolio > IPK untuk dapat kerja"
      }
    ],
    career: [
      {nama: "Software Engineer", gaji: "Rp 15-40M", icon: "💻"},
      {nama: "AI/ML Engineer", gaji: "Rp 20-60M", icon: "🤖"},
      {nama: "Fullstack Developer", gaji: "Rp 18-45M", icon: "🔗"},
      {nama: "Data Engineer", gaji: "Rp 22-50M", icon: "📊"},
      {nama: "DevOps Engineer", gaji: "Rp 25-55M", icon: "☁️"},
      {nama: "Mobile Developer", gaji: "Rp 15-35M", icon: "📱"}
    ]
  },

  sistem_informasi: {
    nama: "Sistem Informasi", 
    deskripsi: "Jurusan hybrid IT + Business. Menggabungkan analisis sistem, manajemen proyek IT, dan strategi digital business.",
    roadmap: [
      {
        tahun: "📚 Tahun 1 - Fondasi",
        subtitle: "Dasar IT dan business foundation", 
        matkul: ["Pengantar Sistem Informasi", "Logika Bisnis & Pemrograman"],
        skill: ["Logic"]
      },
      {
        tahun: "🔍 Tahun 2 - Core Skills",
        subtitle: "Database & analisis sistem informasi",
        matkul: ["Manajemen Basis Data", "Analisis & Perancangan Sistem"],
        skill: ["SQL", "Business Analysis"]
      },
      {
        tahun: "🏢 Tahun 3 - Enterprise", 
        subtitle: "ERP, magang, dan sistem enterprise",
        matkul: ["ERP Systems (SAP/Oracle)", "Manajemen Proyek IT", "Magang Enterprise"],
        skill: ["ERP", "Project Management"]
      },
      {
        tahun: "🎓 Tahun 4 - Strategic",
        subtitle: "Digital transformation & business strategy",
        matkul: ["Skripsi SI", "Digital Business", "IT Governance"],
        skill: ["System Design", "Strategic IT"]
      }
    ],
    career: [
      {nama: "System Analyst", gaji: "Rp 12-30M", icon: "🔍"},
      {nama: "IT Business Analyst", gaji: "Rp 15-35M", icon: "📈"},
      {nama: "ERP Consultant", gaji: "Rp 18-45M", icon: "⚙️"},
      {nama: "IT Project Manager", gaji: "Rp 20-50M", icon: "📋"},
      {nama: "Digital Transformation Specialist", gaji: "Rp 25-55M", icon: "🚀"}
    ]
  },
  teknik_elektro: {
    nama: "Teknik Elektro",
    deskripsi: "Jurusan teknik yang fokus energi listrik, elektronika, telekomunikasi, dan otomasi industri.",
    roadmap: [
      {
        tahun: "📚 Tahun 1 - Fondasi",
        subtitle: "Matematika & Fisika Teknik", 
        matkul: ["Kalkulus", "Fisika Dasar", "Pengantar Teknik Elektro"],
        skill: ["MATLAB"]
      },
      {
        tahun: "🔍 Tahun 2 - Core Elektro",
        subtitle: "Rangkaian listrik & elektronika dasar",
        matkul: ["Rangkaian Listrik", "Elektronika", "Sinyal & Sistem"],
        skill: ["Circuit Design"]
      },
      {
        tahun: "🏢 Tahun 3 - Spesialisasi",
        subtitle: "Kontrol, power system, magang industri",
        matkul: ["Kontrol Otomatis", "Sistem Tenaga Listrik", "Magang PLN"],
        sertifikasi: "Sertifikasi Esemka, BNSP Elektro"
      },
      {
        tahun: "🎓 Tahun 4 - Final",
        subtitle: "Desain sistem & energy transition",
        matkul: ["Skripsi", "Energi Terbarukan", "Smart Grid"],
        project: "Desain inverter surya 1kW"
      }
    ],
    career: [
      {nama: "Electrical Engineer", gaji: "Rp 12-35M", icon: "⚡"},
      {nama: "Control System Engineer", gaji: "Rp 15-40M", icon: "🎛️"},
      {nama: "Power Plant Engineer", gaji: "Rp 18-45M", icon: "🏭"},
      {nama: "Telekomunikasi Engineer", gaji: "Rp 14-38M", icon: "📡"},
      {nama: "Automation Specialist", gaji: "Rp 20-50M", icon: "🤖"}
    ]
  },
  teknik_mesin: {
    nama: "Teknik Mesin",
    deskripsi: "Jurusan teknik manufaktur, desain mekanik, otomotif, dan energi. Fokus problem solving fisik.",
    roadmap: [
      {
        tahun: "📚 Tahun 1 - Fondasi",
        subtitle: "Matematika & mekanika dasar",
        matkul: ["Kalkulus", "Fisika Mekanika", "Gambar Teknik"],
        skill: ["AutoCAD"]
      },
      {
        tahun: "🔍 Tahun 2 - Core Mesin", 
        subtitle: "Termodinamika & material",
        matkul: ["Termodinamika", "Mekanika Bahan", "Mesin Produksi"],
        skill: ["SolidWorks"]
      },
      {
        tahun: "🏢 Tahun 3 - Aplikasi Industri",
        subtitle: "Manufaktur & magang otomotif",
        matkul: ["Manufaktur", "Mesin Otomotif", "Magang Industri"],
        sertifikasi: "Sertifikasi Welding, CAD/CAM"
      },
      {
        tahun: "🎓 Tahun 4 - Advanced",
        subtitle: "Desain produk & Industry 4.0",
        matkul: ["Skripsi", "Robotika Industri", "3D Printing"],
        project: "Desain mobil listrik skala"
      }
    ],
    career: [
      {nama: "Mechanical Design Engineer", gaji: "Rp 12-35M", icon: "🔩"},
      {nama: "Manufacturing Engineer", gaji: "Rp 15-38M", icon: "🏭"},
      {nama: "Automotive Engineer", gaji: "Rp 14-40M", icon: "🚗"},
      {nama: "HVAC Engineer", gaji: "Rp 13-36M", icon: "❄️"},
      {nama: "Quality Control Engineer", gaji: "Rp 12-32M", icon: "✅"}
    ]
  },
  kedokteran: {
    nama: "Kedokteran",
    deskripsi: "Jurusan medis paling bergengsi. 11 semester + profesi + PPDS spesialisasi. Profesi mulia menyelamatkan nyawa.",
    roadmap: [
      {
        tahun: "📚 Tahun 1-2 - Preklinik",
        subtitle: "Ilmu dasar kedokteran",
        matkul: ["Anatomi", "Fisiologi", "Biokimia", "Histologi"],
        skill: ["Anatomi Manusia"]
      },
      {
        tahun: "🔍 Tahun 3-4 - Preklinik Lanjutan",
        subtitle: "Patologi & farmakologi dasar",
        matkul: ["Patologi", "Farmakologi", "Mikrobiologi"],
        skill: ["Farmakologi"]
      },
      {
        tahun: "🏢 Tahun 5-7 - Klinik + Koas",
        subtitle: "Praktik di RS + rotasi spesialisasi",
        matkul: ["Koas Bedah", "Koas Penyakit Dalam", "Koas Kandungan"],
        sertifikasi: "AKI, BTKL"
      },
      {
        tahun: "🎓 Tahun 8-11 - Profesi + Internship",
        subtitle: "Internsip dokter umum + ujian profesi",
        matkul: ["Internship", "UKMPPD", "Pendidikan Profesi Dokter"],
        project: "Penelitian klinis"
      }
    ],
    career: [
      {nama: "Dokter Spesialis", gaji: "Rp 30-100M+", icon: "👨‍⚕️"},
      {nama: "Dokter Umum", gaji: "Rp 15-50M", icon: "🩺"},
      {nama: "Dokter Bedah", gaji: "Rp 40-120M", icon: "🔪"},
      {nama: "Radiolog", gaji: "Rp 35-90M", icon: "📡"},
      {nama: "Kardiolog", gaji: "Rp 50-150M", icon: "❤️"}
    ]
  },
  farmasi: {
    nama: "Farmasi",
    deskripsi: "Jurusan ilmu obat & kosmetik. Produksi, pengembangan, dan pengelolaan farmasi klinis.",
    roadmap: [
      {
        tahun: "📚 Tahun 1-2 - Kimia Dasar",
        subtitle: "Farmakognosi & kimia obat",
        matkul: ["Kimia Organik", "Farmakognosi", "Kimia Fisika"],
        skill: ["Analisis Obat"]
      },
      {
        tahun: "🔍 Tahun 3 - Farmasi Industri", 
        subtitle: "Formulasi & teknologi farmasi",
        matkul: ["Farmasi Steril", "Farmasi Industri"],
        skill: ["Formulasi Obat"]
      },
      {
        tahun: "🏢 Tahun 4 - Klinis & Magang",
        subtitle: "Farmasi klinik + apotek industri",
        matkul: ["Farmasi Klinik", "Apotek", "Magang Rumah Sakit"],
        sertifikasi: "Sertifikasi Apoteker (Stra)",
        skill: ["Farmasi Klinik"]
      },
      {
        tahun: "🎓 Tahun 5 - Profesi Apoteker",
        subtitle: "Profesional + penelitian obat",
        matkul: ["Skripsi Farmasi", "Pendidikan Apoteker Profesi"],
        project: "Pengembangan kosmetik herbal"
      }
    ],
    career: [
      {nama: "Apoteker Rumah Sakit", gaji: "Rp 10-25M", icon: "💊"},
      {nama: "Apoteker Industri", gaji: "Rp 12-30M", icon: "🏭"},
      {nama: "Peneliti Obat", gaji: "Rp 15-40M", icon: "🔬"},
      {nama: "Farmasis Klinis", gaji: "Rp 12-28M", icon: "🏥"},
      {nama: "Quality Control Farmasi", gaji: "Rp 10-25M", icon: "✅"}
    ]
  }
};

// Get jurusan from URL or default
const urlParams = new URLSearchParams(window.location.search);
const initialJurusan = urlParams.get('jurusan') || 'informatika';

function getSkillIcon(skill) {
  return skillIcons[skill] || '⭐';
}

function renderJurusan(jurusan) {
  const data = jurusanData[jurusan];
  if (!data) return;

  // Update header
  document.getElementById("jurusanNama").textContent = data.nama;
  document.getElementById("jurusanDeskripsi").textContent = data.deskripsi;
  
  // Update selector
  document.getElementById("jurusanSelect").value = jurusan;

  // Roadmap Timeline
  const roadmapContainer = document.getElementById("roadmapContainer");
  roadmapContainer.innerHTML = '';

  data.roadmap.forEach((item, index) => {
    const isEven = index % 2 === 0;
    const timelineItem = document.createElement('div');
    timelineItem.className = `timeline-item group ${isEven ? 'timeline-right' : 'timeline-left'} mb-20 relative`;
    
    timelineItem.innerHTML = `
      <div class="timeline-dot absolute top-8 w-5 h-5 bg-primary rounded-full shadow-lg border-4 border-white z-10 group-hover:scale-125 transition-all duration-300"></div>
      ${index < data.roadmap.length - 1 ? '<div class="timeline-line absolute top-12 bottom-0 w-px bg-gradient-to-b from-primary/30 to-secondary/50 left-1/2 transform -translate-x-1/2"></div>' : ''}
      
      <div class="timeline-content bg-white p-8 lg:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-secondary/20 lg:max-w-2xl ${
        isEven ? 'ml-16 lg:ml-24' : 'mr-16 lg:mr-24 ml-auto lg:mr-auto'
      }">
        <div class="flex items-start gap-4 mb-6">
          <div class="timeline-year w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 mt-2">
            <span class="text-2xl font-bold text-white">${item.tahun.split(' ')[1]}</span>
          </div>
          <div>
            <h3 class="text-2xl font-bold text-primary mb-2">${item.tahun}</h3>
            <p class="text-slate-600 font-semibold">${item.subtitle}</p>
          </div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">📚 Mata Kuliah</h4>
            <ul class="space-y-2">
              ${item.matkul.map(matkul => `<li class="text-slate-700 pl-4 relative before:absolute before:left-0 before:w-2 before:h-2 before:bg-secondary/50 before:rounded-full before:mt-2"> ${matkul}</li>`).join('')}
            </ul>
            ${item.project ? `<div class="mt-6 p-4 bg-secondary/10 rounded-2xl">
              <h5 class="font-semibold text-slate-800 mb-2 flex items-center gap-2">💻 Project Wajib</h5>
              <p class="text-slate-700 italic">${item.project}</p>
            </div>` : ''}
          </div>
          
          <div>
            <h4 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">🏆 Skill Didapat</h4>
            <div class="flex flex-wrap gap-3">
              ${item.skill.map(skill => 
                `<span class="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-semibold rounded-xl shadow-sm flex items-center gap-2 hover:bg-primary/20 transition-all duration-200">
                  ${getSkillIcon(skill)} ${skill}
                </span>`
              ).join('')}
            </div>
            ${item.sertifikasi ? `<div class="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
              <h5 class="font-semibold text-green-800 mb-2">🏅 Sertifikasi Direkomendasikan</h5>
              <p class="text-green-700 text-sm">${item.sertifikasi}</p>
            </div>` : ''}
          </div>
        </div>
        
        ${item.tips ? `<div class="p-5 bg-gradient-to-r from-secondary/20 rounded-2xl border-l-4 border-primary">
          <p class="text-slate-700 italic font-medium">${item.tips}</p>
        </div>` : ''}
      </div>
    `;
    
    roadmapContainer.appendChild(timelineItem);
  });

  // Career Cards
  const careerContainer = document.getElementById("careerList");
  careerContainer.innerHTML = '';
  
  data.career.forEach(career => {
    const card = document.createElement('div');
    card.className = 'group bg-gradient-to-br from-white to-slate-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-secondary/20 hover:border-primary/30 cursor-pointer';
    card.innerHTML = `
      <div class="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <span class="text-2xl">${career.icon}</span>
      </div>
      <h4 class="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">${career.nama}</h4>
      <p class="text-slate-500 text-lg font-semibold mb-4">${career.gaji}</p>
      <div class="h-1 bg-gradient-to-r from-primary to-secondary rounded-full w-20 group-hover:w-full transition-all duration-500"></div>
    `;
    careerContainer.appendChild(card);
  });

  // Update URL without reload
  const url = new URL(window.location);
  url.searchParams.set('jurusan', jurusan);
  window.history.replaceState({}, '', url);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  renderJurusan(initialJurusan);
  
  const select = document.getElementById("jurusanSelect");
  if (select) {
    select.addEventListener("change", function() {
      renderJurusan(this.value);
    });
  }
});
