const ya = document.querySelector('.ya');
const infoBlock = document.querySelector('.info-block');

const animateAll = document.querySelectorAll('.animate');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

const animateCss = function(elements, observer) {
  elements.forEach(element => {
    if(element.intersectionRatio > 0) {
      addAnimate(element.target);
    }
  });
}

const observer = new IntersectionObserver(animateCss, options);

animateAll.forEach(element => {
  observer.observe(element);
});

const addAnimate = function(element) {
  element.classList.add(element.getAttribute('data-animate'));
}

ya.addEventListener('click', function(e) {
  e.preventDefault();
  let scrollY = window.pageYOffset;
  let pageY = infoBlock.getBoundingClientRect().top + scrollY;
  let interval = setInterval(() => {
    if(window.pageYOffset + 20 >= pageY) {
      clearInterval(interval);
    } else {
      scrollY += 20;
      scrollTo(0, scrollY);
    }
  }, 5);
});

$('.reviews').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});