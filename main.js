//colorsArray
var numSquares = 6;
var colorsArr = randomColorArr(numSquares);
//selections
var squares = document.querySelectorAll('.square');
var reset = document.querySelector('#reset');
var easyMode = document.querySelector('#easyMode');
var hardMode = document.querySelector('#hardMode');
//display variables
var colorDisplay = document.querySelector('#colorDisplay');
var verifierDisplay = document.querySelector('#verifierDisplay');
var h1 = document.querySelector('h1');
//display
var pickColor = randomColor();
colorDisplay.textContent = pickColor;
//reset
reset.addEventListener('click', function(){
  colorsArr = randomColorArr(numSquares);
  pickColor = randomColor();
  colorDisplay.textContent = pickColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colorsArr[i];
    h1.style.backgroundColor='steelblue';
  }
  reset.textContent ='New Colors';
  verifierDisplay.textContent = '';
});

//Change Modes
  //easymode
easyMode.addEventListener('click', function(){
  //selected display
  easyMode.classList.add('selected');
  hardMode.classList.remove('selected');
  //reset
  numSquares = 3;
  colorsArr = randomColorArr(numSquares);
  pickColor = randomColor();
  colorDisplay.textContent = pickColor;
  verifierDisplay.textContent = '';
  reset.textContent ='New Colors';
  h1.style.backgroundColor='steelblue';
  for(var i = 0; i < squares.length; i++ ){
    if(colorsArr[i]){
      squares[i].style.backgroundColor = colorsArr[i];
    } else {
      squares[i].style.display = 'none'
    }
  }
})
  //hardmode
hardMode.addEventListener('click', function() {
  //selected display
  hardMode.classList.add('selected');
  easyMode.classList.remove('selected');
    //reset
    numSquares = 6;
    colorsArr = randomColorArr(numSquares);
    pickColor = randomColor();
    colorDisplay.textContent = pickColor;
    verifierDisplay.textContent = '';
    reset.textContent ='New Colors';
    h1.style.backgroundColor='steelblue';
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colorsArr[i];
        squares[i].style.display = 'block'
    }
})


//iteration
for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colorsArr[i];
  
  //events
  squares[i].addEventListener('click', function(){
    var currentColor = this.style.backgroundColor;
    if(pickColor === currentColor){
      verifierDisplay.textContent = 'Correct!';
      verifierDisplay.style.color = 'green';
      correctColors(currentColor);
      h1.style.backgroundColor = currentColor;
      reset.textContent = 'Play Again?';
    } else {
      verifierDisplay.textContent = 'Try Again';
      verifierDisplay.style.color = 'black'
      this.style.backgroundColor = '#272727'
    }
    })
}
function correctColors(color){
  for(var i = 0; i < squares.length; i++ ){
    squares[i].style.backgroundColor = color;
  }
}
function randomColor(){
  var random = Math.floor( Math.random() * colorsArr.length);
  return colorsArr[random];
}

function randomColorArr(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(randomRgbColors());
  }
  return arr;
}

function randomRgbColors(){
 var r = Math.floor(Math.random() * 256);
 var g = Math.floor(Math.random() * 256);
 var b = Math.floor(Math.random() * 256);
 var str = 'rgb('+ r + ', '+ g + ', ' + b+ ')';
 return str;
}