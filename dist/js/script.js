const hamburger = document.querySelector('.modal__container'),
  menu = document.querySelector('.modal__container'),
  closeElem = document.querySelector('.modal-close-button');

hamburger.addEventListener('click', () => {

  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {

  menu.classList.remove('active');
});

const counters = document.querySelectorAll(''),
  lines = document.querySelectorAll('');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
