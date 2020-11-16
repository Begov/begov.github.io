const heart = document.querySelector('#heart'),
      heartButton = document.querySelector('#heart img'),
      play = document.querySelector('#play'),
      playButton = document.querySelector('#play button'),
      spot = document.querySelector('#spot');

const statusHTML = `<div id="status" class="status">Найдено писем: <span id="out">0</span> / 10 <img src="img/svg/status.svg" alt="Письмо"></div>`;

const bottle = [

  `<p>Я люблю тебя родная</p>
  <p>Моя зайка дорогая!</p>
  <p>Я всю жизнь любить хочу,</p>
  <p>Только лишь тебя одну!</p>
  <p>Я хочу с тобой смеяться,</p>
  <p>Радоваться, наслаждаться,</p>
  <p>И тонуть в твоих глазах</p>
  <p>Как же я тебе безмерно рад!</p>`,

  `<p>Любовь твоя мне душу греет</p>
  <p>Я радуюсь, что есть ты у меня</p>
  <p>Ты для меня дороже чем алмазы</p>
  <p>Ты у меня одна любимая моя</p>`,

  `<p>Ты для меня не просто человек родной</p>
  <p>Ты для меня как луч во тьме ночной</p>
  <p>Ты для меня сокровище бесценное</p>
  <p>И ты моя любимая и нежная</p>`,

  `<p>Любил, люблю, любить тебя я буду</p>
  <p>И мне другая не нужна</p>
  <p>Хочу с тобой я жизнь прожить</p>
  <p>И буду я тобою сильно дорожить</p>`,

  `<p>Ты вся прекрасна и красива</p>
  <p>Ты очень сильно мне нужна</p>
  <p>С тобой я рад и весь счастливый</p>
  <p>И не хочу бросать тебя</p>`,

  `<p>У меня нет слов описать к тебе все чувства</p>
  <p>Ты просто зайка сладкая моя,</p>
  <p>Которую люблю безумно</p>
  <p>И буду я любить всегда</p>`
  
];

function closeModal() {
  modal.classList.remove('show');
}

let timeouts = {}, intervals = {};

function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

heartButton.addEventListener('click', function() {
  heart.classList.add('heart-transform');
  setTimeout(() => {heart.remove()}, 600);
  spot.style.display = 'flex';
  setTimeout(() => {
    spot.firstElementChild.style.transform = 'scale(20)';
  }, 600);
  setTimeout(() => {
    document.body.style.background = '#ff3635';
    play.style.display = 'flex';
    spot.remove();
  }, 2000)
});

playButton.addEventListener('click', function() {
  play.remove();
  document.body.classList.add('game');
  document.body.innerHTML += statusHTML;

  for(let i = 0; i < 25; i++) {
    document.body.innerHTML += `<div class="heart-block" style="top: ${randomNumber(0, 100)}%; left:${randomNumber(0, 100)}%"></div>`;
  }

  for(let i = 0; i < bottle.length; i++) {
    document.body.innerHTML += `<img src="img/svg/love-letter.svg" style="left: ${randomNumber(10, 90)}%;" alt="bottle" data-id="${i}" class="bottle">`
  }

  let heartBlock = document.querySelectorAll('.heart-block');
  let bottleAll = document.querySelectorAll('.bottle');

  for(let i = 0; i < heartBlock.length; i++) {

    setTimeout(() => {
      heartBlock[i].style.left = randomNumber(1, 100) + '%';
      heartBlock[i].style.top = randomNumber(1, 100) + '%';
    }, 100);

    intervals[i] = setInterval(() => {
      heartBlock[i].style.left = randomNumber(1, 100) + '%';
      heartBlock[i].style.top = randomNumber(1, 100) + '%';
    }, randomNumber(5000, 10000));

  }
  // love-letter

  for(let i = 0; i < bottleAll.length; i++) {
    timeouts[i] = setTimeout(() => {
      bottleAll[i].style.top = randomNumber(20, 90) + '%';
    }, randomNumber(1111, 2222));
  }
  
});

document.body.addEventListener('click', function(e) {
  if(e.target.classList.contains('bottle')) {

    let text = document.querySelector('#text'),
        modal = document.querySelector('#modal');
        closeButton = document.querySelector('#close');

    text.innerHTML = bottle[e.target.getAttribute('data-id')];
    modal.classList.add('show');
  }
  if(e.target.classList.contains('heart-block')) alert('heart-block');
});