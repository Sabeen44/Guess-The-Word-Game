var timerEl = document.getElementById("timer");
var winDisplay = document.getElementById("winDisplay");
var lossDisplay = document.getElementById("lossDisplay");
var button = document.getElementById("start-button");

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

var randomWord;

var strToArr;

var wrongGuess = [];
var rightGuess = [];
var gameInProgress = false;

var blanks;

win = 0;
loss = 0;

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
    //document.getElementById("wrong").textContent = "Wrong Guess";
  }
}

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
