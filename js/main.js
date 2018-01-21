document.addEventListener('DOMContentLoaded', () => {
/*Set up the canvas and add the "Play Again" click event listener */
  let restartButton = document.getElementById('play-again-button');
  restartButton.addEventListener('click', function() {
    SNAKE.game.toggleOverlay();
    SNAKE.game.init();
  });

})
