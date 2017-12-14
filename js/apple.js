SNAKE.apple = function(){

  let position = [6,6];
  //let radius = SNAKE.cellSize / 2;  
  let radius = 5;


function randomGenerator(rangeMin, rangeMax){
  rangeMin = Math.ceil(min);
  rangeMax = Math.floor(max);
  return Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
}


function draw(canvasContext){



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