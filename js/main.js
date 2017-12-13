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


  function createFood() {
    console.log('Creating Food');
    food = {
      x: Math.round(Math.random() * (document.width - canvas.width) / canvas.width),
      y: Math.round(Math.random() * (document.heigh - canvas.hight) / canvas.high)
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



}());



document.addEventListener('DOMContentLoaded', () => {
  SNAKE.game.init();

})