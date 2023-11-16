

function addNumber(number) {

  display.value += number;
}

function addOperator(operator) {
  const display = document.getElementById("display");
  
  if (display.value.trim().length === 0) {
    return; 
  }

  if (isOperator(display.value.slice(-1))) {
    return;
  }

  display.value += operator;
  
}


function isOperator(character) {
  const operators = ['+', '-', '*', '/','.'];
  return operators.includes(character);
}


function addDecimal(decimal){
  
  if (isOperator(display.value.slice(-1))){
    return;
  }
  display.value += decimal;
}

function cleardisplay() {
  display.value = " ";
}

function getdisplay() {
 
  display.value = eval(display.value);

}



var buttons = document.getElementsByClassName('button-click');

for(var i=0; i<buttons.length;i++ ){

  buttons[i].addEventListener("click", function() {
  
  var audio = document.getElementById('sound');
  audio.currentTime = 0;
  audio.play();
  
  })
}
