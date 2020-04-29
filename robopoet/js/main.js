let generator = document.querySelector('#generator'),
    update = document.querySelector('#update'),
    vkBanner = document.querySelector('#vk-banner'),
    close = document.querySelector('#close'),
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

        if(update.getAttribute('disabled') != null) update.removeAttribute('disabled');
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

    } else update.setAttribute('disabled', 'true');
}

generator.addEventListener('click', getGeneratorString);

update.addEventListener('click', updateData);

content.addEventListener('input', () => {
    if(update.getAttribute('disabled') == null) update.setAttribute('disabled', 'true');
})


setTimeout(() => {
    vkBanner.classList.add('show')
}, 20000);

close.onclick = () => {
    vkBanner.classList.remove('show');
}