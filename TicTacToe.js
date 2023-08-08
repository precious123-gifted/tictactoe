

// create a game board
// create an array that handles each square in the game box
// create a function to handle players move
// create a function to check for Win
// create a function to check for draW
// create a function that sitche players :create a time-out function
// create a function that display game Result



let gameBoard = document.querySelector('.game-board')
let Boxes = document.querySelectorAll('.box')

let boxArray = Array.from(Boxes)
boxArray.forEach((box,index)=>{box.id = index})





let playerOne ={
    player:'player-one',
    tileColor:'light',  
}

let playerTwo ={
    player: 'player-two',
    tileColor:'dark', 
}


const playerMoves = [
   
]

const winningMoves = [
   [0,1,2],[3,4,5],[6,7,8],
   [0,3,6],[1,4,7],[2,5,8],
   [0,4,8],[2,4,6]
]

let nextPlayerToMove = playerMoves.length == 0?playerOne:$


 const insertPlayerTileIntoBox = (box) =>{

      let tile = document.createElement('div')
    tile.classList.add(nextPlayerToMove == playerOne?playerOne.tileColor:nextPlayerToMove == playerTwo?playerTwo.tileColor:_)

    box.target.style.pointerEvents = 'none';
    
     box.target.append(tile)   

   playerMoves.push(nextPlayerToMove == playerOne?playerOne:nextPlayerToMove == playerTwo?playerTwo:_)

let newNextPlayerToMove = nextPlayerToMove == playerTwo?playerOne:nextPlayerToMove == playerOne ?playerTwo:$
nextPlayerToMove = newNextPlayerToMove

let lastPlayerToMove = playerMoves[playerMoves.length-1]
console.log(playerMoves)
console.log('next-player:',nextPlayerToMove)
console.log('last-player:',lastPlayerToMove)

let winningMoveChecker =  playerMoves.length >= 5? checkIfAPlayerHaswon() : isNaN



}
const renderInsertPlayerTileIntoBox = Boxes.forEach((box)=>{
     
box.addEventListener('click',insertPlayerTileIntoBox)   
})

const checkIfAPlayerHaswon = () =>{
//check all the combo array
//if any of the combo array contains only a particular play then that particular player wins
 
winningMoves.forEach(moves => {
  
let winner =  moves.every((index => boxArray[index].firstChild?.classList.contains('dark')) ) ? playerTwo : moves.every((index => boxArray[index].firstChild?.classList.contains('light')) ) ? playerOne : null

 if(winner){

  
gameBoard.style.pointerEvents = 'none'


console.log('winner is:',winner)
 

  return
 }


});

  

}




