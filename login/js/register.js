// register.js
// Menggunakan REST API dari LKPD: https://herisusanta.my.id/javalogin/api/

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registerForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email    = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !email || !password) {
      alert('Semua field harus diisi!');
      return;
    }

    fetch('https://herisusanta.my.id/javalogin/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success' || data.message === 'User registered successfully') {
          alert('Registrasi berhasil! Silakan login.');
          window.location.href = 'index.html';
        } else {
          alert('Registrasi gagal! ' + (data.message || 'Username mungkin sudah digunakan.'));
        }
      })
      .catch(err => {
        console.error(err);
        alert('Terjadi kesalahan. Periksa koneksi internet kamu.');
      });
  });
});
