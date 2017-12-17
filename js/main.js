document.addEventListener('DOMContentLoaded', () => {
  SNAKE.game.init();

let restartButton = document.getElementById('play-again-button');
    
      restartButton.addEventListener('click', function(){
        SNAKE.game.init();
      });


})


