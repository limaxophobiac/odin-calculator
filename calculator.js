const display = document.querySelector('#display');
let displayNumber = '0';


let inputArray = [];
let inputPushed = false;

const zero = document.querySelector('#b0');
const one = document.querySelector('#b1');
const two = document.querySelector('#b2');
const three = document.querySelector('#b3');
const four = document.querySelector('#b4');
const five = document.querySelector('#b5');
const six = document.querySelector('#b6');
const seven = document.querySelector('#b7');
const eight = document.querySelector('#b8');
const nine = document.querySelector('#b9');

const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#subtract');
const multBtn = document.querySelector('#multiply');
const divBtn = document.querySelector('#divide');
const eqBtn = document.querySelector('#equals');

const clrBtn = document.querySelector('#clear');

clrBtn.addEventListener("click", function() {
    inputArray = [];
    displayNumber='0';
    display.textContent = displayNumber;
    inputPushed = false;
});

addBtn.addEventListener("click", function(){
    saveInput("+");
    console.log(inputArray);
});

subBtn.addEventListener("click", function(){
    saveInput("-");
    console.log(inputArray);
});

multBtn.addEventListener("click", function(){
    saveInput("*");
    console.log(inputArray);
});

divBtn.addEventListener("click", function(){
    saveInput("/");
    console.log(inputArray);
});

eqBtn.addEventListener("click", function(){
    if (inputArray[inputArray.length -1] === "="){return}
    inputArray.push(displayNumber);
    let len = inputArray.length;
    displayNumber = operate(inputArray[len-2], inputArray[len-3], inputArray[len-1]);
    display.textContent = displayNumber;
    saveInput("=");
});

function saveInput(operation){
    if (!inputPushed){
        inputArray.push(displayNumber);
    }else if ("*+-/=".includes(inputArray[inputArray.length-1])) {
        let m = inputArray.pop();
        console.log(m);
    }
    inputArray.push(operation);
    inputPushed = true;
}

zero.addEventListener("click", function(){
    if (displayNumber === "0" || inputPushed){
        displayNumber = "0";
        inputPushed = false;
    } else{
        displayNumber = displayNumber + "0";
    }  
    display.textContent = displayNumber;
});

one.addEventListener("click", function(){
    if (displayNumber === "0" || inputPushed){
        displayNumber = "1";
        inputPushed = false;
    } else{
        displayNumber = displayNumber + "1";
    }  
    display.textContent = displayNumber;
});

two.addEventListener("click", function(){
    if (displayNumber === "0" || inputPushed){
        displayNumber = "2";
        inputPushed = false;
    } else{
        displayNumber = displayNumber + "2";
    }  
    display.textContent = displayNumber;
});

three.addEventListener("click", function(){
    if (displayNumber === "0" || inputPushed){
        displayNumber = "3";
        inputPushed = false;
    } else{
        displayNumber = displayNumber + "3";
    }  
    display.textContent = displayNumber;
});

four.addEventListener("click", function(){
    if (displayNumber === "0" || inputPushed){
        displayNumber = "4";
        inputPushed = false;
    } else{
        displayNumber = displayNumber + "4";
    }  
    display.textContent = displayNumber;
});

five.addEventListener("click", function(){
    if (displayNumber === "0" || inputPushed){
        displayNumber = "5";
        inputPushed = false;
    } else{
        displayNumber = displayNumber + "5";
    }  
    display.textContent = displayNumber;
});

six.addEventListener("click", function(){
    if (displayNumber === "0" || inputPushed){
        displayNumber = "6";
        inputPushed = false;
    } else{
        displayNumber = displayNumber + "6";
    }  
    display.textContent = displayNumber;
});

seven.addEventListener("click", function(){
    if (displayNumber === "0" || inputPushed){
        displayNumber = "7";
        inputPushed = false;
    } else{
        displayNumber = displayNumber + "7";
    }  
    display.textContent = displayNumber;
});

eight.addEventListener("click", function(){
    if (displayNumber === "0" || inputPushed){
        displayNumber = "8";
        inputPushed = false;
    } else{
        displayNumber = displayNumber + "8";
    }  
    display.textContent = displayNumber;
});

nine.addEventListener("click", function(){
    if (displayNumber === "0" || inputPushed){
        displayNumber = "9";
        inputPushed = false;
    } else{
        displayNumber = displayNumber + "9";
    }  
    display.textContent = displayNumber;
});




function add(a, b){return a+b;}
function subtract(a, b){return a-b;}
function multiply(a, b){return a*b;}
function divide(a,b){return a/b;}

function operate(operation, a, b){
    if (operation === '+'){return "" + add(Number(a),Number(b));}
    if (operation === '-'){return "" + subtract(Number(a),Number(b));}
    if (operation === '*'){return "" + multiply(Number(a),Number(b));}
    if (operation === '/'){return "" + divide(Number(a),Number(b));}
}