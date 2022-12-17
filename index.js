let gameBoardModule = (function() {
  
  let createPlayer = (playerName, mark, turn) =>{
    this.playerName = playerName;
    this.mark = mark;
    this.turn = turn;
    let getPlayerName = () => {alert("The player name is " + this.playerName)}
  return {playerName, mark, turn, getPlayerName};
  };

  const player1 = createPlayer("Lance", "X", true)
  
  const player2 = createPlayer("Billy", "O", false)

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

let turns = 0;

let board =     
[];

let winnerCombo = [];

let playerTurn = (function() {
  const box = document.querySelectorAll(".box");
  box.forEach( box => {
    box.addEventListener("click", e => {
      //Condition for when a box is clicked and it is Player 1's turn.
      if(player1.turn == true && gameboard.winner == null && e.target.textContent == ""){
        
        board[e.target.id] = player1.mark;

        box[e.target.id] = player1.mark;

        document.querySelector(e.target.id) = player1.mark;

        player1.turn = false;

        player2.turn = true;

        console.log(board);
      }
            //Condition for when a box is clicked and it is Player 1's turn.
      else if(player2.turn == true && gameboard.winner == null && e.target.textContent == ""){
        
        board[e.target.id] = player2.mark;

        box.textContent = player2.mark;

        player1.turn = true;

        player2.turn = false;

        console.log(board);
      }
      else{
        console.log('You hit the else of playerTurn');
      }
      // winCheck();
    })
  })();

return {playerTurn};
//Escape gameboard object
})
 })();

// Non-Private Approach for testing. Currently doesnt work because it cant access player1.properties
 let playerTurn2 = (function() {
  const box = document.querySelectorAll(".box");
  box.forEach( box => {
    box.addEventListener("click", e => {
      //Condition for when a box is clicked and it is Player 1's turn.
      if(player1.turn == true && gameboard.winner == null && e.target.textContent == ""){
        
        board[e.target.id] = player1.mark;

        box[e.target.id] = player1.mark;

        document.querySelector(e.target.id) = player1.mark;

        player1.turn = false;

        player2.turn = true;

        console.log(board);
      }
            //Condition for when a box is clicked and it is Player 1's turn.
      else if(player2.turn == true && gameboard.winner == null && e.target.textContent == ""){
        
        board[e.target.id] = player2.mark;

        box.textContent = player2.mark;

        player1.turn = true;

        player2.turn = false;

        console.log(board);
      }
      else{
        console.log('You hit the else of playerTurn');
      }
      // winCheck();
    })
  })
  })();










