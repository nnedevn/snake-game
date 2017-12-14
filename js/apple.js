SNAKE.apple = function() {

  //TO DO : remove this cellSize and hook it up to the game one
  let cellSize = 10;

  let position = [8, 8];

  //let radius = SNAKE.cellSize / 2;  
  let radius = cellSize / 2;

  function randomGenerator(rangeMin, rangeMax) {
    rangeMin = Math.ceil(rangeMin);
    rangeMax = Math.floor(rangeMax);

    return Math.round((Math.floor(Math.random() * ((rangeMax - rangeMin) + 1)) + rangeMin) / 100) * 10;

  }

  // generate new position
  function setRandomPosition() {
    
  }

  //check if the applie is eaten

  function draw(canvasContext) {

    let x = position[0] * cellSize ;
    let y = position[1] * cellSize ;

    console.log("apple coordinates", position);
    canvasContext.save();

    canvasContext.fillStyle = 'red';
    // canvasContext.beginPath();

    // WHY!?!?!
    canvasContext.fillRect(x, y, cellSize, cellSize);
    // canvasContext.arc(x - radius, y + radius, 5, 0, 2 * Math.PI, true);
    canvasContext.fill();

    canvasContext.restore();
  }

  function getPosition(){
    return position;
  }

  return {
    draw: draw,
    getPosition: getPosition,
    test: 'lalala'

  }

}