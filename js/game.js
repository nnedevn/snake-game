var SNAKE = {}

SNAKE.game = (function() {

  let score = document.getElementById('current-score');
  let highScore = document.getElementById('high-score');
  SNAKE.width = 600;
  SNAKE.height = 600;
  let framerate = 8;
  let cellSize;
  let snake;
  let apple;
  let canvas;
  let canvasContext;
  let gameLoopTimer;

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

      if (newDirection) {
        snake.setDirection(newDirection);
      }
    });
  }

  function checkHighScore(){
    if(localStorage.getItem('snakeHighScore')){
      return
    } else{
      localStorage.setItem('snakeHighScore', 0);
    }
  }
  function getHighScore(){
      return localStorage.getItem('snakeHighScore');
    }

  function setHightScore(){
    localStorage.setItem('snakeHighScore', SNAKE.score);
  }

  function gameOver() {
    clearTimeout(gameLoopTimer);
    canvasContext.clearRect(0, 0, SNAKE.width, SNAKE.height);
    document.getElementById('container').removeChild(canvas);
    toggleOverlay();
  }

/* gameLoop manages the game refresh
 */
  function gameLoop() {
    //update score
    score.textContent = SNAKE.score;
    highScore.textContent = getHighScore();
    if(SNAKE.score > getHighScore()){
      setHightScore();
    }

    canvasContext.clearRect(0, 0, SNAKE.width, SNAKE.height); //clear the canvas

    if (snake.checkCollision()) {
      gameOver();
      return; //stop the rest of the code from executing;
    }
    drawBorder();
    apple.draw(canvasContext);
    snake.drawSnake(canvasContext);
    snake.advance(apple);
    // gameLoopTimer = window.requestAnimationFrame(gameLoop);
    gameLoopTimer = setTimeout(gameLoop, 1000 / framerate);
  }

  function drawBorder() {
    canvasContext.save();
    canvasContext.strokeStyle = "#CECECE";
    // TO DO: make line width dynamic
    canvasContext.lineWidth = 20;
    canvasContext.strokeRect(0, 0, SNAKE.width, SNAKE.height);
    canvasContext.restore();
  }

  function toggleOverlay() {
  	let ele = document.getElementById("overlay");
    let btn = document.getElementById('play-again-button');
    let title = document.getElementById('title');
  	if(ele.style.display == "") {
      		ele.style.display = "none";
    	}
  	else {
  		ele.style.display = "";
      title.innerText = "Game Over";
      btn.innerText = 'Play Again?';
  	}
  }

  // Initializing function
  function init() {
    // toggleOverlay();
    canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'canvas');
    document.getElementById('container').appendChild(canvas);
    canvasContext = canvas.getContext('2d');
    canvas.setAttribute('width', SNAKE.width);
    canvas.setAttribute('height', SNAKE.height);
    SNAKE.score = 0;
    apple = SNAKE.apple();
    snake = SNAKE.snake();
    addEventListeners();
    checkHighScore();
    gameLoop();
  }

  return {
    init: init,
    toggleOverlay: toggleOverlay
  }

}());
