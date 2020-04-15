import { cards } from './js/cards';

const containerCard = document.querySelector('.container');
const mainPage = containerCard.innerHTML;
const menu = document.querySelector('.menu');
const audio = new Audio();
const audioEffects = new Audio();
const ratingContainer = document.querySelector('.rating')

const body =document.querySelector('#body');


let game = false;

const checkbox = document.querySelector('#checkboxMode');

// начальная рисовка
checkbox.onchange = () => {
  if (checkbox.checked) {
    menu.classList.remove('menu-play');
    document.querySelector('.header-container').classList.remove('header-container_play');
    document.querySelectorAll('.main-card').forEach((item) => {
      item.classList.remove('main-card_play');
    });
    document.querySelectorAll('.front-side').forEach((item) => {
      const card = item;
      card.style.backgroundSize = 'contain';
      card.style.backgroundPosition = '';
    });
    document.querySelectorAll('.icon-rotate').forEach((item) => {
      item.classList.remove('none');
    });
    document.querySelectorAll('.card-name').forEach((item) => {
      item.classList.remove('none');
    });
    if (document.querySelector('.button-play')){
      document.querySelector('.button-play').classList.add('none');
    }
  } else {
    menu.classList.add('menu-play');
    document.querySelector('.header-container').classList.add('header-container_play');
    document.querySelectorAll('.main-card').forEach((item) => {
      item.classList.add('main-card_play');
    });
    document.querySelectorAll('.front-side').forEach((item) => {
      const card = item;
      card.style.backgroundSize = 'cover';
      card.style.backgroundPosition = '50%';
    });
    document.querySelectorAll('.icon-rotate').forEach((item) => {
      item.classList.add('none');
    });
    document.querySelectorAll('.card-name').forEach((item) => {
      item.classList.add('none');
    });
    if (document.querySelector('.button-play')){
      document.querySelector('.button-play').classList.remove('none');
    }
  }
};


// гамбургер клик
document.querySelector('.hamburger').addEventListener('click', () => {
  menu.classList.toggle('menu-show');
  document.querySelector('.hamburger').classList.toggle('hamburger_active');
});

document.querySelector(('#body')).addEventListener('click', (event) => {
  if (!event.target.classList.contains('hamburger') && !event.target.classList.contains('menu')) {
    menu.classList.remove('menu-show');
    document.querySelector('.hamburger').classList.remove('hamburger_active');
  }
});

// отрисовка карточек
const drawCardsSection = (card, sectionName) => {
  i=0;
  audioSet =[];  
  audioValue =[]; 
  game=false;
  containerCard.innerHTML = '';
  if (checkbox.checked) {
    if (sectionName === 'main') {
      containerCard.innerHTML = mainPage;
    } else {
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
      containerCard.innerHTML += '<div class="button-play"><button class="btn-game">Start Game</button></div>';
      document.querySelector('.button-play').classList.add('none');
    }
  } else if (sectionName === 'main') {
    containerCard.innerHTML = mainPage;
    document.querySelectorAll('.main-card').forEach((item) => {
      item.classList.add('main-card_play');
    });
  } else {
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
    document.querySelectorAll('.front-side').forEach((item) => {
      const cardPlay = item;
      cardPlay.style.backgroundSize = 'cover';
      cardPlay.style.backgroundPosition = '50%';
    });
    document.querySelectorAll('.icon-rotate').forEach((item) => {
      item.classList.add('none');
    });
    document.querySelectorAll('.card-name').forEach((item) => {
      item.classList.add('none');
    });
    containerCard.innerHTML += '<div class="button-play"><button class="btn-game">Start Game</button></div>';
  }
};

let i = 0;
let audioSet =[];  
let audioValue =[]; 


containerCard.addEventListener('click', (event) => {
  const sectionName = event.target.getAttribute('value');
  const card = event.target;


  if (card.classList.contains('main-card')) {
    drawCardsSection(card, sectionName);
  }

  if (checkbox.checked) {
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
  } 
  else {
 
    if (card.classList.contains('btn-game')) { 
      if (!game){
        document.querySelectorAll('.front-side').forEach((item) => {
          const value = item.getAttribute('value');
          audioValue.push(value)     
        });
        audioValue.sort(function() {
          return 0.5 - Math.random(); 
        });
        audioValue.forEach((item) => {
          audioSet.push(`https://wooordhunt.ru/data/sound/word/us/mp3/${item}.mp3`)
        });
        game = true; 
      }
      playAudio(audioSet[i]); 
    }

    if (card.classList.contains('front-side')){ 
      if (game){ 
        let errorCounter = 0;
        if (sectionName===audioValue[i]){ 
          audioEffects.src = './assets/audio/good.mp3'; 
          audioEffects.play() 
          const resultGood = document.createElement('div');
          resultGood.classList.add('result_good')
          ratingContainer.prepend(resultGood);
          i++; 
          card.classList.add('card-right');
          setTimeout(() => { 
            playAudio(audioSet[i])
          }, 2000);
        }
        else {
          audioEffects.src = './assets/audio/bad.mp3'; 
          audioEffects.play() 
          const resultBad = document.createElement('div');
          resultBad.classList.add('result_bad')
          ratingContainer.prepend(resultBad);
          errorCounter+=1;
        }

        if (i===8){
          i=0;
          audioSet =[];  
          audioValue =[]; 
          game=false;
          document.querySelector('.wrapper').classList.add('body_result');
          //body.innerHTML = `<div class="result-game" style="background-image: url(./assets/image/results/success.jpg);"></div>`
          setTimeout(() => { 
            document.querySelector('.wrapper').classList.remove('body_result');
          }, 3000);
          drawCardsSection(card, 'main');
          document.querySelector('.rating').innerHTML='';
        }
      } 
    }
  }
});


const playAudio = (item) => {
  audio.src = item; 
  audio.play() 
}


menu.addEventListener('click', (event) => {
  const sectionName = event.target.getAttribute('value');
  const card = event.target;

  if (card.tagName === 'A') {
    document.querySelectorAll('.menu-item').forEach((item) => {
      item.classList.remove('active-item');
    });
    card.parentElement.classList.add('active-item');
    menu.classList.toggle('menu-show');
    document.querySelector('.hamburger').classList.toggle('hamburger_active');
    drawCardsSection(card, sectionName);
  }

  if (checkbox.checked) {
    if (card.classList.contains('front-side') && !card.classList.contains('rotate')) {
      audio.src = `https://wooordhunt.ru/data/sound/word/us/mp3/${sectionName}.mp3`;
      audio.play();
    }
    if (card.classList.contains('icon-rotate')) {
      card.parentElement.classList.add('translate');
      if (card.parentElement.className === 'section-card translate') {
        card.parentElement.onmouseleave = () => card.parentElement.classList.remove('translate');
      }
    }
  } 
  else {

    if (card.classList.contains('btn-game')) { 
      if (!game){
        document.querySelectorAll('.front-side').forEach((item) => {
          const value = item.getAttribute('value');
          audioValue.push(value)     
        });
        audioValue.sort(function() {
          return 0.5 - Math.random(); 
        });
        audioValue.forEach((item) => {
          audioSet.push(`https://wooordhunt.ru/data/sound/word/us/mp3/${item}.mp3`)
        });
        game = true; 
      }
      playAudio(audioSet[i]); 
    }

    if (card.classList.contains('front-side')){ 
      if (game){ 
        let errorCounter = 0;
        if (sectionName===audioValue[i]){ 
          audioEffects.src = './assets/audio/good.mp3'; 
          audioEffects.play() 
          const resultGood = document.createElement('div');
          resultGood.classList.add('result_good')
          ratingContainer.prepend(resultGood);
          i++; 
          card.classList.add('card-right');
          setTimeout(() => { 
            playAudio(audioSet[i])
          }, 2000);
        }
        else {
          audioEffects.src = './assets/audio/bad.mp3'; 
          audioEffects.play() 
          const resultBad = document.createElement('div');
          resultBad.classList.add('result_bad')
          ratingContainer.prepend(resultBad);
          errorCounter+=1;
        }

        if (i===8){
          i=0;
          audioSet =[];  
          audioValue =[]; 
          game=false;
          document.querySelector('.wrapper').classList.add('body_result');
          //body.innerHTML = `<div class="result-game" style="background-image: url(./assets/image/results/success.jpg);"></div>`
          setTimeout(() => { 
            document.querySelector('.wrapper').classList.remove('body_result');
          }, 3000);
          drawCardsSection(card, 'main');
          document.querySelector('.rating').innerHTML='';
        }
      } 
    }
  }
});

