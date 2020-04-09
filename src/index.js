import { cards } from './js/cards';

document.querySelector('.onoffswitch-checkbox').addEventListener('click', () => {
  document.querySelector('#body').classList.toggle('body_play');
  document.querySelector('.menu').classList.toggle('menu-play');
});

document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('menu-show');
});
