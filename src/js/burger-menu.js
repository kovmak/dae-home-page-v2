document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.nav__item');

    menuItems.forEach(item => {
        const submenu = item.querySelector('.nav__submenu');
        const link = item.querySelector('.nav__link');

        if (submenu) {
            link.addEventListener('click', function (event) {
                event.preventDefault(); 

                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            });
        }
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.nav__menu')) {
            document.querySelectorAll('.nav__submenu').forEach(submenu => {
                submenu.style.display = 'none';
            });
        }
    });
});
