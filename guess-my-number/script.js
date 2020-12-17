// 'use strict';

/*
console.log(document.querySelector(".message"));
document.querySelector(".message").textContent = "🎉 Correct Number!";

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20

document.querySelector('.guess').value = 23
*/

// CREATING AND EVENT HANDLER/LISTENER

//waits for a certain event to happen and then reacts to it

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// define the secret number outside of the event handler or else with each click a new number would be formed

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // when there is no input
  // if there is no value(number) then print no number.
  if (!guess) {
    //document.querySelector(".message").textContent = "⛔ No number!";
    displayMessage("⛔ No number!");
  }
  // when player guesses right
  else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector(".message").textContent =
      //guess > secretNumber ? "⬇️ too high!" : "⬆️ too low!";
      displayMessage(guess > secretNumber ? "⬇️ too high!" : "⬆️ too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".message").textContent = "😭 You Lost the Game!";
      displayMessage("😭 You Lost the Game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  //document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = " ";
  document.querySelector(".number").textContent = "?";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
// when the guess itself is to high or the score runs out
/*
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬇️ too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😭 You Lost the Game!";
      document.querySelector(".score").textContent = 0;
    }
  }
  // when the guess itself is too low or the score runs out
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬆️ too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😭 You Lost the Game!";
      document.querySelector(".score").textContent = 0;
    }};
    // the code above only dry, preventing repetition
    */

// TIP always make the first parameter of the game or whatever to compensate for a 0 value or for nothing inputed yet
// on the web page(Document) of the element(node) named class button named check. add an response when button event occurs
//specify the button event as a click(mouse click), and at that click produce this function of printing the value put into the guess input space on the webpage
// no need to call the function, javaScript will call it when the event happens
