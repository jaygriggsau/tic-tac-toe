console.log("Checking Link");
var gridNumber = document.querySelector('.gridbox');
let winningArrays = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[1,4,7]];
console.log(winningArrays.length)

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

function compareArrays(playerArray){
    for ( i=0; i<winningArrays.length; i++){ //curently hard coding placements
        if (winningArrays[i].includes(playerArray[0]) && winningArrays[[i]].includes(playerArray[1]) && winningArrays[i].includes(playerArray[2])){
          console.log("win");
        }
    }
}
// function compareArrays(playerArray){
//     for ( i=0; i<winningArrays.length; i++){ //curently hard coding placements
//         if (winningArrays[i].includes(playerArray.placement[0]) && winningArrays[playerArray.placement[1]].includes(playerArray.placement[2]) && winningArrays[i].includes(8)){
//           console.log("win");
//         }
//     }
// }



//Clicking and getting value and taking turns
gridNumber.addEventListener('click', function(event){
    console.log(event.target.innerHTML);
    if (player1.isTurn === true){
        player1.placement.push(event.target.innerHTML);
        console.log(player1.placement);
        player1.turnNumber++
        player1.isTurn = false;
        player2.isTurn = true;
        if (player1.turnNumber = 3){
            compareArrays(player1.placement)
            console.log('end of game')
        }
        
    } else if (player2.isTurn === true) {
        player2.placement.push(event.target.innerHTML);
        console.log(player2.placement);
        player2.turnNumber++
        player2.isTurn = false;
        player1.isTurn = true;
        if (player2.turnNumber = 3){
            compareArrays(player2.placement)
            console.log('end of game')

        }
    }
})



// itemClicked.remove()
// className overwrites our existing classes
// itemClicked.className = 'item-cross-out'
// we can use classList to add separate classes.
// itemClicked.classList.add('item-cross-out')
// we can use classList.toggle to switch a class on and off on a DOM object.