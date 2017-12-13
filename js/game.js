var SNAKE = {}

SNAKE.game = (function() {

  SNAKE.width = 200;
  SNAKE.height = 200;
  let framerate = 1;
  let snake;
  let canvas;
  let canvasContext;

  //Snake Array
  let snakeArray;

  function addEventListeners() {
    document.addEventListener('keydown', (evt) => {
      evt.preventDefault();
      let directionKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
      }

      let key = evt.which;
      let newDirection = directionKeys[key];

      //check if direction has been given
      if (newDirection) {
        console.log('sending new direction to snake', newDirection);
        snake.setDirection(newDirection);
      }
    });
  }

  function gameLoop() {

    canvasContext.clearRect(0, 0, SNAKE.width, SNAKE.height); //clear the canvas
    snake.advance();
    snake.drawSnake(canvasContext);
    // window.requestAnimationFrame(gameLoop);
    setTimeout(gameLoop, 1000 / framerate);
  }

  function drawBorder(){
    canvasContext.save();
    canvasContext.strokeStyle = "lightgrey";
    canvasContext.lineWidth = SNAKE.cell;
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