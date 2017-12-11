$(function(){


// 
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let boxSize = 10;
boxes = Math.floor(400/boxSize);

direction = 'RIGHT';

canvas.addEventListener('click', movement);
 // context.addEventListener('click', movement);




//create game loop


function movement(e, direction) {
    context.fillStyle = "black";
      
        context.fillRect(Math.floor(e.offsetX/boxSize)*boxSize, 
                   Math.floor(e.offsetY/boxSize)*boxSize,
                   boxSize, boxSize);
  }


function drawBoard(){
  context.beginPath();
  context.fillStyle = 'white';
  context.lineWidth = 1;
  contextStrokeStyle = 'black';
  for (let row = 0; row <= boxes; row+=1) {
    for(let col = 0; col <=boxes; col +=1){
      let x = col * boxSize;
      let y = row * boxSize;
      context.rect(x,y,boxSize, boxSize); //creates a rectangle 
      context.fill(); //fills the rectangle
      context.stroke(); // draw the path 
    }
  }
}

function movement(e){
  console.log(e);

  context.fillStyle = 'black';
  context.fillRect = Math.floor(e.offsetX / boxSize) * boxSize;
}

function tick(){
  // update every100ms
 

  //determine the direction
    // if left cordinates change to -1, 0 relative to the current position

    //insert new position on the que
    //remove the last position from the que

}

  
//  



drawBoard();
tick();


























}());