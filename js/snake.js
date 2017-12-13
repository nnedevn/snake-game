SNAKE.snake = function() {
  let posArr = [];
  let cellSize = 10;
  //starting snake length of 3 squares
  posArr.push([6, 4]);
  posArr.push([5, 4]);
  posArr.push([4, 4]);
  posArr.push([3, 4]);
  posArr.push([2, 4]);
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
        console.log('Not sure how you got here but congrats.')
    }

    //next position at the start
    posArr.unshift(nextPos);
    //remove the last position
    posArr.pop();
  }
  //checks if the input directin is contained withing the possible directions array. 
  function directionIsValid(inputDirection, movingDirection) {
    // console.log('movingDirection',movingDirection);
    console.log('inputDirection', inputDirection);
    let possibleDirections = [];

    if (movingDirection === 'up' || movingDirection === 'down') {
      possibleDirections = ['left', 'right'];
    } else if (movingDirection === 'left' || movingDirection === 'right') {
      possibleDirections = ['up', 'down'];
    }

    return (possibleDirections.includes(inputDirection));
  }

  function setDirection(inputDirection) {

    console.log('current direction', direction);

    if (directionIsValid(inputDirection, direction)) {
      console.log('setting movement direction to ', inputDirection);
      direction = inputDirection;

    }

  }

  return {
    drawSnake: drawSnake,
    advance: advance,
    setDirection: setDirection
  }



};