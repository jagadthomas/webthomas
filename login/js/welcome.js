// welcome.js
// Script ini dipasang di landing page (index.html utama)
// Fungsi: menampilkan nama user yang login, dan tombol logout

document.addEventListener('DOMContentLoaded', function () {
  const user  = JSON.parse(localStorage.getItem('user') || 'null');
  const token = localStorage.getItem('token');

  // Cari tombol login di landing page (sesuaikan id-nya jika berbeda)
  const loginBtn  = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const namaUser  = document.getElementById('namaUser');

  if (token && user) {
    // User sudah login
    if (loginBtn)  loginBtn.style.display  = 'none';
    if (logoutBtn) logoutBtn.style.display = 'inline-block';
    if (namaUser)  namaUser.textContent    = 'Halo, ' + user.username + '!';
  } else {
    // User belum login
    if (loginBtn)  loginBtn.style.display  = 'inline-block';
    if (logoutBtn) logoutBtn.style.display = 'none';
    if (namaUser)  namaUser.textContent    = '';
  }

  // Fungsi logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      alert('Kamu telah logout.');
      window.location.reload();
    });
  }
});
