function init(count) {

  let minPos = 10, maxPos = 99, minSize = 10, maxSize = 120, playerSize = 30;

  if(document.body.clientWidth < 1470) maxSize = 100, playerSize = 25;
  if(document.body.clientWidth < 1170) maxSize = 90, playerSize = 20;
  if(document.body.clientWidth < 1070) minSize = 7, maxSize = 80;
  if(document.body.clientWidth < 950) minSize = 5, maxSize = 75;
  

  console.log(document.body.clientWidth);
  
  document.body.innerHTML += `<div class="player" style="width: ${playerSize}px; height: ${playerSize}px; top: 70px; left: 70px;"></div>`;

  for(let i = 0; i < count; i++) {
    let size = randomNum(minSize, maxSize);
    document.body.innerHTML += `<div class="enemy" style="top: ${randomNum(minPos, maxPos)}vh; left: ${randomNum(minPos, maxPos)}vw; width: ${size}px; height: ${size}px;"></div>`;
  }
}

init(50);

let potionsImg = ['speed', 'invulnerability', 'invulnerability', 'stop_process', 'size'];

potionsImg.forEach(element => {
  document.body.innerHTML += `<img src="mediafiles/svg/${element}.svg" class="potion ${element}" alt="Скорость" style="top: ${randomNum(1, 99)}vh; left: ${randomNum(1, 99)}vw;">`;
});

let player = document.querySelector('.player'),
    enemy = document.querySelectorAll('.enemy'),
    potion = document.querySelectorAll('.potion'),
    gameStatus = document.querySelector('.game-status'),
    content = document.querySelector('.content');

let enemyCount = enemy.length;

let playerSettings = {
  x : player.offsetLeft,
  y : player.offsetTop,
  step: 5,
  size: 9,
  invulnerability: false,
  clientData: player.getBoundingClientRect()
}

let intervals = {};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function startEnemyMovement() {
  for(let i = 0; i < enemy.length; i ++) {
    enemy[i].style.left = randomNum(1, 100) + 'vw';
    enemy[i].style.top = randomNum(1, 100) + 'vh';
    enemyMovement(enemy[i], i);
  }
}

setTimeout(startEnemyMovement, 100);

function collision() {

  let width = playerSettings.clientData.width;

  for(let i = 0; i < enemy.length; i ++) {
    if( playerSettings.clientData.top + width > enemy[i].getBoundingClientRect().top && playerSettings.clientData.bottom - width < enemy[i].getBoundingClientRect().bottom && playerSettings.clientData.left + width > enemy[i].getBoundingClientRect().left && playerSettings.clientData.right - width < enemy[i].getBoundingClientRect().right) {

      if(width > enemy[i].getBoundingClientRect().width) {

        if(playerSettings.clientData.width < 150) player.style.width = player.style.height = (width + enemy[i].getBoundingClientRect().width / playerSettings.size) + 'px';
        clearInterval(intervals[i]);
        enemy[i].remove();
        enemyCount--;
        if(enemyCount <= 0) {
          content.textContent = 'Победа!!!'
          gameStatus.classList.add('show');
        }
      }
      else {
        if(!playerSettings.invulnerability) {
          content.textContent = 'Вы проиграли!'
          gameStatus.classList.add('show');
          setTimeout(() => {location.reload()}, 1000);
        }
      }

    }
  }

  for(let i = 0; i < potion.length; i ++) {
    if( playerSettings.clientData.top + width > potion[i].getBoundingClientRect().top && playerSettings.clientData.bottom - width < potion[i].getBoundingClientRect().bottom && playerSettings.clientData.left + width > potion[i].getBoundingClientRect().left && playerSettings.clientData.right - width < potion[i].getBoundingClientRect().right) {

      if(potion[i].classList.contains('speed')) {
        playerSettings.step = 15;
        setTimeout(() => {
          playerSettings.step = 5;
        }, 10000);
      }

      if(potion[i].classList.contains('invulnerability')) {
        playerSettings.invulnerability = true;
        setTimeout(() => {
          playerSettings.invulnerability = false;
        }, 10000);
      }

      if(potion[i].classList.contains('size')) {
        player.style.width = player.style.height = (playerSettings.clientData.width / 2) + 'px';
      }

      if(potion[i].classList.contains('stop_process')) {
        playerSettings.size = 0;
        setTimeout(() => {
          playerSettings.size = 7;
        }, 20000);
      }


      potion[i].remove();

    }
  }

}

function enemyMovement(element, index) {

  intervals[index] = setInterval(() => {
    element.style.left = randomNum(1, 100) + 'vw';
    element.style.top = randomNum(1, 100) + 'vh';
  }, randomNum(5000, 10000));

}

function playerMovement(width, step, e) {

  if(e.key == 'ArrowRight') playerSettings.x += playerSettings.x + width < document.body.getBoundingClientRect().right ? step : 0;
  if(e.key == 'ArrowLeft') playerSettings.x -= playerSettings.x > 0 ? step : 0;
  if(e.key == 'ArrowUp') playerSettings.y -= playerSettings.y > 0 ? step : 0;
  if(e.key == 'ArrowDown') playerSettings.y += playerSettings.y + width < document.body.getBoundingClientRect().height ? step : 0;

  player.style.left = playerSettings.x + 'px';
  player.style.top = playerSettings.y + 'px';

  playerSettings.clientData = player.getBoundingClientRect();

}

setInterval(collision, 1000 / 60);

let movement = 0,
    status = true;

document.addEventListener('keydown', function(e) {

  let width = playerSettings.clientData.width,
  step = playerSettings.step;

  if(status) movement = setInterval(playerMovement.bind(null, width, step, e), 1000 / 60);
  status = false;
  
});

document.addEventListener('keyup', function(e) {

  clearInterval(movement);
  status = true;
  
});