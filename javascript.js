let winningArrays = [['0','1','2'],['3','4','5'],['6','7','8'],['0','4','8'],['2','4','6'],['1','4','7'],['0','3','6'],['2','5','8']];

let boardState = []; // This will hold all board spots and will let me check if a space is ocupied, and if the board is full and check for a draw.
let wantedPlace = null;

var gridNumber = document.querySelector('.gridbox');
let playerTurn = document.querySelector("#player-turn");
let resetButton = document.querySelector('button');
let gridItems = document.querySelectorAll(".griditem");
let winMessage = document.querySelector('#winning-message');
let playerOneScore = document.querySelector("#p1score");
let playerTwoScore = document.querySelector("#p2score");

let player1 = {
    name: "Player One",
    score: 0,
    turnNumber: 0,
    isTurn: true,
    placement : []
}
let player2 = {
    name: "Player Two",
    score: 0,
    turnNumber: 0,
    isTurn: false,
    placement : []
}

//On Win Function

function onWinPlayer1(){
    winMessage.textContent = player1.name + " Wins!"
    player1.score++
    playerOneScore.textContent = player1.score;
    resetSoft()
}
function onWinPlayer2(){
    winMessage.textContent = player2.name + " Wins!"
    player2.score++
    playerTwoScore.textContent = player2.score;
    resetSoft()
}
function checkDraw(){
    if (boardState.length >= 9){
        console.log("its a draw")
    }
}

//// Winning Conditions Function
function checkWinConditions(name){ 
    if (player1.placement.includes(winningArrays[0][0]) && player1.placement.includes(winningArrays[0][1]) && player1.placement.includes(winningArrays[0][2])){
        console.log("Well done " + name + " you win")
        onWinPlayer1();
    } 
    else if (player1.placement.includes(winningArrays[1][0]) && player1.placement.includes(winningArrays[1][1]) && player1.placement.includes(winningArrays[1][2])){
        console.log("Well done " + name + " you win")
        onWinPlayer1();
    } 
    else if (player1.placement.includes(winningArrays[2][0]) && player1.placement.includes(winningArrays[2][1]) && player1.placement.includes(winningArrays[2][2])){
        console.log("Well done " + name + " you win")
        onWinPlayer1();
    } 
    else if (player1.placement.includes(winningArrays[3][0]) && player1.placement.includes(winningArrays[3][1]) && player1.placement.includes(winningArrays[3][2])){
        console.log("Well done " + name + " you win")
        onWinPlayer1();
    } 
    else if (player1.placement.includes(winningArrays[4][0]) && player1.placement.includes(winningArrays[4][1]) && player1.placement.includes(winningArrays[4][2])){
        console.log("Well done " + name + " you win")
        onWinPlayer1();
    } 
    else if (player1.placement.includes(winningArrays[4][0]) && player1.placement.includes(winningArrays[4][1]) && player1.placement.includes(winningArrays[4][2])){
        console.log("Well done " + name + " you win")
    } 
    else if (player1.placement.includes(winningArrays[4][0]) && player1.placement.includes(winningArrays[4][1]) && player1.placement.includes(winningArrays[4][2])){
        console.log("Well done " + name + " you win")
    } 
    else if (player1.placement.includes(winningArrays[5][0]) && player1.placement.includes(winningArrays[5][1]) && player1.placement.includes(winningArrays[5][2])){
        console.log("Well done " + name + " you win")
        onWinPlayer1();
    } 
    else if (player1.placement.includes(winningArrays[6][0]) && player1.placement.includes(winningArrays[6][1]) && player1.placement.includes(winningArrays[6][2])){
        console.log("Well done " + name + " you win")
        onWinPlayer1();
    } 
    else if (player1.placement.includes(winningArrays[7][0]) && player1.placement.includes(winningArrays[7][1]) && player1.placement.includes(winningArrays[7][2])){
        console.log("Well done " + name + " you win")
        onWinPlayer1();
    } 
    else if (player2.placement.includes(winningArrays[0][0]) && player2.placement.includes(winningArrays[0][1]) && player2.placement.includes(winningArrays[0][2])){
        console.log("Well done " + name + " you win")
        onWinPlayer2();
    } 
    else if (player2.placement.includes(winningArrays[1][0]) && player2.placement.includes(winningArrays[1][1]) && player2.placement.includes(winningArrays[1][2])){
        console.log("Well done " + name + " you win")
        onWinPlayer2();
    } 
    else if (player2.placement.includes(winningArrays[2][0]) && player2.placement.includes(winningArrays[2][1]) && player2.placement.includes(winningArrays[2][2])){
        console.log("Well done " + name + " you win")
        onWinPlayer2();
    } 
    else if (player2.placement.includes(winningArrays[3][0]) && player2.placement.includes(winningArrays[3][1]) && player2.placement.includes(winningArrays[3][2])){
        console.log("Well done " + name + " you win")
        onWinPlayer2();
    } 
    else if (player2.placement.includes(winningArrays[4][0]) && player2.placement.includes(winningArrays[4][1]) && player2.placement.includes(winningArrays[4][2])){
        console.log("Well done " + name + " you win")
        onWinPlayer2();
    } 
    else if (player2.placement.includes(winningArrays[5][0]) && player2.placement.includes(winningArrays[5][1]) && player2.placement.includes(winningArrays[5][2])){
        console.log("Well done " + name + " you win")
        onWinPlayer2();
    } 
    else if (player2.placement.includes(winningArrays[6][0]) && player2.placement.includes(winningArrays[6][1]) && player2.placement.includes(winningArrays[6][2])){
        console.log("Well done " + name + " you win")
        onWinPlayer2();
    } 
    else if (player2.placement.includes(winningArrays[7][0]) && player2.placement.includes(winningArrays[7][1]) && player2.placement.includes(winningArrays[7][2])){
        console.log("Well done " + name + " you win")
        onWinPlayer2();
    } 
}

// ResetLogic
function resetSoft(){
    for (i=0; i< gridItems.length; i++){
        gridItems[i].style.backgroundColor = "antiquewhite"; //this may need to go in a loop
    }
    player1.placement = [];
    player2.placement = [];
    player1.turnNumber = 0;
    player2.turnNumber = 0;
    boardState=[];
}
function reset(){
    for (i=0; i< gridItems.length; i++){
        gridItems[i].style.backgroundColor = "antiquewhite"; //this may need to go in a loop
    }
    player1.score = 0;
    player2.score = 0;
    player1.placement = []
    player2.placement = []
    player1.turnNumber = 0;
    player2.turnNumber = 0;
    playerOneScore.innerHTML = 0
    playerTwoScore.innerHTML = 0
    winMessage.textContent = ""; //Clear Message At Start
    boardState=[];
}

// Game Logic
//Clicking and getting value and taking turns
gridNumber.addEventListener('click', function(event){
    if (player1.isTurn === true){
        winMessage.textContent = ""; //Clear Message At Start
        wantedPlace = event.target.innerHTML;
        if (boardState.includes(wantedPlace)){
            console.log("cant got there")
        } else {
            boardState.push(event.target.innerHTML);//pushes to board state
            player1.placement.push(event.target.innerHTML); // pushes to players moves
            player1.turnNumber++;
            player1.isTurn = false;
            player2.isTurn = true;
            playerTurn.textContent = "Player 2 Turn"
            //changing background
            event.target.style.backgroundColor = "orangered";
            //check to see if won
            checkDraw()
            checkWinConditions(player1.name);  
        }    
    } else if (player2.isTurn === true) {
        winMessage.textContent = ""; //Clear Message At Start
        wantedPlace = event.target.innerHTML;
        if (boardState.includes(wantedPlace)){
            console.log("cant got there")
        } else {
            boardState.push(event.target.innerHTML);//pushes to board state
            player2.placement.push(event.target.innerHTML); // pushes to player moves array
            player2.turnNumber++;
            player2.isTurn = false;
            player1.isTurn = true;
            playerTurn.textContent = "Player 1 Turn"
            //changing background
            event.target.style.backgroundColor = "skyblue";
            //check to see if won
            checkDraw()
            checkWinConditions(player2.name); 
        }
        
        }
       
    }
)

resetButton.addEventListener('click', function (event){
    reset();
})




// itemClicked.remove()
// className overwrites our existing classes
// itemClicked.className = 'item-cross-out'
// we can use classList to add separate classes.
// itemClicked.classList.add('item-cross-out')
// we can use classList.toggle to switch a class on and off on a DOM object.