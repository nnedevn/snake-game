SNAKE.apple = function(){

  let position = [6,6];

function draw(canvasContext, cellSize){

let radius = SNAKE.cellSize / 2;  

  canvasContext.save();

  canvasContext.fillStyle = 'red';
  canvasContext.beginPath();
  
  canvasContext.arc(position[0], position[1], radius, 0, 2* Math.PI, true);
  canvasContext.fill();

canvasContext.restore();
}


return {
  draw:draw
}

}