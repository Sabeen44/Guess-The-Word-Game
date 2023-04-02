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
