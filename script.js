const letterText = document.querySelector('#carta-texto');
const letterBttn = document.querySelector('#criar-carta');
const misteryLetter = document.querySelector('#carta-gerada');
const letterCounter = document.querySelector('carta-contador');
const styleLetter = ['newspaper', 'magazine1', 'magazine2'];
const sizeLetter = ['medium', 'big', 'reallybig'];
const rotateLetter = ['rotateleft', 'rotateright'];
const skewLetter = ['skewleft', 'skewright'];

function misteryLetterMkr() {
  letterBttn.addEventListener('click', () => {
    if (letterText.value === '') {
      misteryLetter.innerText = 'Por favor, digite o conteúdo da carta.';
    }
    if (misteryLetter.innerHTML !== '') {
      misteryLetter.innerHTML = '';
    }
    const letterContent = letterText.value.split(' ');
    for (let index = 0; index < letterContent.length; index++) {
      const spanMkr = document.createElement('span');
      spanMkr.innerText = letterContent[index];
      spanMkr.classList.add(styleLetter[Math.ceil(Math.random() * styleLetter.length - 1)]);
      spanMkr.classList.add(sizeLetter[Math.ceil(Math.random() * styleLetter.length - 1)]);
      spanMkr.classList.add(rotateLetter[Math.ceil(Math.random() * styleLetter.length - 1)]);
      spanMkr.classList.add(skewLetter[Math.ceil(Math.random() * styleLetter.length - 1)]);
      misteryLetter.appendChild(spanMkr);
    }
  });
}
misteryLetterMkr();
