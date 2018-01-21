SNAKE.snake = function() {
  let posArr = [];
  let cellSize = 10;
  let head;
  // starting snake length
  posArr.push([6, 4], [5, 4], [4, 4], [3, 4], [2, 4], [1, 4]);
  let direction = 'right';

  function drawSection(canvasContext, pos, color) {
    canvasContext.save();
    canvasContext.fillStyle = color;
    let x = cellSize * pos[0];
    let y = cellSize * pos[1];
    canvasContext.fillRect(x, y, cellSize, cellSize);
    canvasContext.fill();
    canvasContext.restore();
  }

  function drawSnake(canvasContext) {
    for (let i = 0; i < posArr.length; i += 1) {
      switch (i % 2) {
        case 0:
          drawSection(canvasContext, posArr[i], 'green');
          break;
        case 1:
          drawSection(canvasContext, posArr[i]), 'black';
      }
    }
  }
  /* advance moves the snake and is resonsible for checking if the snake is eating the apple and score
  * @param {obj} apple
  **/
  function advance(apple) {
    let nextPos = posArr[0].slice();

    switch (direction) {
      case 'left':
        nextPos[0] -= 1;
        break;
      case 'right':
        nextPos[0] += 1;
        break;
      case 'up':
        nextPos[1] -= 1;
        break;
      case 'down':
        nextPos[1] += 1;
        break;
      default:
        console.log('Not sure how you got here but congrats.');
    }

    if (eatingApple(apple)) {
      SNAKE.score+=10;
      console.log(SNAKE.score);
      posArr.push(apple.getPosition());
      apple.setRandomPosition();
    }
    //next position at the start
    posArr.unshift(nextPos);
    //remove the last position
    posArr.pop();
  }
  //checks if the input direction is contained withing the possible directions array.
  function directionIsValid(inputDirection, movingDirection) {
    let possibleDirections = [];

    if (movingDirection === 'up' || movingDirection === 'down') {
      possibleDirections = ['left', 'right'];
    } else if (movingDirection === 'left' || movingDirection === 'right') {
      possibleDirections = ['up', 'down'];
    }

    return (possibleDirections.includes(inputDirection));
  }

  function setDirection(inputDirection) {
    if (directionIsValid(inputDirection, direction)) {
      direction = inputDirection;
    }
  }
  //check if the coordinates of the head are contained within the rest of the body
  function checkCollision() {
    head = posArr[0];
    let tail = posArr.slice(1);

    let headX = head[0];
    let headY = head[1];

    let minX = 1;
    let minY = 1;
    let maxX = SNAKE.width / cellSize - 2; // to account for the border
    let maxY = SNAKE.height / cellSize - 2;
    //ckeck if the head's coordinates are the same as the coordinates of the rest of the tail
    for (let i = 0; i < tail.length; i += 1) {
      if (equalCoordinates(head, tail[i])) {
        return true;
      }
    }
    // X axis wall collision
    if (headX < minX || headX > maxX) {
      return true;
    }

    // Y axis collision
    if (headY < minY || headY > maxY) {
      return true;
    }
  }

  function eatingApple(apple) {
    if (equalCoordinates(head, apple.getPosition())) {
      return true;
    };
  }

  function equalCoordinates(xy1, xy2) {
    if (xy1[0] === xy2[0] && xy1[1] === xy2[1]) {
      return true;
    }
  }
  /*Reveal Modules: */
  return {
    drawSnake: drawSnake,
    advance: advance,
    setDirection: setDirection,
    checkCollision: checkCollision,
    cellSize: cellSize,
    eatingApple: eatingApple,
    equalCoordinates: equalCoordinates
  }



};
