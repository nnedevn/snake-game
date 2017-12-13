var SNAKE = {}

SNAKE.game = (function() {

  let framerate = 60;

  let canvas;
  let canvasContext;
  let food;
  let score;
  let speed = 130;

  let xPos = 0;
  let yPos = 0;


  //Snake Array
  let snakeArray;

  function createSnake() {
    console.log('Creating snake');
    let snakeLength = 5;
    snakeArray = [];

    for (let i = snakeArray.length - 1; i >= 0; i -= 1) {
      snakeArray.push({
        x: i,
        y: 0
      });
      console.log(i);
    }

  }

  function gameLoop() {
    console.log('loop');
    xPos += 2;
    yPos += 4;
    //canvasContext.clearRect(0, 0, 100, 100); //clear the canvas
    canvasContext.fillStyle = '#F00';
    canvasContext.fillRect(xPos, yPos, 30, 50); //a moving rect
    // setInterval(gameLoop, 1000);
    window.requestAnimationFrame(gameLoop);
  }

  // Initializing function
  function init() {
    console.log('Initializing')
    canvas = document.getElementById('canvas');
    canvasContext = canvas.getContext('2d');

    gameLoop();
  }

  return {
    init: init
  }

}());

SNAKE.snake = (function() {
  let posArr = [];
  let cellSize = 10;


  posArr.push[6, 4];
  posArr.push[5, 4]
  posArr.push[4, 4];
  let direction = 'right';

  function drawSection(canvasContext, pos) {
    let x = SNAKE.snake.cellSize * pos[0];
    let y = SNAKE.snake.cellSize * pos[1];
    canvasContext.fillRect(x, y, SNAKE.snake.cellSize, SNAKE.snake.cellSize);
  }

  function drawSnake(canvasContext){
    //save the current state of the canvas - blanc
    canvasContext.save();
    //changes
    canvasContext.fillStyle = '#F00';
    for (let i = 0; i< posArr.length; i+=1){
      drawSnake(canvasContext, posArr[i]);
    }

    //restore the state of the canvas before changes
    canvasContext.restore();
  }

  function advance(){

    let nextPos = posArr[0].slice();
    nextPos[0] +=1;

    //ass next position at the start
    posArr.unshift(nextPos);
    //remove the last position
    posArr.pop();
  }


  return {
    drawSnake:drawSnake,
    advance: advance
  }



}());



document.addEventListener('DOMContentLoaded', () => {
  SNAKE.game.init();

})