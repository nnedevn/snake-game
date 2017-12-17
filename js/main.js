document.addEventListener('DOMContentLoaded', () => {
  //start the game
  SNAKE.game.init();


  //restart the game when Play Again button is clicked
  let restartButton = document.getElementById('play-again-button');
  restartButton.addEventListener('click', function() {
    SNAKE.game.init();
  });

})