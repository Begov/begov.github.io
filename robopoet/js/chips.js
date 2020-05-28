function chips(type, text) {

  let div = document.createElement('div');
  div.classList.add('chips');
  div.classList.add(type);
  div.textContent = text;
  document.body.append(div);
  setTimeout(() => div.classList.add('showChips') , 200);
  setTimeout(() => div.remove() , 2000);

}