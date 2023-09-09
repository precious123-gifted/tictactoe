
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

winnersSignBoard.textContent = nextPlayerToMove == playerOne? 'Its Player One Turn' : nextPlayerToMove == playerTwo? 'Its Player Two Turn' : null
let winningMoveChecker =  playerMoves.length >= 5? checkIfAPlayerHaswonOrTheGameIsATie() : null

}
let renderInsertPlayerTileIntoBox = Boxes.forEach((box)=>{     
box.addEventListener('click',insertPlayerTileIntoBox)   
})


const checkIfAPlayerHaswonOrTheGameIsATie = () =>{
   
winningMoves.forEach(moves => {
  
let winner =  moves.every((index => boxArray[index].firstChild?.classList.contains('dark')) ) ? playerTwo : moves.every((index => boxArray[index].firstChild?.classList.contains('light')) ) ? playerOne : null
let Draw = (playerMoves.length === 9) && (winner !== playerOne || playerTwo?true:false);
 if(winner){
boxArray.forEach(box=>{
  box.style.pointerEvents = 'none'
})

winnersSignBoard.textContent = winner == playerOne? 'Player One Wins' : 'Player Two Wins'
  return
 }

  if(Draw){
    winnersSignBoard.textContent = 'The Game is a Tie'
   return
  }
});
}

const restartGame = () =>{
let restartButton = document.querySelector('.resetButton')

restartButton.addEventListener('click',()=>{

  playerMoves.length=0
  winnersSignBoard.textContent = 'Make Your Move Player One'
  
  boxArray.forEach(box=>{
if(box.firstChild)
    box.removeChild(box.firstChild)
  box.style.pointerEvents = 'auto'
  })

})

}
restartGame()



