console.log("Checking Link");
var gridNumber = document.querySelector('.gridbox');
let winningArrays = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[1,4,7],[0,3,6],[2,5,8]];


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


function compareArrays() {
    i=0;
    while ( i < playerTurn.placement[i]){ // Loops through as many items as in the player.placement array.
        console.log(playerTurn.placement);
        i++
    }
}



// function endOfGame(playerArray){
//     for ( i=0; i<winningArrays.length; i++){ //works when hard coding the includes statement
//         if (winningArrays[i].includes(playerArray[0]) && winningArrays[i].includes(playerArray[1]) && winningArrays[i].includes(playerArray[2])){
          
//         } else {
//             break;
//         }
//     }
// }




//Clicking and getting value and taking turns
gridNumber.addEventListener('click', function(event){
    console.log(event.target.innerHTML);
    if (player1.isTurn === true){
        player1.placement.push(event.target.innerHTML);
        player1.turnNumber++
        player1.isTurn = false;
        player2.isTurn = true;

        // temp code
        i=0;
        while ( i < player1.placement.length){ // Loops through as many items as in the player.placement array.
            console.log(player1.placement);
            i++
        }
        //*********** */
        
    } else if (player2.isTurn === true) {
        player2.placement.push(event.target.innerHTML);
        player2.turnNumber++
        player2.isTurn = false;
        player1.isTurn = true;

        i=0;
        while ( i < player2.placement.length){ // Loops through as many items as in the player.placement array.
            console.log(player2.placement);
            i++
        }
    }
})



// itemClicked.remove()
// className overwrites our existing classes
// itemClicked.className = 'item-cross-out'
// we can use classList to add separate classes.
// itemClicked.classList.add('item-cross-out')
// we can use classList.toggle to switch a class on and off on a DOM object.