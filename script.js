javascript
document.addEventListener('DOMContentLoaded', () => {
    // --- Simulasi Login ---
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Mencegah form submit
            // Dalam aplikasi nyata, ada validasi di sini
            alert('Login berhasil! Mengarahkan ke Dashboard...');
            window.location.href = 'dashboard.html';
        });
    }

    // --- Simulasi Simpan Data ---
    const saveForms = document.querySelectorAll('.save-form');
    saveForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = form.getAttribute('data-success-message') || 'Data berhasil disimpan!';
            const redirectUrl = form.getAttribute('data-redirect-url') || 'dashboard.html';
            
            alert(message + ' (Ini hanya simulasi, data tidak benar-benar tersimpan)');
            window.location.href = redirectUrl;
        });
    });

    // --- Simulasi Batal ---
    const cancelButtons = document.querySelectorAll('.btn-cancel');
    cancelButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Kembali ke halaman sebelumnya dalam history browser
            window.history.back();
        });
    });
});