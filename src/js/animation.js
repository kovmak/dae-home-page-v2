window.onload = function() {
    // Trigger logo fade-in animation
    const logo = document.querySelector('.nav__logo');
    logo.style.animation = 'fadeInLogo 1s forwards';

    // Trigger menu slide-in animation with delay
    const menuItems = document.querySelector('.nav__menu');
    menuItems.style.animation = 'slideInMenu 1s 0.5s forwards';

    // Trigger user icons fade-in animation
    const userIcons = document.querySelector('.nav__user');
    userIcons.style.animation = 'fadeInUser 1s 1s forwards';

    // Add event listeners to language switch buttons for active state toggle
    const langButtons = document.querySelectorAll('.nav__language-switcher button');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
};
