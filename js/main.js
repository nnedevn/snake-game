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
      let direction = directionKeys[key];

      //check if direction has been given
      if (direction) {
        snake.setDirection(direction);

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

  function drawSnake(canvasContext) {

    // save the current state of the canvas
    canvasContext.save();
    // changes

    canvasContext.fillStyle = 'black';
    for (let i = 0; i < posArr.length; i += 1) {
      drawSection(canvasContext, posArr[i]);
    }

    //restore the state of the canvas before changes
    canvasContext.restore();
  }
  //increment head position by one
  function advance() {
    let nextPos = posArr[0].slice();
    nextPos[0] += 1;

    //next position at the start
    posArr.unshift(nextPos);
    //remove the last position
    posArr.pop();
  }

  function directionIsValid(inputDirection, movingDirection) {
    console.log('movingDirection',movingDirection);
    console.log('inputDirection',inputDirection); 
    let possibleDirections = [];
    if (movingDirection == 'up' || movingDirection == 'down') {

      possibleDirection = ['left', 'right'];
      console.log('possibleDirections',possibleDirections);
    } else if (movingDirection === 'left' || movingDirection === 'right') {
      possibleDirections = ['up', 'down'];
      console.log(possibleDirections);
    }

    if (possibleDirections.includes(inputDirection)) return true;
  }

  function setDirection(inputDirection) {
    if (directionIsValid(inputDirection, direction)) {
      direction = inputDirection;
     
    }

  }

  return {
    drawSnake: drawSnake,
    advance: advance,
    setDirection: setDirection
  }



};



document.addEventListener('DOMContentLoaded', () => {
  SNAKE.game.init();

})