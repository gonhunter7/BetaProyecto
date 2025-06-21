document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu');

    function closeMenu() {
        if (menu.classList.contains('active')) {
            toggleButton.classList.remove('active');
            menu.classList.remove('active');
        }
    }

    toggleButton.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });

    window.addEventListener('scroll', closeMenu);
    window.addEventListener('click', function(event) {
        if (menu.classList.contains('active') && !menu.contains(event.target) && event.target !== toggleButton) {
            closeMenu();
        }
    });
});
