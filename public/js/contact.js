const success = document.querySelector('.success');
const form = document.querySelector('form');
const submit = document.querySelector('form button');

const transform = document.querySelectorAll('.transform-0');

setTimeout(() => {
  transform.forEach(element => {
    element.classList.add('transform-show');
  });
}, 0);

submit.addEventListener('click', function(e) {

  e.preventDefault();
  let message = '';
  let sendMessage = true;

  [...form.elements].forEach(elem => {
    if(elem.nodeName != 'BUTTON') {
      if(!elem.value.trim()) elem.classList.add('error');
      else {
        elem.classList.remove('error');
        message += `${elem.name}: ${elem.value} \n`;
      }
    }
  });

  [...form.elements].forEach(elem => {
    if(elem.classList.contains('error')) {
      sendMessage = false;
      message = '';
    }
  });

  if(sendMessage) {
    fetch(encodeURI(`https://api.telegram.org/bot5467005733:AAFsGUoPRjNmZf_qNzPqEr4H1GE9nu53Wug/sendMessage?chat_id=2021259438&text=${message}`))
    .then(data => data.json())
    .then(data => {
      success.classList.add('show');
    });
  }

});