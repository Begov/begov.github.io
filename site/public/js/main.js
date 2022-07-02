const menu = document.querySelector('#menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('#close');

const links = document.querySelectorAll('.links a');

links.forEach(elem => {
  elem.addEventListener('click', function(e) {
    e.preventDefault();
    let id = this.getAttribute('href');
    let content = document.querySelector(id);
    content.scrollIntoView({block: "start", behavior: "smooth"});
    mobileMenu.classList.remove('show-menu');
  });
})

menu.addEventListener('click', function() {
  mobileMenu.classList.add('show-menu');
});

closeMenu.addEventListener('click', function() {
  mobileMenu.classList.remove('show-menu');
});