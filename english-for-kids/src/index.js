import cards from './js/cards';

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

let cardArrayZero = [];
let cardArray = [];

if (localStorage.getItem('cardArray')!==undefined && localStorage.getItem('cardArray')!==null){
  cardArray = JSON.parse(localStorage.getItem('cardArray'));
}

else {
  for (let i = 1; i < 9; i += 1) {
    cards[i].forEach((item) => {
      cardArray.push(item);
      cardArrayZero.push(item);
    });
  }
}




const noteTrainClick = (sectionName) => {
  cardArray.forEach((item) => {
    if (item.word === sectionName) {
      item.trainClick += 1;
    }
  });
};

const noteCorrectAnswer = (sectionName) => {
  cardArray.forEach((item) => {
    if (item.word === sectionName) {
      item.correctAnswer += 1;
    }
  });
};

const noteErrorAnswer = (sectionName) => {
  cardArray.forEach((item) => {
    if (item.word === sectionName) {
      item.errorAnswer += 1;
    }
  });
};

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

// звуки слов
const playAudioWord = (item) => {
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
  document.querySelectorAll('.menu-item').forEach((item) => {
    item.classList.remove('active-item');
  });
  document.querySelectorAll('.menu-item').forEach((item) => {
    if (item.children[0].getAttribute('value') === sectionName) {
      item.classList.add('active-item');
    }
  });
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
  playAudioWord(audioSet[i]);
};

const removeResultStyles = (card) => {
  document.querySelector('.header-container').classList.remove('header-container_none');
  drawCardsSection(card, 'main');
  errorCounter = 0;
  i = 0;
};

const addResultStyles = (song) => {
  document.querySelector('.header-container').classList.add('header-container_none');
  ratingContainer.innerHTML = '';
  if (errorCounter > 0) {
    containerCard.innerHTML = `Колличество допущенных ошибок:${errorCounter}`;
  } else {
    containerCard.innerHTML = '';
  }
  audioEnd.src = song;
  audioEnd.play();
};

// добавить звездочку
const addStar = (star) => {
  const resultGood = document.createElement('div');
  resultGood.classList.add(`${star}`);
  ratingContainer.prepend(resultGood);
};

// включать аудио во время игры и вывод результатов
const playAudioCardAndEndGame = (card, sectionName) => {
  if (sectionName === audioValue[i]) {
    noteCorrectAnswer(sectionName);
    // музыка
    audioEffects.src = './assets/audio/good.mp3';
    audioEffects.play();
    // добавить звездочку
    addStar('result_good');
    i += 1;
    if (i === 8) {
      if (errorCounter === 0) {
        setTimeout(() => {
          body.classList.add('result-success');
          addResultStyles('./assets/audio/won.mp3');
        }, 1000);
        setTimeout(() => {
          body.classList.remove('result-success');
          removeResultStyles(card);
        }, 5000);
      } else {
        setTimeout(() => {
          body.classList.add('result-fail');
          addResultStyles('./assets/audio/fail.mp3');
        }, 1000);
        setTimeout(() => {
          body.classList.remove('result-fail');
          removeResultStyles(card);
        }, 5000);
      }
      audioSet = [];
      audioValue = [];
      game = false;
    }
    card.classList.add('card-right');
    if (i < 8) {
      setTimeout(() => {
        playAudioWord(audioSet[i]);
      }, 1000);
    }
  } else if (!card.classList.contains('card-right')) {
    noteErrorAnswer(sectionName);
    audioEffects.src = './assets/audio/bad.mp3';
    audioEffects.play();
    addStar('result_bad');
    errorCounter += 1;
  }
};


containerCard.addEventListener('click', (event) => {
  const sectionName = event.target.getAttribute('value');
  const card = event.target;

  if (card.classList.contains('main-card')) {
    drawCardsSection(card, sectionName);
  }

  if (checkbox.checked) {
    if (card.classList.contains('front-side') && !card.classList.contains('rotate')) {
      playAudioWord(`https://wooordhunt.ru/data/sound/word/us/mp3/${sectionName}.mp3`);
      noteTrainClick(sectionName);
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

// выбрал орисовку карт по меню
menu.addEventListener('click', (event) => {
  const sectionName = event.target.getAttribute('value');
  const card = event.target;

  if (card.parentNode.classList.contains('menu-item_score')) {
    showScore();
  } else {
    if (card.tagName === 'A') {
      menu.classList.toggle('menu-show');
      hamburger.classList.toggle('hamburger_active');
      errorCounter = 0;
      drawCardsSection(card, sectionName);
    }
    // если режим TRAIN
    if (checkbox.checked) {
      if (card.classList.contains('front-side') && !card.classList.contains('rotate')) {
        playAudioWord(`https://wooordhunt.ru/data/sound/word/us/mp3/${sectionName}.mp3`);
      }
      if (card.classList.contains('icon-rotate')) {
        card.offsetParent.classList.add('translate');
        document.querySelector('.icon-rotate').classList.add('none');
        if (card.offsetParent.className === 'section-card translate') {
          card.offsetParent.onmouseleave = () => {
            document.querySelectorAll('.section-card').forEach((item) => {
              if (item.classList.contains('translate')) {
                card.offsetParent.classList.remove('translate');
                document.querySelector('.icon-rotate').classList.remove('none');
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
  }
});

const showScore = () => {
  containerCard.innerHTML = '';
  containerCard.innerHTML = `<table class="table-statistics" id="grid">
  <thead><tr>
  <th data-type="string">word</th>
  <th data-type="string">translate</th>
  <th data-type="number">train clicks</th>
  <th data-type="number">correct answer</th>
  <th data-type="number">error answer</th><th>% errors</th>
  </tr></thead>
  <tbody></tbody>
  </table>`;

  cardArray.forEach((item) => {
    let error = (item.correctAnswer * 100 / (item.correctAnswer + item.errorAnswer)).toFixed(2);
    if (isNaN(error)) {
      error = '0.00';
    }
    document.querySelector('.table-statistics tbody').innerHTML += `<tr>
    <td>${item.word}</td>
    <td>${item.translation}</td>
    <td>${item.trainClick}</td>
    <td>${item.correctAnswer}</td>
    <td>${item.errorAnswer}</td>
    <td>${error}%</td>
    </tr>`;
  });

  let rowsArray = Array.from(tbody.rows);
  let rowsArrayOriginal = rowsArray;

  document.querySelector('#grid').addEventListener('click', (e)=>{
    if (e.target.tagName != 'TH') return;
    let th = e.target;
    let sort = false
    sortGrid(th.cellIndex, th.dataset.type,sort);
  });
  
  function sortGrid(colNum, type,sort) {
    let tbody = grid.querySelector('tbody');
    let compare;
    
    switch (type) {
      case 'number':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
        };
        break;
      case 'string':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
        };
        break;
    }
    rowsArray.sort(compare);
    tbody.append(...rowsArray);
  }

};

window.onbeforeunload = function() {
  localStorage.setItem('cardArray', JSON.stringify(cardArray));
};


