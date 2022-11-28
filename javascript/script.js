//help variables
let playerID = 0;
let numberOfPlayers = 0;
let activePlayerID = 1;
let counterMoves = 0;
let showResultValue = true;

let players = [
  {
    name: "",
    simbol: "X",
  },
  {
    name: "",
    simbol: "O",
  },
];

let gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

//element variables
const overlayElement = document.getElementById("overlay");
const asideElement = document.getElementById("asideElement");
const errorElement = document.getElementById("errorMessage");
const inputElement = document.getElementById("playername");
const gameTable = document.getElementById("gameTable");
let activePlayerElement = document.getElementById("activPlayer");
const gameListTable = document.querySelectorAll("#gameTable li");
const gameArticleElement = document.querySelector("#gameSection article ");
const gameTitleElement = document.querySelector("#gameSection article h2");
const winElement = document.getElementById("winPlayer");

// button variables
const bntPlayer1 = document.getElementById("btnPlayer1");
const btnPlayer2 = document.getElementById("btnPlayer2");
const btnCancel = document.getElementById("btnCancel");

const formElement = document.getElementById("formElement");
const startGame = document.getElementById("startGame");

//Add Event Listeners
bntPlayer1.addEventListener("click", insertPlayerName);
btnPlayer2.addEventListener("click", insertPlayerName);
btnCancel.addEventListener("click", clearForm);
formElement.addEventListener("submit", getPlayerName);
startGame.addEventListener("click", openNewGame);