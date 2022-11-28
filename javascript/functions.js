function clearGameBoard() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameBoard[i][j] = 0;
    }
  }

  for (let listElemnt of gameListTable) {
    listElemnt.textContent = "";
    listElemnt.style.backgroundColor = "";
  }

  counterMoves = 0;
  activePlayerID = 1;
  showResultValue = true;
}

function getWinner() {
  let resultID = 0;
  let result = 0;
  for (let i = 0; i < 3; i++) {
    let resultStatus = true;
    resultID = gameBoard[i][0];

    if (resultID !== 0) {
      for (let j = 0; j < 3; j++) {
        if (resultStatus) {
          if (gameBoard[i][j] === resultID) {
            result = resultID;
          } else {
            resultStatus = false;
            result = 0;
          }
        }
      }
      if (result !== 0) {
        return result;
      }
    } else {
      result = 0;
    }
  }

  for (let i = 0; i < 3; i++) {
    let resultStatus = true;
    resultID = gameBoard[0][i];

    if (resultID !== 0) {
      for (let j = 0; j < 3; j++) {
        if (resultStatus) {
          if (gameBoard[j][i] === resultID) {
            result = resultID;
          } else {
            resultStatus = false;
            result = 0;
          }
        }
      }
      if (result !== 0) {
        return result;
      }
    } else {
      result = 0;
    }
  }

  if (
    gameBoard[0][0] !== 0 &&
    gameBoard[0][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][2]
  ) {
    return gameBoard[0][0];
  }

  if (
    gameBoard[2][0] !== 0 &&
    gameBoard[2][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[0][2]
  ) {
    return gameBoard[2][0];
  }

  return result;
}

function showResult(result) {
  if (counterMoves === 9 && result === 0) {
    gameArticleElement.style.display = "block";
    gameTitleElement.textContent = "Resulte is a DRAW!";
    removeListEvents();
  }

  if (result === 1) {
    gameArticleElement.style.display = "block";
    winElement.textContent = players[0].name;
    removeListEvents();
  }

  if (result === 2) {
    gameArticleElement.style.display = "block";
    winElement.textContent = players[1].name;
    removeListEvents();
  }
}

function removeListEvents() {
  showResultValue = false;
  for (let i = 0; i < 9; i++) {
    gameListTable[i].removeEventListener("click", insetPlayerSimbol);
  }
}

function clearForm() {
  overlayElement.style.display = "none";
  asideElement.style.display = "none";
  errorElement.style.display = "none";
  inputElement.value = "";
}
