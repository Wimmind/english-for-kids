import { cards } from './js/cards';

const containerCard = document.querySelector('.container');
const menu = document.querySelector('.menu');
window.onload = () => {
  let mode = 'train';

  const mainPage = document.querySelector('.container').innerHTML;

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
    if (mode ==='train') {
      mode = 'play';
    }
    else {
      mode = 'train';
    }
    localStorage.setItem('mode', mode);
  });

  document.querySelector('.hamburger').addEventListener('click', () => {
    menu.classList.toggle('menu-show');
  });

  containerCard.addEventListener('click',(event)=>{
    menu.style.left='-340px';
    if (event.target.classList.contains('main-card')){
      containerCard.innerHTML ='';
      let sectionName = event.target.getAttribute('value');
      localStorage.setItem('sectionName', sectionName);
      let section;
      for (let i = 0;i<cards[0].length; i += 1){
        if (cards[0][i] === event.target.getAttribute('value')){
          section = i+1;
        }
      }
      cards[section].forEach((card) => {
        containerCard.innerHTML+=`<a href="#" class="section-card"><img src="./assets/image/cards/${card.image}" alt=""><h2>${card.word}</h2></a>`;
      });

    }
  });

  menu.addEventListener('click',(event)=>{
    menu.classList.toggle('menu-show');
    if (event.target.tagName === 'A'){
      menu.querySelectorAll('li').forEach(item =>{item.classList.remove('active-item');});
      event.target.parentNode.classList.add('active');

      containerCard.innerHTML ='';
      let sectionName = event.target.getAttribute('value');
      localStorage.setItem('sectionName', sectionName);
      let section;
      for (let i = 0;i<cards[0].length; i += 1){
        if (cards[0][i] === event.target.getAttribute('value')){
          section = i+1;
        }
      }
      cards[section].forEach((card) => {
        containerCard.innerHTML+=`<a href="#" class="section-card"><img src="./assets/image/cards/${card.image}" alt=""><h2>${card.word}</h2></a>`;
      });

    }
  });




}