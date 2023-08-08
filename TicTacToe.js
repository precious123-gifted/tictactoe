

// create a game board
// create an array that handles each square in the game box
// create a function to handle players move
// create a function to check for Win
// create a function to check for draW
// create a function that sitche players :create a time-out function
// create a function that display game Result



let gameBoard = document.querySelector('.game-board')
let winnersSignBoard = document.querySelector('.winners-signboard')
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


winnersSignBoard.textContent = nextPlayerToMove == playerOne? 'Its Player One Turn' : nextPlayerToMove == playerTwo? 'Its Player Two Turn' : null
let winningMoveChecker =  playerMoves.length >= 5? checkIfAPlayerHaswonOrTheGameIsATie() : isNaN



}
const renderInsertPlayerTileIntoBox = Boxes.forEach((box)=>{
     
box.addEventListener('click',insertPlayerTileIntoBox)   
})


const checkIfAPlayerHaswonOrTheGameIsATie = () =>{
   

winningMoves.forEach(moves => {
  
let winner =  moves.every((index => boxArray[index].firstChild?.classList.contains('dark')) ) ? playerTwo : moves.every((index => boxArray[index].firstChild?.classList.contains('light')) ) ? playerOne : null
let Draw = playerMoves.length == 9?!winner : null
 if(winner){
boxArray.forEach(box=>{
  box.style.pointerEvents = 'none'
})



winnersSignBoard.textContent = winner == playerOne? 'Player One Wins' : 'Player Two Wins'
console.log('winner is:',winner)
console.log('player-moves:',playerMoves)
  return
 }

  if(Draw){
    winnersSignBoard.textContent = 'The Game is a Tie'
   console.log('all boxes are filled up,the game is a tie')
   return
  }
});
}

const restartGame = () =>{
let restartButton = document.querySelector('.resetButton')

restartButton.addEventListener('click',()=>{

  playerMoves.length=0
  winnersSignBoard.textContent = 'Make Your Move Player One'
  console.log('restart:',playerMoves)

  boxArray.forEach(box=>{
if(box.firstChild)
    box.removeChild(box.firstChild)
  box.style.pointerEvents = 'auto'
  })

})

}
restartGame()



