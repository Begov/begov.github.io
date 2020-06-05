let vote = document.querySelector('#vote'),
    lang = document.querySelector('#lang'),
    emotion = document.querySelector('#emotion'),
    speed = document.querySelector('#speed'),
    download = document.querySelector('#download'),
    audio = document.querySelector('#audio'),
    pay = document.querySelector('.pay'),
    recaptcha = document.querySelector('#g-recaptcha-response'),
    play = document.querySelector('#play'),
    content = document.querySelector('.content');


function strip_tags(str) {
  return str.replace(/<\/?[^>]+>/g, '');
}

fetch('https://splatform.site/')
  .then(data => data.json())
  .then(result => {
    result.data.forEach(element => {

      let username = strip_tags(element['username'].toString());
          amount = strip_tags(element['amount'].toString()),
          currency = strip_tags(element['currency'].toString()),
          message = strip_tags(element['message'].toString());

      pay.innerHTML += `<div class="pay-item">
        <div class="username"><b>${username}</b>: <span class="sum">${amount} ${currency}</span></div>
        <div class="message">${message}</div>
      </div>`;
    });
  });


let params = {
  text: content.textContent.trim(),
  lang: 'ru-RU',
  speed: '1.0',
  emotion: 'neutral',
  vote: 'ermilov'
}
  
let getAudio = `http://splatform.site/getAudioFile.php?audio=1&text=%D0%94%D0%BB%D1%8F%20%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D0%B0%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B%20%D0%B2%D0%B2%D0%B5%D0%B4%D0%B8%D1%82%D0%B5%20%D0%92%D0%B0%D1%88%20%D1%82%D0%B5%D0%BA%D1%81%D1%82%20%D0%B2%20%D1%8D%D1%82%D0%BE%20%D0%BF%D0%BE%D0%BB%D0%B5.%20%D0%9F%D0%BE%D0%B4%D0%B1%D0%B5%D1%80%D0%B8%D1%82%D0%B5%20%D0%BF%D0%BE%D0%B4%D1%85%D0%BE%D0%B4%D1%8F%D1%89%D0%B8%D0%B9%20%D0%B3%D0%BE%D0%BB%D0%BE%D1%81%20%D0%B8%20%D1%81%D0%BA%D0%BE%D1%80%D0%BE%D1%81%D1%82%D1%8C.%20%D0%A7%D1%82%D0%BE%D0%B1%D1%8B%20%D0%B4%D0%BE%D0%B1%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%D0%B8%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%B3%D0%BE%20%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%B0%20%D0%BF%D0%BE%D0%B8%D0%B3%D1%80%D0%B0%D0%B9%D1%82%D0%B5%20%D0%B7%D0%BD%D0%B0%D0%BA%D0%B0%D0%BC%D0%B8%20%D0%BF%D1%80%D0%B5%D0%BF%D0%B8%D0%BD%D0%B0%D0%BD%D0%B8%D1%8F.%20%D0%92%D1%8B%20%D1%82%D0%B0%D0%BA%20%D0%B6%D0%B5%20%D0%BC%D0%BE%D0%B6%D0%B5%D1%82%D0%B5%20%D0%BC%D0%B5%D0%BD%D1%8F%D1%82%D1%8C%20%D1%83%D0%B4%D0%B0%D1%80%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B7%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%20%D0%BF%D0%BB%D1%8E%D1%81.%20%D0%9D%D0%B0%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%3A%20%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B5%D0%B5%2C%20%D0%B8%D0%BB%D0%B8%20%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B5%2B%D0%B5.%20%D0%92%D1%8B%20%D0%BC%D0%BE%D0%B6%D0%B5%D1%82%D0%B5%20%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C%20%D0%BF%D0%B0%D1%83%D0%B7%D1%8B%20%D0%BF%D1%80%D0%B8%20%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D0%B8%20%D0%BF%D1%83%D0%BD%D0%BA%D1%82%D0%B8%D1%80%D0%B0.%20%D0%9D%D0%B0%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%3A%20-%20-%20-%20-%20-%20-%20-%20-%20-%20-%20%D1%8D%D1%82%D0%BE%20%D0%B1%D1%8B%D0%BB%D0%B0%20%D0%BF%D0%B0%D1%83%D0%B7%D0%B0.%20%D0%9A%D0%BE%D0%BB%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE%20%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%BE%D0%B2%20%D0%BE%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D0%BD%D0%BE.&lang=ru-RU&speed=1.0&emotion=neutral&speaker=ermilov`;


function setData() {

  chips('success', 'Подождите пару секунд');

  return new Promise((resolve, reject) => {
    
    fetch('http://splatform.site/getAudioFile.php/', {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `verify=1&g-recaptcha-response=${recaptcha.value}`
  })
  .then(data => data.text())
  .then(data => {

    console.log(data);
    
    getKey();

    params.text = content.textContent.trim();

    for(let i = 0; i < vote.options.length; i++) {
      if(vote.options[i].selected) {
        params.vote = vote.options[i].value;
        break;
      }
    }
  
    for(let i = 0; i < lang.options.length; i++) {
      if(lang.options[i].selected) {
        params.lang = lang.options[i].value;
        break;
      }
    }
  
    for(let i = 0; i < emotion.options.length; i++) {
      if(emotion.options[i].selected) {
        params.emotion = emotion.options[i].value;
        break;
      }
    }
  
    for(let i = 0; i < speed.options.length; i++) {
      if(speed.options[i].selected) {
        params.speed = speed.options[i].value;
        break;
      }
    }

    getAudio = `http://splatform.site/getAudioFile.php?audio=1&secret=${data}&text=${encodeURIComponent(params.text)}&lang=${params.lang}&speed=${params.speed}&emotion=${params.emotion}&speaker=${params.vote}`;

    resolve(getAudio);

  });

  }) 

}

play.addEventListener('click', () => {
  
  setData().then(data => {
    
    audio.src = getAudio;

    audio.onloadeddata = () => {
      audio.play();
    }

  });

});

download.addEventListener('click', () => {

  setData().then(data => {
    
    fetch(getAudio)
    .then(resp => resp.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'audio.mp3';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    })

  });

});