console.log("Checking Link");
var gridNumber = document.querySelector('.gridbox');
let winningArrays = [['0','1','2'],['3','4','5'],['6','7','8'],['0','4','8'],['2','4','6'],['1','4','7'],['0','3','6'],['2','5','8']];


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


//// Winning Conditions //works when player1.placement is set before the addeventlistner
function checkWinConditions(name){ 
    if (player1.placement.includes(winningArrays[0][0] && winningArrays[0][1] && winningArrays[0][2])){
        console.log("Well done " + name + "you win")
    } else if (player1.placement.includes(winningArrays[1][0] && winningArrays[1][1] && winningArrays[1][2])){
        console.log("Well done " + name + "you win")
    } else if (player1.placement.includes(winningArrays[2][0] && winningArrays[2][1] && winningArrays[2][2])){
        console.log("Well done " + name + "you win")
    } else if (player1.placement.includes(winningArrays[3][0] && winningArrays[3][1] && winningArrays[3][2])){
        console.log("Well done " + name + "you win")
    } else if (player1.placement.includes(winningArrays[4][0] && winningArrays[4][1] && winningArrays[4][2])){
        console.log("Well done " + name + "you win")
    } else if (player1.placement.includes(winningArrays[5][0] && winningArrays[5][1] && winningArrays[5][2])){
        console.log("Well done " + name + "you win")
    } else if (player1.placement.includes(winningArrays[6][0] && winningArrays[6][1] && winningArrays[6][2])){
        console.log("Well done " + name + "you win")
    } else if (player1.placement.includes(winningArrays[7][0] && winningArrays[7][1] && winningArrays[7][2])){
        console.log("Well done " + name + "you win") // LAst One
    } else if (player1.placement.includes(winningArrays[0][0] && winningArrays[0][1] && winningArrays[0][2])){
        console.log("Well done " + name + "you win")
    } else if (player2.placement.includes(winningArrays[1][0] && winningArrays[1][1] && winningArrays[1][2])){
        console.log("Well done " + name + "you win")
    } else if (player2.placement.includes(winningArrays[2][0] && winningArrays[2][1] && winningArrays[2][2])){
        console.log("Well done " + name + "you win")
    } else if (player2.placement.includes(winningArrays[3][0] && winningArrays[3][1] && winningArrays[3][2])){
        console.log("Well done " + name + "you win")
    } else if (player2.placement.includes(winningArrays[4][0] && winningArrays[4][1] && winningArrays[4][2])){
        console.log("Well done " + name + "you win")
    } else if (player2.placement.includes(winningArrays[5][0] && winningArrays[5][1] && winningArrays[5][2])){
        console.log("Well done " + name + "you win")
    } else if (player2.placement.includes(winningArrays[6][0] && winningArrays[6][1] && winningArrays[6][2])){
        console.log("Well done " + name + "you win")
    } else if (player2.placement.includes(winningArrays[7][0] && winningArrays[7][1] && winningArrays[7][2])){
        console.log("Well done " + name + "you win")
    } else {
        console.log("Not Yet " + name)
    }

}


// Game Logic
//Clicking and getting value and taking turns
gridNumber.addEventListener('click', function(event){
    if (player1.isTurn === true){
        player1.placement.push(event.target.innerHTML); // is pushing correctly
        player1.turnNumber++
        player1.isTurn = false;
        player2.isTurn = true;
        //adding a drawing
        event.target.style.backgroundColor = "orangered";
        //want to change the background on click

        checkWinConditions(player1.name); // Throwing error, 
        
    } else if (player2.isTurn === true) {
        player2.placement.push(event.target.innerHTML);
        player2.turnNumber++
        player2.isTurn = false;
        player1.isTurn = true;
        checkWinConditions(player2.name);
        //changing Background
        event.target.style.backgroundColor = "blue";

        
    }
})



// itemClicked.remove()
// className overwrites our existing classes
// itemClicked.className = 'item-cross-out'
// we can use classList to add separate classes.
// itemClicked.classList.add('item-cross-out')
// we can use classList.toggle to switch a class on and off on a DOM object.