//button queries
const btn0 = document.querySelector('.zero');
const btn1 = document.querySelector('.one');
const btn2 = document.querySelector('.two');
const btn3 = document.querySelector('.three');
const btn4 = document.querySelector('.four');
const btn5 = document.querySelector('.five');
const btn6 = document.querySelector('.six');
const btn7 = document.querySelector('.seven');
const btn8 = document.querySelector('.eight');
const btn9 = document.querySelector('.nine');

const btnSum = document.querySelector('.add');
const btnMinus = document.querySelector('.minus');
const btnTimes = document.querySelector('.times');
const btnDiv = document.querySelector('.divide');
const btnEquals = document.querySelector('.equals');
const btnClear = document.querySelector('.clear');

//display logic
const displayResult = document.querySelector('.displayText');
const displayInput = document.querySelector(".currentInput");
btn0.addEventListener('click', () => displayInput.textContent += 0);
btn1.addEventListener('click', () => displayInput.textContent += 1);
btn2.addEventListener('click', () => displayInput.textContent += 2);
btn3.addEventListener('click', () => displayInput.textContent += 3);
btn4.addEventListener('click', () => displayInput.textContent += 4);
btn5.addEventListener('click', () => displayInput.textContent += 5);
btn6.addEventListener('click', () => displayInput.textContent += 6);
btn7.addEventListener('click', () => displayInput.textContent += 7);
btn8.addEventListener('click', () => displayInput.textContent += 8);
btn9.addEventListener('click', () => displayInput.textContent += 9);
//clear
function clearEquation()
{
    currentEquation.numberA=undefined;
    currentEquation.numberB=undefined;
    currentEquation.operator=undefined;
}

//sum
btnSum.addEventListener('click', ()=>{
    displayInput.textContent += ' + ';
    calc('+');
});

//minus
btnMinus.addEventListener('click', ()=> {
    displayInput.textContent += ' - ';
    calc('-');
});

//times
btnTimes.addEventListener('click', ()=>{
    displayInput.textContent += ' * ';
    calc('*');
    });

//div
btnDiv.addEventListener('click', ()=> {
    displayInput.textContent += ' / ';
    calc('/');
    });
btnClear.addEventListener('click', ()=>{
    displayInput.textContent = '';
    displayResult.textContent ='';
    clearEquation();
    });
//main calculation
let currentEquation = {numberA: undefined,
                        operator: undefined,
                        numberB: undefined};

function calc(operator) 
{
    if(currentEquation.numberA==undefined)
    {
    let temp = displayInput.textContent.split(' ');
    const thisIndex = temp.findIndex((oper) => oper == `${operator}`);
    currentEquation.numberA = parseInt(temp[thisIndex-1]);
    currentEquation.operator = operator;
    console.log(currentEquation)
    }
    else if(currentEquation.numberA != undefined)
    {
        console.log(currentEquation);
    let temp = displayInput.textContent.split(' ');
    const thisIndex = temp.findIndex((oper) => oper == 
        `${currentEquation.operator}`);
        currentEquation.numberB = parseInt(temp[thisIndex+1]);
        
        displayResult.textContent = (operate(currentEquation.numberA, 
            currentEquation.numberB, 
            currentEquation.operator));
        
        let result = (displayResult.textContent.split('='));
    displayInput.textContent = parseInt(result[1])+' '+operator+' ';
    currentEquation.numberA = parseInt(result[1]);
    currentEquation.operator = operator;
    }
}
btnEquals.addEventListener('click', () =>{
    let temp = displayInput.textContent.split(' ');
    if (temp.length == 3)
    {
    console.log(temp);
    displayResult.textContent = operate(parseInt(temp[0]), 
                            parseInt(temp[2]),temp[1]);
    displayInput.textContent = '';
    clearEquation();
    }
    if (currentEquation.numberB==undefined)
    {
        clearEquation();
        displayInput.textContent='';
        displayResult.textContent='';
        alert('nope');
    }
})

// basic operation logic
function add(a,b)
{
    return a+b;
};

function substract(a,b)
{
    return a-b;
};

function multiply(a,b)
{
    return a*b;
};

function divide(a,b)
{
    if(a!=0 && b!=0)
    {
    return a/b;
    }
    else
    {
        clearEquation();
        displayInput.textContent='';
        displayResult.textContent='';
        alert('Calculated user IQ: NaN');
    }
};

function operate(numA, numB, operator)
{
    if(operator == '+')
    {
    return numA + `${operator}` + numB +'='+add(numA, numB);
    }
    else if(operator=='-')
    return numA + `${operator}` + 
            numB +'='+substract(numA, numB);
    else if(operator=='*')
    return numA + `${operator}` + 
            numB +'='+multiply(numA, numB);
    else if(operator=='/')
    return numA + `${operator}` + 
            numB +'='+divide(numA, numB);
}