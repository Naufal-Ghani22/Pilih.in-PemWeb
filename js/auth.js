/* Auth helper untuk Pilih.in */
const STORAGE_USERS = 'pilihin_users';
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

function generateId() {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function setSession(userId) {
    localStorage.setItem(STORAGE_SESSION, userId);
}

function clearSession() {
    localStorage.removeItem(STORAGE_SESSION);
}

function getCurrentUser() {
    const userId = localStorage.getItem(STORAGE_SESSION);
    if (!userId) return null;
    const users = fromStorage(STORAGE_USERS, []);
    return users.find(u => u.id === userId) || null;
}

function showMessage(message, type = 'success') {
    const el = document.getElementById('message');
    el.innerText = message;
    el.classList.remove('hidden', 'border-red-200', 'bg-red-50', 'text-red-700', 'border-green-200', 'bg-green-50', 'text-green-700');
    if (type === 'error') {
        el.classList.add('border-red-200', 'bg-red-50', 'text-red-700');
    } else {
        el.classList.add('border-green-200', 'bg-green-50', 'text-green-700');
    }
}

function hideMessage() {
    document.getElementById('message').classList.add('hidden');
}

function switchTab(tab) {
    const loginForm = document.getElementById('form-login');
    const registerForm = document.getElementById('form-register');
    const resetForm = document.getElementById('form-reset');

    const loginTab = document.getElementById('tab-login');
    const registerTab = document.getElementById('tab-register');

    hideMessage();

    if (tab === 'register') {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        resetForm.classList.add('hidden');
        loginTab.classList.remove('bg-white', 'text-primary');
        loginTab.classList.add('border', 'border-white', 'text-white');
        registerTab.classList.add('bg-white', 'text-primary');
        registerTab.classList.remove('border', 'border-white', 'text-white');
        document.getElementById('auth-nav-action').innerText = 'Sudah punya akun? Masuk';
        document.getElementById('auth-nav-action').href = 'auth.html';
    } else {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        resetForm.classList.add('hidden');
        loginTab.classList.add('bg-white', 'text-primary');
        loginTab.classList.remove('border', 'border-white', 'text-white');
        registerTab.classList.remove('bg-white', 'text-primary');
        registerTab.classList.add('border', 'border-white', 'text-white');
        document.getElementById('auth-nav-action').innerText = 'Belum punya akun? Daftar';
        document.getElementById('auth-nav-action').href = 'auth.html?mode=register';
    }
}

function initAuth() {
    const current = getCurrentUser();
    if (current) {
        // already logged in -> redirect to dashboard
        window.location.href = 'dashboard.html';
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');

    document.getElementById('tab-login').addEventListener('click', () => switchTab('login'));
    document.getElementById('tab-register').addEventListener('click', () => switchTab('register'));

    document.getElementById('login-button').addEventListener('click', login);
    document.getElementById('register-button').addEventListener('click', register);
    document.getElementById('forgot-password-toggle').addEventListener('click', () => showReset(true));
    document.getElementById('back-to-login').addEventListener('click', () => showReset(false));
    document.getElementById('reset-button').addEventListener('click', resetPassword);

    if (mode === 'register') {
        switchTab('register');
    } else {
        switchTab('login');
    }
}

function showReset(show) {
    const loginForm = document.getElementById('form-login');
    const resetForm = document.getElementById('form-reset');
    if (show) {
        loginForm.classList.add('hidden');
        resetForm.classList.remove('hidden');
    } else {
        loginForm.classList.remove('hidden');
        resetForm.classList.add('hidden');
    }
    hideMessage();
}

function login() {
    hideMessage();
    const identifier = document.getElementById('login-identifier').value.trim();
    const password = document.getElementById('login-password').value;

    if (!identifier || !password) {
        showMessage('Isi email/username dan kata sandi.', 'error');
        return;
    }

    const users = fromStorage(STORAGE_USERS, []);
    const user = users.find(u => (u.email.toLowerCase() === identifier.toLowerCase() || u.username.toLowerCase() === identifier.toLowerCase()) && u.password === password);

    if (!user) {
        showMessage('Email/username atau kata sandi salah.', 'error');
        return;
    }

    setSession(user.id);
    showMessage('Berhasil masuk! Mengalihkan ke dashboard…', 'success');
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 800);
}

function register() {
    hideMessage();
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const username = document.getElementById('reg-username').value.trim();
    const school = document.getElementById('reg-school').value.trim();
    const major = document.getElementById('reg-major').value.trim();
    const password = document.getElementById('reg-password').value;

    if (!name || !email || !username || !school || !major || !password) {
        showMessage('Lengkapi semua data untuk mendaftar.', 'error');
        return;
    }

    if (password.length < 6) {
        showMessage('Password minimal 6 karakter.', 'error');
        return;
    }

    const users = fromStorage(STORAGE_USERS, []);
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
        showMessage('Email sudah terdaftar.', 'error');
        return;
    }
    if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
        showMessage('Username sudah digunakan.', 'error');
        return;
    }

    const newUser = {
        id: generateId(),
        name,
        email,
        username,
        school,
        major,
        password,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    toStorage(STORAGE_USERS, users);
    setSession(newUser.id);

    showMessage('Akun berhasil dibuat! Mengalihkan ke dashboard…', 'success');
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 800);
}

function resetPassword() {
    hideMessage();
    const email = document.getElementById('reset-email').value.trim();
    const password = document.getElementById('reset-password').value;

    if (!email || !password) {
        showMessage('Isi email dan password baru.', 'error');
        return;
    }

    const users = fromStorage(STORAGE_USERS, []);
    const userIndex = users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());

    if (userIndex === -1) {
        showMessage('Email tidak ditemukan.', 'error');
        return;
    }

    if (password.length < 6) {
        showMessage('Password minimal 6 karakter.', 'error');
        return;
    }

    users[userIndex].password = password;
    toStorage(STORAGE_USERS, users);

    showMessage('Password berhasil diubah. Silakan masuk menggunakan password baru.', 'success');
    setTimeout(() => {
        showReset(false);
        switchTab('login');
    }, 1200);
}

window.addEventListener('DOMContentLoaded', initAuth);
