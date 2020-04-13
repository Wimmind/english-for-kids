import { cards } from './js/cards';

const containerCard = document.querySelector('.container');
// const mainPage = containerCard.innerHTML;
const menu = document.querySelector('.menu');

const audio = document.querySelector('audio');

let mode = 'train';


document.querySelector(('#body')).addEventListener('click', (event) => {
  if (!event.target.classList.contains('hamburger') && !event.target.classList.contains('menu')) {
    menu.classList.remove('menu-show');
  }
});

document.querySelector('.onoffswitch-checkbox').addEventListener('click', () => {
  document.querySelector('#body').classList.toggle('body_play');
  menu.classList.toggle('menu-play');
  document.querySelector('.header-container').classList.toggle('header-container_play');
  document.querySelectorAll('.main-card').forEach((card) => {
    card.classList.toggle('main-card_play');
  });
  document.querySelectorAll('.section-card').forEach((card) => {
    card.classList.toggle('section-card_play');
  });
  if (mode === 'train') {
    mode = 'play';
  } else {
    mode = 'train';
  }
  localStorage.setItem('mode', mode);
});

document.querySelector('.hamburger').addEventListener('click', () => {
  menu.classList.toggle('menu-show');
  document.querySelector('.hamburger').classList.toggle('hamburger_active');
  document.querySelector('.hamburger__line').classList.toggle('hamburger__line_active')

});


const drawCardsSection = (card, sectionName) => {
  containerCard.innerHTML = '';
  localStorage.setItem('sectionName', sectionName);
  let section;
  for (let i = 0; i < cards[0].length; i += 1) {
    if (cards[0][i] === card.getAttribute('value')) {
      section = i + 1;
    }
  }
  cards[section].forEach((newCard) => {
    containerCard.innerHTML += `
    <div class='section-card'> 
    <div class='front-side' value='${newCard.word}' style="background-image: url(./assets/image/cards/${newCard.image});"> <span class='card-name '> ${newCard.word} </span></div> 
    <div class='back-side' style="background-image: url(./assets/image/cards/${newCard.image});"> <span class='card-name '> ${newCard.translation} </span></div> 
    <div class='icon-rotate'> </div>
    </div> 
    `;
  });
};



containerCard.addEventListener('click', (event) => {
  const sectionName = event.target.getAttribute('value');
  const card = event.target;
  if (card.classList.contains('main-card')) {
    drawCardsSection(card, sectionName);
  }
  if (card.classList.contains('front-side') && !card.classList.contains('rotate')) {
    audio.src = `https://wooordhunt.ru/data/sound/word/us/mp3/${sectionName}.mp3`;
    audio.play();
  }
  if (card.classList.contains('icon-rotate')) {
    card.offsetParent.classList.add('translate');
    if (card.offsetParent.className === 'section-card translate') {
      card.offsetParent.onmouseleave = () => card.offsetParent.classList.remove('translate');
    }
  }
});

menu.addEventListener('click', (event) => {
  const sectionName = event.target.getAttribute('value');
  const card = event.target;
  if (card.tagName === 'A') {
    document.querySelectorAll('.menu-item').forEach((item) => {
      item.classList.remove('active-item');
    });
    card.parentElement.classList.add('active-item');
    menu.classList.toggle('menu-show');
    drawCardsSection(card, sectionName);
  }
  if (card.classList.contains('front-side') && !card.classList.contains('rotate')) {
    audio.src = `https://wooordhunt.ru/data/sound/word/us/mp3/${sectionName}.mp3`;
    audio.play();
  }
  if (card.classList.contains('icon-rotate')) {
    card.offsetParent.classList.add('translate');
    if (card.offsetParent.className === 'section-card translate') {
      card.offsetParent.onmouseleave = () => card.offsetParent.classList.remove('translate');
    }
  }
});
