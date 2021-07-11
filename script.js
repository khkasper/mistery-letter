const letterText = document.querySelector('#carta-texto');
const letterBttn = document.querySelector('#criar-carta');
const misteryLetter = document.querySelector('#carta-gerada');
const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];
const spanMkr = document.createElement('span');

function misteryLetterMkr() {
  letterBttn.addEventListener('click', () => {
    if (letterText.value === '') {
      misteryLetter.innerText = 'Por favor, digite o conteúdo da carta.';
    }
    const letterSize = letterText.value.split(' ');
    for (let index = 0; index < letterSize.length; index++) {
      spanMkr.innerText = letterSize[index];
      misteryLetter.appendChild(spanMkr);
    }
  });
}
misteryLetterMkr();
