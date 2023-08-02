

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


document.addEventListener('load',console.log(boxArray))


 const functionToInsertATileIntoABox = (e) =>{

     let tile = document.createElement('div')
     tile.classList.add(tileColor === 'dark'? 'dark' : 'light')

     if(e.target.className === 'box'){
        e.target.style.pointerEvents = 'none';
       e.target.append(tile)
  
     }


    
 }
 document.addEventListener('click', functionToInsertATileIntoABox)
  


  