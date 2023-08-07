

// create a game board
// create an array that handles each square in the game box
// create a function to handle players move
// create a function to check for Win
// create a function to check for draW
// create a function that sitche players :create a time-out function
// create a function that display game Result



let gameBoard = document.querySelectorAll('.box')
let Boxes = document.querySelectorAll('.box')

let boxArray = Array.from(Boxes)
boxArray.forEach((box,index)=>{box.id = index})





let playerOne ={
    player:'player-one',
    tileColor:'light',
    timeIn:true,
    
}

let playerTwo ={
    player: 'player-two',
    tileColor:'dark',
    timeIn:false,
    
}




const playerMoves = [
   
]


let nextPlayerToMove = playerMoves.length == 0?playerOne:_


 const insertPlayerTileIntoBox = (box) =>{

      let tile = document.createElement('div')
    tile.classList.add(nextPlayerToMove == playerOne?playerOne.tileColor:nextPlayerToMove == playerTwo?playerTwo.tileColor:_)

    box.target.style.pointerEvents = 'none';
    
     box.target.append(tile)   

   playerMoves.push(nextPlayerToMove == playerOne?playerOne:nextPlayerToMove == playerTwo?playerTwo:_)
   
   


let newNextPlayerToMove = nextPlayerToMove == playerTwo?playerOne:nextPlayerToMove == playerOne ?playerTwo:_
nextPlayerToMove = newNextPlayerToMove

let lastPlayerToMove = playerMoves[playerMoves.length-1]


console.log(playerMoves)
console.log('next-player:',nextPlayerToMove)
console.log('last-player:',lastPlayerToMove)


}
const renderInsertPlayerTileIntoBox = Boxes.forEach((box)=>{
     
box.addEventListener('click',insertPlayerTileIntoBox)   
})






