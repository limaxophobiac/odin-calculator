const display = document.querySelector('#display');
let displayNumber = '0';
let runningResult = '';


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

addBtn.addEventListener("click", function(){
    saveInput();
    console.log(inputArray);
    let result = 234;
});

function saveInput(){
    if (!inputPushed){
        inputArray.push(displayNumber);
    }
    inputPushed = true;
}

zero.addEventListener("click", function(){
    if (displayNumber === "0"){
        displayNumber = "0";
    } else{
        displayNumber = displayNumber + "0";
    }  
    display.textContent = displayNumber;
});

one.addEventListener("click", function(){
    if (displayNumber === "0"){
        displayNumber = "1";
    } else{
        displayNumber = displayNumber + "1";
    }  
    display.textContent = displayNumber;
});

two.addEventListener("click", function(){
    if (displayNumber === "0"){
        displayNumber = "2";
    } else{
        displayNumber = displayNumber + "2";
    }  
    display.textContent = displayNumber;
});

three.addEventListener("click", function(){
    if (displayNumber === "0"){
        displayNumber = "3";
    } else{
        displayNumber = displayNumber + "3";
    }  
    display.textContent = displayNumber;
});

four.addEventListener("click", function(){
    if (displayNumber === "0"){
        displayNumber = "4";
    } else{
        displayNumber = displayNumber + "4";
    }  
    display.textContent = displayNumber;
});

five.addEventListener("click", function(){
    if (displayNumber === "0"){
        displayNumber = "5";
    } else{
        displayNumber = displayNumber + "5";
    }  
    display.textContent = displayNumber;
});

six.addEventListener("click", function(){
    if (displayNumber === "0"){
        displayNumber = "6";
    } else{
        displayNumber = displayNumber + "6";
    }  
    display.textContent = displayNumber;
});

seven.addEventListener("click", function(){
    if (displayNumber === "0"){
        displayNumber = "7";
    } else{
        displayNumber = displayNumber + "7";
    }  
    display.textContent = displayNumber;
});

eight.addEventListener("click", function(){
    if (displayNumber === "0"){
        displayNumber = "8";
    } else{
        displayNumber = displayNumber + "8";
    }  
    display.textContent = displayNumber;
});

nine.addEventListener("click", function(){
    if (displayNumber === "0"){
        displayNumber = "9";
    } else{
        displayNumber = displayNumber + "9";
    }  
    display.textContent = displayNumber;
});




function add(a, b){return a+b;}
function subtract(a, b){return a-b;}
function multiply(a, b){return a*b;}
function divide(a,b){return a/b;}

function operator(operation, a, b){
    if (operation === 'add'){return add(a,b);}
    if (operation === 'subtract'){return subtract(a,b);}
    if (operation === 'multiply'){return multiply(a,b);}
    if (operation === 'divide'){return divide(a,b);}
}