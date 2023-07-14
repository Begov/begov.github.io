const menu = document.querySelector('#menu');
const mobMenu = document.querySelector('#mob-menu');
const closeSvg = document.querySelector('#close-svg');

const images = document.querySelectorAll('.slides img');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');

const topMenuButtonsImg = document.querySelectorAll('.header-bottom img');
const detailsImgAll = document.querySelectorAll('.details-wrapper img');
const telegramImg = document.querySelector('.telegram img');
const vkImg = document.querySelector('.vk img');

const topMenuButtons = [
  'img/top-menu-btn-1.png',
  'img/top-menu-btn-2.png',
  'img/top-menu-btn-3.png',
  'img/top-menu-btn-4.png',
];

const topMenuButtonsHover = [
  'img/top-menu-btn-1-hover.png',
  'img/top-menu-btn-2-hover.png',
  'img/top-menu-btn-3-hover.png',
  'img/top-menu-btn-4-hover.png',
];

const detailsImg = [
  'img/details-img-1.png',
  'img/details-img-2.png',
  'img/details-img-3.png',
];

const detailsImgHover = [
  'img/details-img-1-hover.png',
  'img/details-img-2-hover.png',
  'img/details-img-3-hover.png',
];

let index = 0;

const showSlide = function(index) {

  images.forEach(img => {
    img.classList.remove('show');
  });

  images[index].classList.add('show');

}

showSlide(index);

menu.addEventListener('click', function() {
  mobMenu.classList.add('show');
  document.body.style.overflowY = 'hidden';
});

closeSvg.addEventListener('click', function() {
  mobMenu.classList.remove('show');
  document.body.style.overflowY = 'scroll';
});

topMenuButtonsImg.forEach(button => {

  button.addEventListener('mouseover', function() {
    let index = this.getAttribute('data-index');
    this.src = topMenuButtonsHover[index];
  });

  button.addEventListener('mouseout', function() {
    let index = this.getAttribute('data-index');
    this.src = topMenuButtons[index];
  });

});

detailsImgAll.forEach(img => {

  img.addEventListener('mouseover', function() {
    let index = this.getAttribute('data-index');
    this.src = detailsImgHover[index];
  });

  img.addEventListener('mouseout', function() {
    let index = this.getAttribute('data-index');
    this.src = detailsImg[index];
  });

});

telegramImg.addEventListener('mouseover', function() {
  this.src = 'img/telegram-hover.png'
});

telegramImg.addEventListener('mouseout', function() {
  this.src = 'img/telegram.png';
});

vkImg.addEventListener('mouseover', function() {
  this.src = 'img/vk-hover.png';
});

vkImg.addEventListener('mouseout', function() {
  this.src = 'img/vk.png';
});

prevArrow.addEventListener('click', function() {
  index++;
  if(index > images.length - 1) index = 0;
  showSlide(index);
});

nextArrow.addEventListener('click', function() {
  index--;
  if(index < 0) index = images.length - 1;
  showSlide(index);
});
