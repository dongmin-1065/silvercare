document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    if(menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // Sidebar Active State
    const menuItems = document.querySelectorAll('.sidebar-menu ul li');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Dark Mode Toggle Mock
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const icon = darkModeToggle.querySelector('i');
            if (document.body.classList.contains('dark-theme')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                document.documentElement.style.setProperty('--bg-main', '#111827');
                document.documentElement.style.setProperty('--bg-white', '#1f2937');
                document.documentElement.style.setProperty('--text-dark', '#f9fafb');
                document.documentElement.style.setProperty('--text-gray', '#9ca3af');
                document.documentElement.style.setProperty('--border-color', '#374151');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                document.documentElement.style.setProperty('--bg-main', '#f5f6fa');
                document.documentElement.style.setProperty('--bg-white', '#ffffff');
                document.documentElement.style.setProperty('--text-dark', '#212529');
                document.documentElement.style.setProperty('--text-gray', '#6c757d');
                document.documentElement.style.setProperty('--border-color', '#e9ecef');
            }
        });
    }
});
