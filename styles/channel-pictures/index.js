//CALCULATOR PROGRAM

const display =document.getElementById("display");

function appendToDisplay(input){
    clearDisplay
    display.value += input;

}
 
function clearDisplay{
    display.value = "";
}

function calculate{
    try{
        display.value =eval(display.value);
    }

}