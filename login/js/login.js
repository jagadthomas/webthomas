// login.js
// Menggunakan REST API dari LKPD: https://herisusanta.my.id/javalogin/api/

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
      alert('Username dan password harus diisi!');
      return;
    }

    fetch('https://herisusanta.my.id/javalogin/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success' || data.token) {
          // Simpan data user ke localStorage
          localStorage.setItem('token', data.token || 'loggedin');
          localStorage.setItem('user', JSON.stringify({ username, role: data.role || 'user' }));
          alert('Login berhasil! Selamat datang, ' + username);

          // Arahkan ke halaman admin jika admin, ke landing page jika user biasa
          if (username === 'admin') {
            window.location.href = '../admin/index.html';
          } else {
            window.location.href = '../index.html';
          }
        } else {
          alert('Login gagal! Username atau password salah.');
        }
      })
      .catch(err => {
        console.error(err);
        alert('Terjadi kesalahan. Periksa koneksi internet kamu.');
      });
  });
});
