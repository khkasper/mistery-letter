const letterBttn = document.querySelector('#criar-carta');
const letterText = document.querySelector('#carta-texto');
const misteryLetter = document.querySelector('#carta-gerada');
const wordCounter = document.querySelector('#carta-contador');
const styleClasses = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
];

letterBttn.addEventListener('click', () => {
  if (misteryLetter.innerHTML !== '') {
    misteryLetter.innerHTML = '';
  }
  if (letterText.value === '' || letterText.value === ' ') {
    misteryLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const letterContent = letterText.value.split(' ');
    for (let index = 0; index < letterContent.length; index++) {
      const spanMkr = document.createElement('span');
      spanMkr.innerText = letterContent[index];
      misteryLetter.appendChild(spanMkr);
    }
  }
  wordCounter.innerText = misteryLetter.children.length;
});

letterBttn.addEventListener('click', () => {
  const spanTotal = document.getElementsByTagName('span');
    for (let i = 0; i < spanTotal.length; i += 1) {
      spanTotal[i].classList.add(styleClasses[0][Math.round(Math.random() * styleClasses[0].length)]);
      spanTotal[i].classList.add(styleClasses[1][Math.round(Math.random() * styleClasses[1].length)]);
      spanTotal[i].classList.add(styleClasses[2][Math.round(Math.random() * styleClasses[2].length)]);
      spanTotal[i].classList.add(styleClasses[3][Math.round(Math.random() * styleClasses[3].length)]);
    }
});
