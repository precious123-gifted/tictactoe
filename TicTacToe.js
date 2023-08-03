

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
let tileColor = 'dark'


 const insertTileIntoBox = (box) =>{

    let tile = document.createElement('div')
    tile.classList.add(tileColor === 'dark'? 'dark' : 'light')

    box.target.style.pointerEvents = 'none';
    box.target.append(tile)

}

Boxes.forEach((box)=>{
box.addEventListener('click', insertTileIntoBox)    
})

  