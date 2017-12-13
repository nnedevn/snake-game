var SNAKE = {}

SNAKE.game = (function() {


  SNAKE.width = 200;
  SNAKE.height = 200;
  let framerate = 10;
  let snake;

  let canvas;
  let canvasContext;


  //Snake Array
  let snakeArray;

  function addEventListeners(){
    document.addEventListener('keydown', (evt)=>{
      let directionKeys = {
        37: 'left',
        38: 'up',
        39: 'down',
        40: 'right'
      }

      let key = evt.which;


    });
  }
 
   function gameLoop() {
  
    canvasContext.clearRect(0, 0, SNAKE.width, SNAKE.height); //clear the canvas
    snake.advance();
    snake.drawSnake(canvasContext);
    // window.requestAnimationFrame(gameLoop);
    setTimeout(gameLoop, 1000/framerate);
  }

  // Initializing function
  function init() {
    console.log('Initializing..')
    canvas = document.getElementById('canvas');
    canvasContext = canvas.getContext('2d');
    canvas.setAttribute('width', SNAKE.width);
    canvas.setAttribute('height', SNAKE.height);

    snake = SNAKE.snake();

    addEventListeners();
    gameLoop();
  }

  return {
    init: init
  }

}());

SNAKE.snake = function() {
  let posArr = [];
  let cellSize = 10;


  posArr.push([6, 4]);
  posArr.push([5, 4]);
  posArr.push([4, 4]);
  let direction = 'right';

  function drawSection(canvasContext, pos) {
    let x = cellSize * pos[0];
    let y = cellSize * pos[1];
    canvasContext.fillRect(x, y, cellSize, cellSize);
    
  }

  function drawSnake(canvasContext){

    // save the current state of the canvas - blanc
    canvasContext.save();
    // changes
     
    canvasContext.fillStyle = 'black';
    for (let i = 0; i< posArr.length; i+=1){
      // console.log('position', posArr[i]);
      drawSection(canvasContext, posArr[i]);
    }

    //restore the state of the canvas before changes
    canvasContext.restore();
  }
  //increment head position by one
  function advance(){
    let nextPos = posArr[0].slice();
    nextPos[0] +=1;

    //next position at the start
    posArr.unshift(nextPos);
    //remove the last position
    posArr.pop();
  }


  return {
    drawSnake:drawSnake,
    advance: advance
  }



};



document.addEventListener('DOMContentLoaded', () => {
  SNAKE.game.init();

})