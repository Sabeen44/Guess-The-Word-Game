//global variable
var timerEl = document.getElementById("timer");
var winDisplay = document.getElementById("winDisplay");
var lossDisplay = document.getElementById("lossDisplay");
var button = document.getElementById("start-button");

var randomWord;

var strToArr;

var wrongGuess = [];
var rightGuess = [];
var gameInProgress = false;

var blanks;

win = 0;
loss = 0;

//array of words to be guessed
var words = [
  "gold",
  "chess",
  "toys",
  "frog",
  "book",
  "car",
  "city",
  "boy",
  "friend",
  "name",
  "pair",
  "room",
  "play",
  "speak",
  "smile",
  "brother",
  "sister",
  "walk",
  "write",
  "woman",
  "sit",
  "inside",
];

//check if length of array with correct guesses is equal to length of the blank array to determine win
function checkWin() {
  if (rightGuess.length === blanks.length) {
    win++;
    return true;
  } else {
    return false;
  }
}
//click start to generate random word. random word(string) changed to an array. blank array created. eventlistner added for keypress. called timer function
button.addEventListener("click", function () {
  rightGuess = [];
  randomWord = words[Math.floor(Math.random() * words.length)];
  strToArr = randomWord.split("");
  blanks = new Array(strToArr.length).fill("_");
  console.log(strToArr);
  console.log(blanks);
  document.getElementById("blanks").textContent = blanks.join(" ");
  gameInProgress = true;
  document.addEventListener("keydown", keydownAction);
  timeRemaining();
});

//change key pressed to lowecase.check if key press is in the random word array.find the index of the key in the array. add the key to blank array at the correct index.push the correct key to rightguess array.textContent to appear on the webpage .Incorrect key pushed to wrong array
function keydownAction(event) {
  console.log(event);

  if (gameInProgress === false) return;
  var keyPress = event.key.toLowerCase();
  if (strToArr.includes(keyPress)) {
    var index = strToArr.indexOf(keyPress);
    console.log(index + " index of the keypress in the strToArr array ");
    while (index !== -1) {
      blanks.splice(index, 1, keyPress);
      rightGuess.push(keyPress);
      index = strToArr.indexOf(keyPress, index + 1);
    }

    console.log(blanks);
    document.getElementById("blanks").textContent = blanks.join(" ");
    console.log(rightGuess);
  } else {
    wrongGuess.push(keyPress);
    console.log(wrongGuess);
  }
}

//localstorage
function renderWinsLosses() {
  var wins = localStorage.getItem("wins");
  var losses = localStorage.getItem("losses");
  if (!wins || !losses) {
    return;
  }
}

winDisplay.textContent = win;
lossDisplay.textContent = loss;

localStorage.setItem("wins", win);
localStorage.setItem("losses", loss);

renderWinsLosses();

//timer is cleaered with a win or when time's up. player can restart by clicking on start button
function timeRemaining() {
  var timeleft = 10;

  var timeInterval = setInterval(function () {
    timerEl.textContent = "testing";
    if (checkWin() === true) {
      console.log("you win!!!");
      gameInProgress = false;
      timerEl.textContent = "You win! Click Start Game to continue";
      clearInterval(timeInterval);
      console.log(win + "wins");
      winDisplay.textContent = win;
      return;
    }

    timerEl.textContent = timeleft + " seconds remaining";
    timeleft--;
    if (timeleft === -1) {
      clearInterval(timeInterval);
      timerEl.textContent = "Time's up!";
      loss++;
      lossDisplay.textContent = loss;
    }
  }, 1000);
}
