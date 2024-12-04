const headerMenu = document.querySelector('.header-menu');
const mobMenu = document.querySelector('.mob-menu');

headerMenu.addEventListener('click', function() {
  mobMenu.classList.add('show-mob-menu');
});

mobMenu.addEventListener('click', function() {
  mobMenu.classList.remove('show-mob-menu');
});

const cons = document.querySelector('.cons');

cons.addEventListener('click', function() {
  horizontalModal.classList.add('show-modal');
});

const verticalModal = document.querySelector('.vertical-modal');

setTimeout(function() {
  verticalModal.classList.add('show-vertical-modal');
}, 5000);

verticalModal.addEventListener('click', function(e) {
  if(e.target.classList.contains('modal')) {
    verticalModal.classList.remove('show-vertical-modal');
  }
});

const prevAll = document.querySelectorAll('.prev');
const nextAll = document.querySelectorAll('.next');

let divider = 1;
let slideEnd = 2;

if(window.innerWidth < 879) {
  divider = 1;
  slideEnd = 1;
} else {
  divider = 3;
  slideEnd = 2;
}

const updateSlider = function(currentIndex, sliderWrap, sliderItems) {
  sliderWrap.style.transform = `translateX(${-currentIndex * (100 / divider)}%)`;
  sliderItems.forEach(function(slide, index) {
    slide.classList.toggle('active-slide', index == currentIndex + 1);
  });
}

for(let i = 0; i < prevAll.length; i++) {

  const sliderWrap = prevAll[i].closest('.slider').querySelector('.slider-wrap');
  const sliderItems = sliderWrap.querySelectorAll('.slider-item');
  let currentIndex = 0;
  updateSlider(currentIndex, sliderWrap, sliderItems);

  prevAll[i].addEventListener('click', function() {
    if(currentIndex > -1) {
      currentIndex--;
      updateSlider(currentIndex, sliderWrap, sliderItems);
    }
  });

  nextAll[i].addEventListener('click', function() {
    if(currentIndex < sliderItems.length - slideEnd) {
      currentIndex++;
      updateSlider(currentIndex, sliderWrap, sliderItems);
    }
  });

}

const servicesButtonAll = document.querySelectorAll('.services-buttons button');
const servicesButtons = document.querySelector('.services-buttons');
const servicesCards = document.querySelector('.services-cards');
const servicesCardAll = document.querySelectorAll('.services-card');
const servicesPrice = document.querySelector('.services-price');
const servicesPriceItem = document.querySelectorAll('.services-price-item');

const showServicePriceItem = function(id) {
  servicesPriceItem.forEach(function(item) {
    item.style.display = 'none';
  });
  servicesPriceItem[id].style.display = 'flex';
}

servicesButtons.addEventListener('click', function(e) {

  if(e.target.nodeName == 'BUTTON') {

    let category = e.target.getAttribute('data-category');

    if(category == 'services-children') {

      let id = e.target.getAttribute('data-id');
      servicesCards.style.display = 'none';
      servicesPrice.style.display = 'block';
      showServicePriceItem(id);

    } else {

      servicesCards.style.display = 'grid';
      servicesPrice.style.display = 'none';

      servicesCardAll.forEach(function(card) {
        card.style.display = card.getAttribute('data-category') == category || category == 'services-all' ? 'block': 'none';
      });

    }
    
    servicesButtonAll.forEach(function(button) {
        button.classList.remove('active-service')
    });

    e.target.classList.add('active-service');
    
  }

});

servicesCardAll.forEach(function(card) {
  card.addEventListener('click', function() {
    let id = card.getAttribute('data-id');

    if(id != -1) {
      servicesCards.style.display = 'none';
      servicesPrice.style.display = 'block';
      showServicePriceItem(id);
    } else {
      horizontalModal.classList.add('show-modal');
    }
    
  });
});

const horizontalModal = document.querySelector('.horizontal-modal');
const servicesLiAll = document.querySelectorAll('.services-li li');
const btnCloseAll = document.querySelectorAll('.close');

servicesLiAll.forEach(function(li) {
  li.addEventListener('click', function() {
    horizontalModal.classList.add('show-modal');
  });
});

btnCloseAll.forEach(function(btn) {
  btn.addEventListener('click', function() {
    horizontalModal.classList.remove('show-modal');
  })
});

const reviewsCardAll = document.querySelectorAll('.reviews-card');

reviewsCardAll.forEach(function(card) {
  card.addEventListener('click', function() {
    window.open('https://yandex.ru/maps/-/CDX8eCyq', '_blank')
  });
});
