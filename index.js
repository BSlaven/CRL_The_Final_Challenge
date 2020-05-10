const menu = document.querySelector('.menu-span');
const navbar = document.querySelector('.navbar');


menu.addEventListener('click', () => {
  navbar.classList.toggle('visible');
})
