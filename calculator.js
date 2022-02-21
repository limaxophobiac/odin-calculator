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