let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

let name = "なまけろ";
let hello = "が、Helloと言っています";
let greeting = name + hello;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "前回の予想: ";
     }
     guesses.textContent += userGuess + " ";

     if (userGuess === randomNumber) {
        lastResult.textContent = "正解！";
        lastResult.computedStyleMap.bakgroundColor = "green";
        lowOrHi.textContent = " ";
        setGameOver();
     } else if (guessCount === 10) {
        lastResult.textContent = "GameOver";
        setGameOver();
     } else {
        lastResult.textContent = "違います";
        lastResult.style.bakgroundColor = "red";
        if (userGuess > randomNumber) {
            lowOrHi.textContent = "大きいです";
        } else if (userGuess < randomNumber) {
            lowOrHi.textContent = "小さいです";
        }
     }

     guessCount++;
     guessField.value = "";
     guessField.focus();
}

guessSubmit.addEventListener("click" , checkGuess)

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click" , resetGame);
}

function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }

  const resetParas = document.querySelectorAll('.resultParas p');
for (let i = 0 ; i < resetParas.length ; i++) {
  resetParas[i].textContent = '';
}