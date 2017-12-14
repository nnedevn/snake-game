
function randomGenerator(rangeMin, rangeMax){
 

  rangeMin = Math.ceil(rangeMin);
  rangeMax = Math.floor(rangeMax);
  

  // return Math.floor(Math.random() *10) *10

  return Math.round((Math.floor(Math.random() *( (rangeMax - rangeMin) +1 )) + rangeMin)/10) *10;

}

arr = Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,);
filledArr = []


arr.forEach( function(item) {

filledArr.push(randomGenerator(0,200));


});
console.log(filledArr);//