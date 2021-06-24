const $menuHamburger = document.querySelector('.header__menu-hamburger');
const $sideMenu = document.querySelector('.header__side-menu');

function handleClick() {
  $menuHamburger.classList.toggle('--active');
  $sideMenu.classList.toggle('--active');
}

$menuHamburger.addEventListener('click', handleClick);