let generator = document.querySelector('#generator'),
    update = document.querySelector('#update'),
    vkBanner = document.querySelector('#vk-banner'),
    close = document.querySelector('#close'),
    apply = document.querySelector('#apply'),
    choiceBlock = document.querySelector('#choice-block'),
    audio = document.querySelector('#audio'),
    audioPlay = document.querySelector('#audio-play'),
    content = document.querySelector('.content');

let data = {
    prompt: '',
    length: 30,
    num_samples: 1
}

function getGeneratorString(){

    data.prompt = content.textContent;

    sendData(data).then(data => {
        let span = document.createElement('span');
        content.innerHTML += `<span class="span-content">${data.replies}</span>`;
        content.innerHTML += '&nbsp';

        if(update.disabled != false) update.disabled = false;
    });
}

function sendData(data){

    return fetch('https://models.dobro.ai/gpt2/medium/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
    .then(data => data.json())
}

function updateData(){
    let spanContent = document.querySelectorAll('.span-content');
        span = spanContent[spanContent.length - 1];

    if(spanContent.length > 0){

        span.textContent = '';

        data.prompt = content.textContent;

        sendData(data).then(data => {
            span.textContent = data.replies;
        });

    } else update.disabled = true;
}

generator.addEventListener('click', getGeneratorString);

update.addEventListener('click', updateData);

content.addEventListener('input', () => {
    if(update.disabled == false) update.disabled = true;

    if(content.textContent != '') audioPlay.disabled = false;
    else audioPlay.disabled = true;
});

audioPlay.addEventListener('click', () => {

    choiceBlock.classList.add('show');

});

apply.addEventListener('click', () => {
    let inputRadio = document.querySelectorAll('.input-radio');
    let checked = false;

    inputRadio.forEach( element => {
        if(element.checked) {

            checked = true;

            audio.src = `https://apihost.ru/php/whatsapp.php?text=${content.textContent}&format=mp3&lang=ru-RU&speed=0.9&emotion=neutral&speaker=${element.value}`;

            audio.onloadeddata = function() {
                audio.play();
            }

            choiceBlock.classList.remove('show');

            chips('success', 'Подождите немного');

            return;
        }
    });

    if(!checked) chips('error', 'Вы должны выбрать один из вариантов');
});

setTimeout(() => {
    vkBanner.classList.add('show')
}, 20000);

close.onclick = () => {
    vkBanner.classList.remove('show');
}