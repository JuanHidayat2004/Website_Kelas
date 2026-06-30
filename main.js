document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form.space-y-4');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if (!name || !email || !message) {
        alert('Semua kolom harus diisi!');
        return;
      }
      const mailto = `mailto:kelas.ti.galaxy@gmail.com?subject=Pesan dari ${encodeURIComponent(name)}&body=Email: ${encodeURIComponent(email)}%0D%0APesan: ${encodeURIComponent(message)}`;
      window.location.href = mailto;
    });
  }
});
