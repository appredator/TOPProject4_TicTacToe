const gameBoard = (() => {
  
  const createPlayer = (playerName, mark, turn) => {
      this.playerName = playerName;
      this.mark = mark;
      this.turn = turn;
      let getPlayerName = () => {alert("The player name is " + this.playerName)}
    return {playerName, mark, turn, getPlayerName};
    };
        const player1 = createPlayer("", "X", true)
        const player2 = createPlayer("", "O", false)
  
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
  
  let winner = "";
  
  let turns = 0;
  
  let board = Array(9).fill("")
  
  let winnerCombo = [];
  
  let counter = 0;
  
  ///
  ///Logic to playerTurn to make sure you dont click an already filled box
  ///!!!!!!!!@@@@@@@@@@@
  const playerTurn = ( function() {
    const box = document.querySelectorAll(".box");
    box.forEach( box => {
      box.addEventListener("click", e => {
      ///Logic to playerTurn to make sure you dont click an already filled box
         if(e.target.textContent != ""){
          
          alert("That box is already taken. Please choose an empty box.")
        }
        //Condition for when a box is clicked and it is Player 1's turn.
        else if(player1.turn == true && winner == "" && e.target.textContent == ""){
          
          board[e.target.id] = player1.mark;
  
          box.textContent = player1.mark;
  
          player1.turn = false;
  
          player2.turn = true;
          console.log(e.target.id)
          console.log(board);
        }
              //Condition for when a box is clicked and it is Player 1's turn.
        else if(player2.turn == true && winner == "" && e.target.textContent == ""){
          
          board[e.target.id] = player2.mark;
  
          box.textContent = player2.mark;
  
          player1.turn = true;
  
          player2.turn = false;
          console.log(e.target.id)
          console.log(board);
          
        }
        else{
        return; 
        }
        winCheck();
      });
    });
  
  return { box }
  })();
  
  winCheck = () => {
  console.log("WinCheck function has just run.")
  turns++;
  
  //Conditions to catch combination for X, player 1
  if(winner == "" && board[0] == "X" && board[1] == "X" && board[2] == "X"){
  winner = "Player 1"
  }
  else if(winner == "" && board[0] == "X" && board[3] == "X" && board[6] == "X"){
  winner = "Player 1"
  }
  else if(winner == "" && board[3] == "X" && board[4] == "X" && board[5] == "X"){
  winner = "Player 1"
  }
  else if(winner == "" && board[6] == "X" && board[7] == "X" && board[8] == "X"){
  winner = "Player 1"
  }
  else if(winner == "" && board[1] == "X" && board[4] == "X" && board[7] == "X"){
  winner = "Player 1"
  }
  else if(winner == "" && board[2] == "X" && board[4] == "X" && board[6] == "X"){
  winner = "Player 1"
  }
  else if(winner == "" && board[2] == "X" && board[5] == "X" && board[8] == "X"){
  winner = "Player 1"
  }
  else if(winner == "" && board[0] == "X" && board[4] == "X" && board[8] == "X"){
  winner = "Player 1"
  }
  //Conditions to catch combination for X, player 1
  else if(winner == "" && board[0] == "O" && board[1] == "O" && board[2] == "O"){
  winner = "Player 2"
  }
  else if(winner == "" && board[0] == "O" && board[3] == "O" && board[6] == "O"){
  winner = "Player 2"
  }
  else if(winner == "" && board[3] == "O" && board[4] == "O" && board[5] == "O"){
  winner = "Player 2"
  }
  else if(winner == "" && board[6] == "O" && board[7] == "O" && board[8] == "O"){
  winner = "Player 2"
  }
  else if(winner == "" && board[1] == "O" && board[4] == "O" && board[7] == "O"){
  winner = "Player 2"
  }
  else if(winner == "" && board[2] == "O" && board[4] == "O" && board[6] == "O"){
  winner = "Player 2"
  }
  else if(winner == "" && board[2] == "O" && board[5] == "O" && board[8] == "O"){
  winner = "Player 2"
  }
  else if(winner == "" && board[0] == "O" && board[4] == "O" && board[8] == "O"){
  winner = "Player 2"
  }
  
  // Checks to see if a player has won
  if(winner == "Player 2" || winner == "Player 1"){
  console.log("The winner is " + winner)
  alert("The winner is " + winner)
  document.querySelector("#ticTacToe").innerHTML = `The winner is ${winner}!` 
  }
  
  //For Loop to check to see if all boxes are checked
  for(let i = 0; i < 9; i++){
  if(board[0] != ""){
  counter++
  }
  else{
  return;
  }
  }//End of loop to check for a tie
  
  // If previous for loop counts 0-8 boxes filled in the array, tell users it is a tie 
  if(counter == 8){
  console.log("The game is a tie!")
  }
  else if(counter < 8){
  console.log("There are still moves left to make")
  }
  
  }//End of winCheck function
  
  
  
  const toggleGame = ( function() {
    const button = document.querySelector(".toggleButton");

      button.addEventListener("click", e => {
      ///Logic to playerTurn to make sure you dont click an already filled box
         if(winner != ""){
          winner = ""
          player1.turn = true;
          player2.turn = false;
          winner = "";
          turns = 0;
          board = Array(9).fill("")
          counter = 0;
          alert("Resetting Game to default values.")
          //forEach Loop to set all box values to ""
         document.querySelector(".zero").textContent = "" 
         document.querySelector(".one").textContent = "" 
         document.querySelector(".two").textContent = "" 
         document.querySelector(".three").textContent = "" 
         document.querySelector(".four").textContent = "" 
         document.querySelector(".five").textContent = "" 
         document.querySelector(".six").textContent = "" 
         document.querySelector(".seven").textContent = "" 
         document.querySelector(".eight").textContent = "" 
        
        }
        //Condition for when a box is clicked and it is Player 1's turn.
        else if(winner == ""){
        
        let player1Name = prompt("Enter the name of Player 1 and click OK")
        
        const player1 = createPlayer(player1Name, "X", true)
        
        document.querySelector("#playerOneDisplay").innerHTML = "Player 1 - " + player1.playerName
           
         let player2Name = prompt("Enter the name of Player 2 and click OK")
       
        const player2 = createPlayer(player2Name, "0", false)
        
        document.querySelector("#playerTwoDisplay").innerHTML = "Player 2 - " + player2.playerName
       
        }
  
        else{
        return; 
        }
     
    });
  
  return { button }
  })();
  
  })();//IIFE for gameBoardModule
  
  