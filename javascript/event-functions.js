function insertPlayerName(event) {
  overlayElement.style.display = "block";
  asideElement.style.display = "block";

  playerID = event.target.dataset.playerid;
}

function clearForm() {
  overlayElement.style.display = "none";
  asideElement.style.display = "none";
  errorElement.style.display = "none";
  inputElement.value = "";
}

function getPlayerName(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();
  if (enteredPlayerName === "") {
    errorElement.style.display = "block";
  } else {
    errorElement.style.display = "none";
  }
  const getElementString = "player" + playerID + "-name";
  const playerNameDisplay = document.getElementById(getElementString);
  playerNameDisplay.textContent = enteredPlayerName;
  players[playerID - 1].name = enteredPlayerName;
  numberOfPlayers++;

  if (numberOfPlayers === 2) {
    startGame.disabled = false;
  }

  clearForm();
}

function openNewGame() {
  gameTable.style.display = "block";
  gameArticleElement.style.display = "none";
  clearGameBoard();
  if (showResultValue) {
    for (let i = 0; i < 9; i++) {
      gameListTable[i].addEventListener("click", insetPlayerSimbol);
    }
  } 

  activePlayerElement.textContent = players[0].name;
}

function insetPlayerSimbol(event) {
  const activeElement = event.target;
  if (
    gameBoard[activeElement.dataset.row - 1][
      activeElement.dataset.column - 1
    ] !== 0
  ) {
    alert("Please select another field.");
    return;
  }
  counterMoves++;

  activeElement.textContent = players[activePlayerID - 1].simbol;
  activeElement.style.backgroundColor = "rgb(230, 161, 0)";

  gameBoard[activeElement.dataset.row - 1][activeElement.dataset.column - 1] =
    activePlayerID;

  if (showResultValue) {
    const winner = getWinner();
    showResult(winner);
  }

  if (activePlayerID === 2) {
    activePlayerElement.textContent = players[activePlayerID - 2].name;
    activePlayerID--;
  } else {
    activePlayerElement.textContent = players[activePlayerID].name;
    activePlayerID++;
  }
}
