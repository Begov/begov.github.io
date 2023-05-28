const bars = document.querySelector('#bars');
const menu = document.querySelector('#menu');
const closeMenu = document.querySelector('#close-menu');

bars.addEventListener('click', function() {
  menu.classList.add('show');
});

closeMenu.addEventListener('click', function() {
  menu.classList.remove('show');
});