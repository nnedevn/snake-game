SNAKE.apple = function () {
  //TO DO : remove this cellSize and hook it up to the game one
  let cellSize = 10;
  let position = [8, 8];
  let radius = cellSize / 2;

  function randomGenerator(rangeMin, rangeMax) {
    rangeMin = Math.ceil(rangeMin);
    rangeMax = Math.floor(rangeMax);

    return Math.round((Math.floor(Math.random() * ((rangeMax - rangeMin) + 1)) + rangeMin));
  }
  // generate new position
  function setRandomPosition() {
    position = [randomGenerator(1, 58), randomGenerator(2, 58)];
  }

  function draw(canvasContext) {
    let x = position[0] * cellSize;
    let y = position[1] * cellSize;

    canvasContext.save();
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(x, y, cellSize, cellSize);
    canvasContext.fill();
    canvasContext.restore();
  }

  function getPosition() {
    return position;
  }
  /*Reveal Modules: */
  return {
    draw: draw,
    getPosition: getPosition,
    setRandomPosition: setRandomPosition
  }
}
