let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

const submitBtn = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const userGuesses = document.querySelector('.guesses');
const userLastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter A Valid Number');
  } else if (guess < 1 || guess > 100) {
    alert('Please Enter A Valid Number Between 1 and 100');
  } else {
    prevGuesses.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number Was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You Are Right!');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number Is Too Low');
  } else if (guess > randomNumber) {
    displayMessage('Number Is Too High');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  userGuesses.innerHTML += `${guess} `;
  numGuesses++;
  userLastResult.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h1 id='newGame'>Start New Game</h1>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function (e) {
    e.preventDefault();
    randomNumber = Math.floor(Math.random() * 100 + 1);
    prevGuesses = [];
    numGuesses = 1;
    userGuesses.innerHTML = '';
    userLastResult.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
