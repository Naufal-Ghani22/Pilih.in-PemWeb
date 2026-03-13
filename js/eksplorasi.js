// Data kampus sample (Indonesian universities for recommended jurusan)
const kampusData = [
    {
        id: 1,
        logo: './img/Logo UPNVJT.png',
        nama: 'Universitas Pembangunan Nasional Veteran Jawa Timur',
        lokasi: 'Jawa',
        akreditasi: 'A',
        biaya: 'medium',
        jurusan: 'Informatika',
        website: 'https://upnjatim.ac.id'
    },
    {
        id: 2,
        logo: './img/Logo UI.png',
        nama: 'Universitas Indonesia',
        lokasi: 'Jawa',
        akreditasi: 'Unggul',
        biaya: 'high',
        jurusan: 'Informatika',
        website: 'https://www.ui.ac.id'
    },
    {
        id: 3,
        logo: './img/Logo ITB.png',
        nama: 'Institut Teknologi Bandung',
        lokasi: 'Jawa',
        akreditasi: 'Unggul',
        biaya: 'high',
        jurusan: 'Sistem Informasi',
        website: 'https://www.itb.ac.id'
    },
    {
        id: 4,
        logo: './img/Logo UGM.jfif',
        nama: 'Universitas Gadjah Mada',
        lokasi: 'Jawa',
        akreditasi: 'Unggul',
        biaya: 'medium',
        jurusan: 'Informatika',
        website: 'https://ugm.ac.id'
    },
    {
        id: 5,
        logo: './img/logo undip.jfif',
        nama: 'Universitas Diponegoro',
        lokasi: 'Jawa',
        akreditasi: 'A',
        biaya: 'medium',
        jurusan: 'Sistem Informasi',
        website: 'https://undip.ac.id'
    },
    {
        id: 6,
        logo: './img/logo unpad.png',
        nama: 'Universitas Padjadjaran',
        lokasi: 'Jawa',
        akreditasi: 'A',
        biaya: 'medium',
        jurusan: 'Informatika',
        website: 'https://www.unpad.ac.id'
    },
    {
        id: 7,
        logo: 'https://via.placeholder.com/80x80/c1b7ff/ffffff?text=USU',
        nama: 'Universitas Sumatera Utara',
        lokasi: 'Sumatera',
        akreditasi: 'A',
        biaya: 'low',
        jurusan: 'Sistem Informasi',
        website: 'https://www.usu.ac.id'
    },
    {
        id: 8,
        logo: 'https://via.placeholder.com/80x80/6d57f8/ffffff?text=Unhas',
        nama: 'Universitas Hasanuddin',
        lokasi: 'Sulawesi',
        akreditasi: 'A',
        biaya: 'low',
        jurusan: 'Informatika',
        website: 'https://unhas.ac.id'
    }
];

let currentData = [...kampusData];

function renderKampus(kampuses) {
    const grid = document.getElementById('kampusGrid');
    const empty = document.getElementById('kampusEmpty');
    const count = document.getElementById('count');

    count.textContent = kampuses.length;

    if (kampuses.length === 0) {
        grid.classList.add('hidden');
        empty.classList.remove('hidden');
        return;
    }

    empty.classList.add('hidden');
    grid.classList.remove('hidden');
    grid.innerHTML = kampuses.map(kampus => `
        <div class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 hover:-translate-y-1">
            <div class="p-8">
                <div class="flex items-start gap-4 mb-6">
                    <img src="${kampus.logo}" alt="${kampus.nama}" class="w-20 h-20 rounded-2xl object-cover flex-shrink-0">
                    <div class="flex-1 min-w-0">
                        <h3 class="text-2xl font-bold text-slate-800 truncate mb-2">${kampus.nama}</h3>
                        <p class="text-lg text-slate-600 mb-1">📍 ${kampus.lokasi}</p>
                        <span class="inline-block bg-secondary px-4 py-2 rounded-full text-primary font-semibold text-sm">${kampus.akreditasi}</span>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-slate-500">Estimasi UKT / semester</p>
                        <p class="text-2xl font-bold text-primary">Rp ${getBiayaDisplay(kampus.biaya)}</p>
                        <p class="text-sm text-slate-600 mt-1">${kampus.jurusan}</p>
                    </div>
                    <a href="${kampus.website}" target="_blank" class="bg-primary text-white font-semibold py-4 px-8 rounded-full hover:shadow-lg hover:opacity-90 transition whitespace-nowrap">Kunjungi Web</a>
                </div>
            </div>
        </div>
    `).join('');
}

function getBiayaDisplay(biaya) {
    const ranges = {
        low: '1-7 Juta',
        medium: '1-15 Juta',
        high: '1-20+ Juta'
    };
    return ranges[biaya] || biaya;
}

function filterKampus() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const lokasi = document.getElementById('lokasiFilter').value;
    const akreditasi = document.getElementById('akreditasiFilter').value;
    const biaya = document.getElementById('biayaFilter').value;

    currentData = kampusData.filter(kampus => {
        const matchesSearch = kampus.nama.toLowerCase().includes(search) || kampus.jurusan.toLowerCase().includes(search);
        const matchesLokasi = !lokasi || kampus.lokasi === lokasi;
        const matchesAkreditasi = !akreditasi || kampus.akreditasi === akreditasi;
        const matchesBiaya = !biaya || kampus.biaya === biaya;

        return matchesSearch && matchesLokasi && matchesAkreditasi && matchesBiaya;
    });

    renderKampus(currentData);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderKampus(currentData);

    // Filter events
    document.getElementById('searchInput').addEventListener('input', filterKampus);
    document.getElementById('lokasiFilter').addEventListener('change', filterKampus);
    document.getElementById('akreditasiFilter').addEventListener('change', filterKampus);
    document.getElementById('biayaFilter').addEventListener('change', filterKampus);

    // Clear filters
    document.getElementById('clearFilters').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('lokasiFilter').value = '';
        document.getElementById('akreditasiFilter').value = '';
        document.getElementById('biayaFilter').value = '';
        filterKampus();
    });
});

