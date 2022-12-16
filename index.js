let gameBoardModule = (function() {
let gameBoard =     
["X","O"];

const winCombos = [
  [0,1,2],
  [0,3,6],
  [3,4,5],
  [6,7,8],
  [1,4,7],
  [2,4,6],
  [2,5,8],
  [0,4,8]
];

let winner = null;

// Turn counter
let turns = 0;
return {gameBoard};


})();



let displayControllerModule = (function() {
const makeMove = document.querySelectorAll(".game-board-button");

let index = 0
makeMove.forEach(makeMoves =>{
makeMoves.dataset.linkedButton = index;
makeMoves.addEventListener("click", renderArrayToScreen)

  function renderArrayToScreen() {
    const gridBoxes = document.querySelectorAll(".grid-box")
    let index = 0;
    gridBoxes.forEach(gridBox => 
      {
        gridBox.dataset.linkedButton = index;
        if(gridBox.getAttribute('data-linked-button') == makeMoves.getAttribute("data-linked-button")){
          gridBox.textContent = gameBoardModule.gameBoard[gameBoardModule.gameBoard.length - 1];
          console.log("show me my makeMoves linked button value...", makeMoves.dataset.linkedButton)
          console.log("show me my gridBox linked button value...", gridBox.dataset.linkedButton)
        }
        index++;
      })
  }
  index++;
})


  return {}
})();


  let createPlayer = (playerName, playerNumber, assignedXO) =>{
    this.playerName = playerName;
    this.playerNumber = playerName;
    this.assignedXO = assignedXO
    let getPlayerName = () => {alert("The player name is " + this.playerName)}
  return {playerName, playerNumber, assignedXO};
  };
  


  let renderArrayToScreenModule = (function(){
    const gridBoxes = document.querySelectorAll(".grid-box")
    gridBoxes[0].innerHTML = gameBoardModule.gameBoard;

    return {}
  })();

  const player1 = createPlayer("Lance", "X", true)
  
  const player2 = createPlayer("Billy", "O", false)

  renderArrayToScreenModule;
  




