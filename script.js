document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.getElementById('navbar');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', function() {
            // Toggle class 'active' pada navbar untuk membuka/menutup menu
            navbar.classList.toggle('active');
            
            // Mengubah status aria-expanded untuk aksesibilitas
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });

        // Opsional: Menutup menu ketika salah satu link diklik (untuk smooth scrolling/navigasi)
        const navLinks = document.querySelectorAll('#navbar a[href^="#"], #navbar a[href^="../"]');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Periksa apakah ini tampilan mobile (dengan memeriksa status menu)
                if (window.innerWidth <= 768) {
                    navbar.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});
