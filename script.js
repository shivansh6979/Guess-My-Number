"use strict";

const secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = parseInt(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".msg").textContent = "😒No number";
  } else if (guess === secretNumber) {
    document.querySelector(".msg").textContent = "😍 Correct Guess";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".msg").textContent = "📈 Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".msg").textContent = "😢You Lost";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".msg").textContent = "📉 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".msg").textContent = "😢You Lost";
      document.querySelector(".score").textContent = 0;
    }
  }
});
