/* Dashboard pengguna Pilih.in */
const STORAGE_SESSION = 'pilihin_current_user_id';

function fromStorage(key, defaultValue = null) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return defaultValue;
        return JSON.parse(raw);
    } catch (err) {
        console.error('Gagal baca localStorage', err);
        return defaultValue;
    }
}

function toStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getCurrentUser() {
    const userId = localStorage.getItem(STORAGE_SESSION);
    if (!userId) return null;
    const users = fromStorage('pilihin_users', []);
    return users.find(u => u.id === userId) || null;
}

function logout() {
    localStorage.removeItem(STORAGE_SESSION);
    window.location.href = 'auth.html';
}

function formatDate(iso) {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
}

function buildHistoryItem(item) {
    const wrapper = document.createElement('div');
    wrapper.className = 'p-5 border border-slate-100 rounded-2xl hover:shadow-lg transition';

    const title = document.createElement('div');
    title.className = 'flex items-start justify-between gap-4';
    title.innerHTML = `
        <div>
            <h3 class="font-bold text-lg text-slate-800">${item.recommendedMajor}</h3>
            <p class="text-sm text-slate-500">${item.compatibility}% cocok — ${formatDate(item.createdAt)}</p>
        </div>
        <span class="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1">${item.score.toFixed(0)} / 100</span>
    `;

    const actions = document.createElement('div');
    actions.className = 'mt-4 flex flex-wrap gap-2';
    actions.innerHTML = `
        <a href="hasil.html" class="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">Lihat Hasil</a>
        <button class="inline-flex items-center justify-center rounded-full bg-primary text-white px-4 py-2 text-sm font-semibold hover:opacity-90" data-action="save-roadmap">Simpan Roadmap</button>
        <button class="inline-flex items-center justify-center rounded-full border border-red-200 text-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-50" data-action="delete">Hapus</button>
    `;

    // Delete handler
    actions.querySelector('[data-action="delete"]').addEventListener('click', () => {
        if (!confirm('Hapus riwayat ini?')) return;
        deleteHistoryItem(item.id);
    });

    // Save roadmap handler
    actions.querySelector('[data-action="save-roadmap"]').addEventListener('click', () => {
        saveRoadmap(item.recommendedMajor);
    });

    wrapper.appendChild(title);
    wrapper.appendChild(actions);

    return wrapper;
}

function loadHistory() {
    const user = getCurrentUser();
    if (!user) return;
    const key = `pilihin_test_history_${user.id}`;
    const history = fromStorage(key, []);

    const historyList = document.getElementById('history-list');
    const historyEmpty = document.getElementById('history-empty');

    if (!history.length) {
        historyList.classList.add('hidden');
        historyEmpty.classList.remove('hidden');
        return;
    }

    historyList.innerHTML = '';

    // Tampilkan item terbaru di atas
    history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    history.forEach(item => {
        historyList.appendChild(buildHistoryItem(item));
    });

    historyEmpty.classList.add('hidden');
    historyList.classList.remove('hidden');
}

function deleteHistoryItem(itemId) {
    const user = getCurrentUser();
    if (!user) return;
    const key = `pilihin_test_history_${user.id}`;
    const history = fromStorage(key, []);
    const filtered = history.filter(item => item.id !== itemId);
    toStorage(key, filtered);
    loadHistory();
}

function saveRoadmap(major) {
    const user = getCurrentUser();
    if (!user) return;
    const key = `pilihin_saved_roadmaps_${user.id}`;
    const list = fromStorage(key, []);

    if (list.includes(major)) {
        alert('Roadmap sudah tersimpan di profilmu.');
        return;
    }

    list.unshift(major);
    toStorage(key, list);
    loadRoadmaps();
    alert('Roadmap tersimpan! Kamu bisa melihatnya di bagian Saved Roadmaps.');
}

function loadRoadmaps() {
    const user = getCurrentUser();
    if (!user) return;
    const key = `pilihin_saved_roadmaps_${user.id}`;
    const list = fromStorage(key, []);

    const container = document.getElementById('roadmap-list');
    const empty = document.getElementById('roadmap-empty');

    if (!list.length) {
        container.classList.add('hidden');
        empty.classList.remove('hidden');
        return;
    }

    container.innerHTML = '';
    list.forEach(major => {
        const item = document.createElement('div');
        item.className = 'flex items-center justify-between rounded-2xl border border-slate-100 px-5 py-4';
        item.innerHTML = `
            <div>
                <h3 class="font-semibold text-slate-800">${major}</h3>
                <p class="text-sm text-slate-500">Roadmap tersimpan.</p>
            </div>
            <button class="text-sm font-semibold text-red-600 hover:underline" data-action="remove">Hapus</button>
        `;

        item.querySelector('[data-action="remove"]').addEventListener('click', () => {
            const next = list.filter(m => m !== major);
            toStorage(key, next);
            loadRoadmaps();
        });

        container.appendChild(item);
    });

    empty.classList.add('hidden');
    container.classList.remove('hidden');
}

function initDashboard() {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = 'auth.html';
        return;
    }

    document.getElementById('profile-name').innerText = user.name;
    document.getElementById('profile-username').innerText = `@${user.username}`;
    document.getElementById('profile-email').innerText = user.email;
    document.getElementById('profile-school').innerText = user.school;
    document.getElementById('profile-major').innerText = user.major;
    document.getElementById('profile-initials').innerText = user.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

    document.getElementById('logout-button').addEventListener('click', logout);
    document.getElementById('clear-roadmaps').addEventListener('click', () => {
        if (!confirm('Hapus semua roadmap tersimpan?')) return;
        toStorage(`pilihin_saved_roadmaps_${user.id}`, []);
        loadRoadmaps();
    });

    loadHistory();
    loadRoadmaps();
}

window.addEventListener('DOMContentLoaded', initDashboard);
