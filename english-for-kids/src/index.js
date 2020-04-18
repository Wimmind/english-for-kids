import { cards } from './js/cards';

const containerCard = document.querySelector('.container');
const mainPage = containerCard.innerHTML;
const menu = document.querySelector('.menu');


const audio = new Audio();
const audioEffects = new Audio();
const audioEnd = new Audio();

const hamburger = document.querySelector('.hamburger');

const ratingContainer = document.querySelector('.rating');

const body = document.querySelector('#body');

let game = false;
let i = 0;
let audioSet = [];
let audioValue = [];
let errorCounter = 0;


const checkbox = document.querySelector('#checkboxMode');

// начальная рисовка
checkbox.onchange = () => {
  document.querySelector('.rating').innerHTML = '';
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
      card.classList.remove('card-right');
    });
    document.querySelectorAll('.icon-rotate').forEach((item) => {
      item.classList.remove('none');
    });
    document.querySelectorAll('.card-name').forEach((item) => {
      item.classList.remove('none');
    });
    if (document.querySelector('.button-play')) {
      document.querySelector('.button-play').classList.add('none');
    }
    if (document.querySelector('.btn-game')) {
      document.querySelector('.btn-game').classList.remove('btn-game_pressed');
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
    if (document.querySelector('.button-play')) {
      document.querySelector('.button-play').classList.remove('none');
    }
  }
};


// гамбургер клик
hamburger.addEventListener('click', () => {
  menu.classList.toggle('menu-show');
  hamburger.classList.toggle('hamburger_active');
});

body.addEventListener('click', (event) => {
  if (!event.target.classList.contains('hamburger') && !event.target.classList.contains('menu')) {
    menu.classList.remove('menu-show');
    hamburger.classList.remove('hamburger_active');
  }
});


const playAudio = (item) => {
  audio.src = item;
  audio.play();
};

// отрисовка карточек
const drawCards = (card, sectionName) => {
  localStorage.setItem('sectionName', sectionName);
  let section;
  for (let j = 0; j < cards[0].length; j += 1) {
    if (cards[0][j] === card.getAttribute('value')) {
      section = j + 1;
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
};

// отрисовка карточек с текущим режимом
const drawCardsSection = (card, sectionName) => {
  i = 0;
  audioSet = [];
  audioValue = [];
  game = false;
  document.querySelector('.rating').innerHTML = '';
  containerCard.innerHTML = '';
  if (checkbox.checked) {
    if (sectionName === 'main') {
      containerCard.innerHTML = mainPage;
    } else {
      drawCards(card, sectionName);
      document.querySelector('.button-play').classList.add('none');
    }
  } else if (sectionName === 'main') {
    containerCard.innerHTML = mainPage;
    document.querySelectorAll('.main-card').forEach((item) => {
      item.classList.add('main-card_play');
    });
  } else {
    drawCards(card, sectionName);
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
  }
};

// запустить игру
const runGame = () => {
  document.querySelector('.btn-game').classList.add('btn-game_pressed');
  if (!game) {
    document.querySelectorAll('.front-side').forEach((item) => {
      const value = item.getAttribute('value');
      audioValue.push(value);
    });
    audioValue.sort(() => 0.5 - Math.random());
    audioValue.forEach((item) => {
      audioSet.push(`https://wooordhunt.ru/data/sound/word/us/mp3/${item}.mp3`);
    });
    game = true;
  }
  playAudio(audioSet[i]);
};


//
const playAudioCardAndEndGame = (card, sectionName) => {
  if (sectionName === audioValue[i]) {
    // музыка
    audioEffects.src = './assets/audio/good.mp3';
    audioEffects.play();
    // добавить звездочку
    const resultGood = document.createElement('div');
    resultGood.classList.add('result_good');
    ratingContainer.prepend(resultGood);
    i += 1;
    if (i === 8) {
      if (errorCounter === 0) {
        setTimeout(() => {
          document.querySelector('.header-container').classList.add('header-container_none');
          document.querySelector('.rating').innerHTML = '';
          containerCard.innerHTML = '';
          body.classList.add('result-success');
          audioEnd.src = './assets/audio/won.mp3';
          audioEnd.play();
        }, 1000);
      } else {
        setTimeout(() => {
          document.querySelector('.header-container').classList.add('header-container_none');
          document.querySelector('.rating').innerHTML = '';
          containerCard.innerHTML = `Колличество допущенных ошибок:${errorCounter}`;
          body.classList.add('result-fail');
          audioEnd.src = './assets/audio/fail.mp3';
          audioEnd.play();
        }, 1000);
      }
      i = 0;
      audioSet = [];
      audioValue = [];
      game = false;
      setTimeout(() => {
        body.classList.remove('result-fail');
        body.classList.remove('result-success');
        document.querySelector('.header-container').classList.remove('header-container_none');
        drawCardsSection(card, 'main');
        errorCounter = 0;
      }, 5000);
    }
    card.classList.add('card-right');
    setTimeout(() => {
      playAudio(audioSet[i]);
    }, 1000);
  } else if (!card.classList.contains('card-right')) {
    audioEffects.src = './assets/audio/bad.mp3';
    audioEffects.play();
    const resultBad = document.createElement('div');
    resultBad.classList.add('result_bad');
    ratingContainer.prepend(resultBad);
    errorCounter += 1;
  }
};

// выбрал орисовку карт по контейнеру
containerCard.addEventListener('click', (event) => {
  const sectionName = event.target.getAttribute('value');
  const card = event.target;

  // отрисовка карточек на главной странице
  if (card.classList.contains('main-card')) {
    // подчеркиваем активный элемент в меню
    document.querySelectorAll('.menu-item').forEach((item) => {
      item.classList.remove('active-item');
    });
    document.querySelectorAll('.menu-item').forEach((item) => {
      if (item.children[0].getAttribute('value') === sectionName) {
        item.classList.add('active-item');
      }
    });
    drawCardsSection(card, sectionName);
  }
  // если режим TRAIN
  if (checkbox.checked) {
    if (card.classList.contains('front-side') && !card.classList.contains('rotate')) {
      audio.src = `https://wooordhunt.ru/data/sound/word/us/mp3/${sectionName}.mp3`;
      audio.play();
    }
    if (card.classList.contains('icon-rotate')) {
      card.offsetParent.classList.add('translate');
      if (card.offsetParent.className === 'section-card translate') {
        card.offsetParent.onmouseleave = () => {
          document.querySelectorAll('.section-card').forEach((item) => {
            if (item.classList.contains('translate')) {
              card.offsetParent.classList.remove('translate');
            }
          });
        };
      }
    }
  }

  // если режим PLAY
  else {
    if (card.classList.contains('btn-game')) {
      runGame();
    }
    if (card.classList.contains('front-side')) {
      if (game) {
        playAudioCardAndEndGame(card, sectionName);
      }
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
    hamburger.classList.toggle('hamburger_active');
    errorCounter = 0;
    drawCardsSection(card, sectionName);
  }
  // если режим TRAIN
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

  // если режим PLAY
  else {
    if (card.classList.contains('btn-game')) {
      runGame();
    }
    if (card.classList.contains('front-side')) {
      if (game) {
        playAudioCardAndEndGame(card, sectionName);
      }
    }
  }
});
