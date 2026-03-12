function getFromStorage(key, defaultValue = null) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return defaultValue;
        return JSON.parse(raw);
    } catch (err) {
        console.error('Gagal baca localStorage', err);
        return defaultValue;
    }
}

function setToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function generateId() {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function pickMajorByScore(avgScore) {
    if (avgScore >= 4.3) return 'Sistem Informasi';
    if (avgScore >= 3.8) return 'Ilmu Komputer';
    if (avgScore >= 3.3) return 'Bisnis Digital';
    return 'Desain Komunikasi Visual';
}

function getDescriptionForMajor(major) {
    const map = {
        'Sistem Informasi': 'Kombinasi unik antara analisis bisnis dan kemampuan teknis. Kamu cenderung unggul pada perancangan sistem yang selaras dengan kebutuhan organisasi.',
        'Ilmu Komputer': 'Kamu suka berpikir logis dan mendalami teknologi. Jurusan ini cocok jika kamu ingin fokus ke pemrograman, algoritma, dan pengembangan perangkat lunak.',
        'Bisnis Digital': 'Karakter kreatif dan strategismu cocok dengan dunia digital marketing, e-commerce, dan inovasi bisnis berbasis teknologi.',
        'Desain Komunikasi Visual': 'Kecenderunganmu pada estetika dan detail visual membuatmu kuat di bidang desain, UI/UX, dan branding digital.'
    };
    return map[major] || 'Jurusan ini selaras dengan profil kamu berdasarkan hasil tes.';
}

function saveHistory(item) {
    const userId = localStorage.getItem('pilihin_current_user_id');
    if (!userId) return;
    const key = `pilihin_test_history_${userId}`;
    const history = getFromStorage(key, []);
    history.unshift(item);
    setToStorage(key, history);
}

function saveRoadmap(major) {
    const userId = localStorage.getItem('pilihin_current_user_id');
    if (!userId) {
        window.location.href = 'auth.html?mode=login';
        return;
    }

    const key = `pilihin_saved_roadmaps_${userId}`;
    const list = getFromStorage(key, []);
    if (list.includes(major)) {
        alert('Roadmap sudah ada di profilmu.');
        return;
    }
    list.unshift(major);
    setToStorage(key, list);
    alert('Berhasil menyimpan roadmap!');
}

function initHasil() {
    const raw = localStorage.getItem('hasilTesPilihin');
    if (!raw) {
        window.location.href = 'tes.html';
        return;
    }

    const answers = JSON.parse(raw);
    const values = Object.values(answers).map(Number);
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    const percent = Math.round((avg / 5) * 100);
    const score = Math.round(avg * 20);
    const major = pickMajorByScore(avg);
    const description = getDescriptionForMajor(major);

    document.getElementById('recommended-major').innerText = major;
    document.getElementById('compatibility-percent').innerText = `${percent}% Cocok`;
    document.getElementById('recommended-description').innerText = description;

    const viewRoadmap = document.getElementById('view-roadmap');
    if (viewRoadmap) viewRoadmap.href = `roadmap.html?major=${encodeURIComponent(major)}`;

    document.getElementById('save-roadmap').addEventListener('click', () => saveRoadmap(major));
    document.getElementById('view-dashboard').addEventListener('click', () => {
        const userId = localStorage.getItem('pilihin_current_user_id');
        if (!userId) {
            window.location.href = 'auth.html?mode=login';
        }
    });

    // Simpan ke riwayat jika user login
    const userId = localStorage.getItem('pilihin_current_user_id');
    if (userId) {
        const historyItem = {
            id: generateId(),
            createdAt: new Date().toISOString(),
            answers,
            recommendedMajor: major,
            compatibility: percent,
            score,
        };
        saveHistory(historyItem);
    }

    // Update chart
    const ctx = document.getElementById('radarChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Logika & Analisa', 'Kreativitas', 'Komunikasi', 'Manajerial Bisnis', 'Teknis / Koding'],
            datasets: [{
                label: 'Skor Potensi',
                data: values,
                backgroundColor: 'rgba(109, 87, 248, 0.2)',
                borderColor: '#6d57f8',
                pointBackgroundColor: '#c1b7ff',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#6d57f8',
                borderWidth: 2,
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { color: 'rgba(0,0,0,0.1)' },
                    grid: { color: 'rgba(0,0,0,0.1)' },
                    pointLabels: {
                        font: { family: "'Inter', sans-serif", size: 12, weight: '600' },
                        color: '#475569'
                    },
                    ticks: { display: false, min: 0, max: 5 }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

window.addEventListener('DOMContentLoaded', initHasil);
