const letterBttn = document.querySelector('#criar-carta');
const letterText = document.querySelector('#carta-texto');
const misteryLetter = document.querySelector('#carta-gerada');
const wordCounter = document.querySelector('#carta-contador');
const styleClass = ['newspaper', 'magazine1', 'magazine2'];
const sizeClass = ['medium', 'big', 'reallybig'];
const rotateClass = ['rotateleft', 'rotateright'];
const skewClass = ['skewleft', 'skewright'];

letterBttn.addEventListener('click', () => {
  if (misteryLetter.innerHTML !== '') {
    misteryLetter.innerHTML = '';
  }
  if (letterText.value === '' || letterText.value === ' ') {
    misteryLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const letterContent = letterText.value.split(' ');
    for (let index = 0; index < letterContent.length; index += 1) {
      const spanMkr = document.createElement('span');
      spanMkr.innerText = letterContent[index];
      spanMkr.classList.add(styleClass[Math.round(Math.random() * 2)]);
      spanMkr.classList.add(sizeClass[Math.round(Math.random() * 2)]);
      spanMkr.classList.add(rotateClass[Math.round(Math.random() * 1)]);
      spanMkr.classList.add(skewClass[Math.round(Math.random() * 1)]);
      misteryLetter.appendChild(spanMkr);
    }
  }
  wordCounter.innerText = misteryLetter.children.length;
});

// Agradecimento ao Thiago Carreira Vallim da Turma 09.
