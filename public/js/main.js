const ya = document.querySelector('.ya');
const infoBlock = document.querySelector('.info-block');

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