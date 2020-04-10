
const cards = [
  ['actionA', 'actionB', 'actionC', 'adjective', 'animalA', 'animalB', 'clothes', 'emotions'],
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: 'action_A/cry.jpg',
      audioSrc: 'audio/cry.mp3',
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'action_A/dance.jpg',
      audioSrc: 'audio/dance.mp3',
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'action_A/dive.jpg',
      audioSrc: 'audio/dive.mp3',
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'action_A/draw.jpg',
      audioSrc: 'audio/draw.mp3',
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'action_A/fish.jpg',
      audioSrc: 'audio/fish.mp3',
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'action_A/fly.jpg',
      audioSrc: 'audio/fly.mp3',
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'action_A/hug.jpg',
      audioSrc: 'audio/hug.mp3',
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'action_A/jump.jpg',
      audioSrc: 'audio/jump.mp3',
    },
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      image: 'action_B/open.jpg',
      audioSrc: 'audio/open.mp3',
    },
    {
      word: 'play',
      translation: 'играть',
      image: 'action_B/play.jpg',
      audioSrc: 'audio/play.mp3',
    },
    {
      word: 'point',
      translation: 'указывать',
      image: 'action_B/point.jpg',
      audioSrc: 'audio/point.mp3',
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: 'action_B/ride.jpg',
      audioSrc: 'audio/ride.mp3',
    },
    {
      word: 'run',
      translation: 'бегать',
      image: 'action_B/run.jpg',
      audioSrc: 'audio/run.mp3',
    },
    {
      word: 'sing',
      translation: 'петь',
      image: 'action_B/sing.jpg',
      audioSrc: 'audio/sing.mp3',
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: 'action_B/skip.jpg',
      audioSrc: 'audio/skip.mp3',
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: 'action_B/swim.jpg',
      audioSrc: 'audio/swim.mp3',
    },
  ],
  [
    {
      word: 'argue',
      translation: 'спорить',
      image: 'action_C/argue.jpg',
      audioSrc: 'audio/argue.mp3',
    },
    {
      word: 'build',
      translation: 'строить',
      image: 'action_C/build.jpg',
      audioSrc: 'audio/build.mp3',
    },
    {
      word: 'carry',
      translation: 'нести',
      image: 'action_C/carry.jpg',
      audioSrc: 'audio/carry.mp3',
    },
    {
      word: 'catch',
      translation: 'ловить',
      image: 'action_C/catch.jpg',
      audioSrc: 'audio/catch.mp3',
    },
    {
      word: 'drive',
      translation: 'водить машину',
      image: 'action_C/drive.jpg',
      audioSrc: 'audio/drive.mp3',
    },
    {
      word: 'drop',
      translation: 'падать',
      image: 'action_C/drop.jpg',
      audioSrc: 'audio/drop.mp3',
    },
    {
      word: 'pull',
      translation: 'тянуть',
      image: 'action_C/pull.jpg',
      audioSrc: 'audio/pull.mp3',
    },
    {
      word: 'push',
      translation: 'толкать',
      image: 'action_C/push.jpg',
      audioSrc: 'audio/push.mp3',
    },
  ],
  [
    {
      word: 'big',
      translation: 'большой',
      image: 'adjective/big.jpg',
      audioSrc: 'audio/big.mp3',
    },
    {
      word: 'small',
      translation: 'маленький',
      image: 'adjective/small.jpg',
      audioSrc: 'audio/small.mp3',
    },
    {
      word: 'fast',
      translation: 'быстрый',
      image: 'adjective/fast.jpg',
      audioSrc: 'audio/fast.mp3',
    },
    {
      word: 'slow',
      translation: 'медленный',
      image: 'adjective/slow.jpg',
      audioSrc: 'audio/slow.mp3',
    },
    {
      word: 'friendly',
      translation: 'дружелюбный',
      image: 'adjective/friendly.jpg',
      audioSrc: 'audio/friendly.mp3',
    },
    {
      word: 'unfriendly',
      translation: 'недружелюбный',
      image: 'adjective/unfriendly.jpg',
      audioSrc: 'audio/unfriendly.mp3',
    },
    {
      word: 'young',
      translation: 'молодой',
      image: 'adjective/young.jpg',
      audioSrc: 'audio/young.mp3',
    },
    {
      word: 'old',
      translation: 'старый',
      image: 'adjective/old.jpg',
      audioSrc: 'audio/old.mp3',
    },
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: 'animal_A/cat.jpg',
      audioSrc: 'audio/cat.mp3',
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: 'animal_A/chick.jpg',
      audioSrc: 'audio/chick.mp3',
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: 'animal_A/chicken.jpg',
      audioSrc: 'audio/chicken.mp3',
    },
    {
      word: 'dog',
      translation: 'собака',
      image: 'animal_A/dog.jpg',
      audioSrc: 'audio/dog.mp3',
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: 'animal_A/horse.jpg',
      audioSrc: 'audio/horse.mp3',
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: 'animal_A/pig.jpg',
      audioSrc: 'audio/pig.mp3',
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: 'animal_A/rabbit.jpg',
      audioSrc: 'audio/rabbit.mp3',
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: 'animal_A/sheep.jpg',
      audioSrc: 'audio/sheep.mp3',
    },
  ],
  [
    {
      word: 'bird',
      translation: 'птица',
      image: 'animal_B/bird.jpg',
      audioSrc: 'audio/bird.mp3',
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: 'animal_B/fish.jpg',
      audioSrc: 'audio/fish.mp3',
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: 'animal_B/frog.jpg',
      audioSrc: 'audio/frog.mp3',
    },
    {
      word: 'giraffe',
      translation: 'жирафа',
      image: 'animal_B/giraffe.jpg',
      audioSrc: 'audio/giraffe.mp3',
    },
    {
      word: 'lion',
      translation: 'лев',
      image: 'animal_B/lion.jpg',
      audioSrc: 'audio/lion.mp3',
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: 'animal_B/mouse.jpg',
      audioSrc: 'audio/mouse.mp3',
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: 'animal_B/turtle.jpg',
      audioSrc: 'audio/turtle.mp3',
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: 'animal_B/dolphin.jpg',
      audioSrc: 'audio/dolphin.mp3',
    },
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: 'clothes/skirt.jpg',
      audioSrc: 'audio/skirt.mp3',
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: 'clothes/pants.jpg',
      audioSrc: 'audio/pants.mp3',
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: 'clothes/blouse.jpg',
      audioSrc: 'audio/blouse.mp3',
    },
    {
      word: 'dress',
      translation: 'платье',
      image: 'clothes/dress.jpg',
      audioSrc: 'audio/dress.mp3',
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: 'clothes/boot.jpg',
      audioSrc: 'audio/boot.mp3',
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: 'clothes/shirt.jpg',
      audioSrc: 'audio/shirt.mp3',
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: 'clothes/coat.jpg',
      audioSrc: 'audio/coat.mp3',
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: 'clothes/shoe.jpg',
      audioSrc: 'audio/shoe.mp3',
    },
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: 'emotion/sad.jpg',
      audioSrc: 'audio/sad.mp3',
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: 'emotion/angry.jpg',
      audioSrc: 'audio/angry.mp3',
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: 'emotion/happy.jpg',
      audioSrc: 'audio/happy.mp3',
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: 'emotion/tired.jpg',
      audioSrc: 'audio/tired.mp3',
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: 'emotion/surprised.jpg',
      audioSrc: 'audio/surprised.mp3',
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: 'emotion/scared.jpg',
      audioSrc: 'audio/scared.mp3',
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: 'emotion/smile.jpg',
      audioSrc: 'audio/smile.mp3',
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: 'emotion/laugh.jpg',
      audioSrc: 'audio/laugh.mp3',
    },
  ],
];


export { cards };
