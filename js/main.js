$(function(){


// 
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let boxSize = 10;
boxes = Math.floor(400/boxSize);

 direction = 'RIGHT';






//create game loop

drawBoard();

function drawBoard(){
  context.beginPath();
  context.fillStyle = 'white';
  context.lineWidth = 1;
  contextStrokeStyle = 'black';
  for (let row = 0; row <= boxes; row+=1) {
    for(let col = 0; col <=boxes; col +=1){
      let x = col * boxSize;
      let y = row * boxSize;
      context.rect(x,y,boxSize, boxSize);
      context.fill()
      context.stroke();
    }
  }

}

function tick(){
  // update every100ms

  //determine the direction
    // if left cordinates change to -1, 0 relative to the current position

    //insert new position on the que
    //remove the last position from the que

}

  
//  






























}());