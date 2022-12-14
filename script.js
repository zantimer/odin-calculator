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
const btnDot = document.querySelector('.dot');
const buttons = document.querySelectorAll('.button');

const btnSum = document.querySelector('.add');
const btnMinus = document.querySelector('.minus');
const btnTimes = document.querySelector('.times');
const btnDiv = document.querySelector('.divide');
const btnEquals = document.querySelector('.equals');
const btnClear = document.querySelector('.clear');
const btnBack = document.querySelector('.backspace');

const operators = document.querySelector('.operators');
let dotRemoval = undefined;

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
//keyboard support

document.addEventListener('keydown', (e) =>{
    //numbers
    console.log(e.key);
    if (e.key == '1')
    {
        displayInput.textContent += 1;
    }
    else if (e.key == '2')
    {
        displayInput.textContent += 2;
    }
    else if (e.key == '3')
    {
        displayInput.textContent += 3;
    }
    else if (e.key == '4')
    {
        displayInput.textContent += 4;
    }
    else if (e.key == '5')
    {
        displayInput.textContent += 5;
    }
    else if (e.key == '6')
    {
        displayInput.textContent += 6;
    }
    else if (e.key == '7')
    {
        displayInput.textContent += 7;
    }
    else if (e.key == '8')
    {
        displayInput.textContent += 8;
    }
    else if (e.key == '9')
    {
        displayInput.textContent += 9;
    }
    else if (e.key == '0')
    {
        displayInput.textContent += 0;
    }
    //operators
    else if (e.key == '+')
    {
        displayInput.textContent += ' + ';
        calc('+');
    }
    else if (e.key == '-')
    {
        displayInput.textContent += ' - ';
        calc('-');
    }
    else if (e.key == '/')
    {
        displayInput.textContent += ' / ';
        calc('/');
    }
    else if (e.key == '*')
    {
        displayInput.textContent += ' * ';
        calc('*');
    }
    else if (e.key == '='||e.key=='Enter')
    {
        equalCalc();
    }
    else if (e.key == 'Backspace'||e.key=='Delete')
    {
        deleteLast();
    }
    else if (e.key == 'Escape')
    {
        clearEquation();
        displayInput.textContent='';
        displayResult.textContent='';
    }
    else if (e.key == '.')
    {
        if(dotRemoval==undefined)
        {
        displayInput.textContent += '.';
        }
    if(displayInput.textContent.includes('.')&&dotRemoval==undefined)
    {
        dotRemoval = operators.removeChild(btnDot);
    }
    }
})

//clear
function clearEquation()
{
    currentEquation.numberA=undefined;
    currentEquation.numberB=undefined;
    currentEquation.operator=undefined;
}
//backspace
btnBack.addEventListener('click', deleteLast);
function deleteLast()
{
    let string = displayInput.textContent;
    displayInput.textContent = string.substring(0, string.length-1);
}
//dot
btnDot.addEventListener('click',()=>{
    displayInput.textContent += '.';
    if(displayInput.textContent.includes('.'))
    {
        dotRemoval = operators.removeChild(btnDot);
    }
})

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
    
//clear
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
    if (dotRemoval != undefined)
    {
        operators.appendChild(dotRemoval);
    }
    if(currentEquation.numberA==undefined)
    {
    let temp = displayInput.textContent.split(' ');
    const thisIndex = temp.findIndex((oper) => oper == `${operator}`);
    currentEquation.numberA = parseFloat(temp[thisIndex-1]);
    currentEquation.operator = operator;
    console.log(currentEquation)
    }
    else if(currentEquation.numberA != undefined)
    {
        console.log(currentEquation);
    let temp = displayInput.textContent.split(' ');
    const thisIndex = temp.findIndex((oper) => oper == 
        `${currentEquation.operator}`);
        currentEquation.numberB = parseFloat(temp[thisIndex+1]);
        
        displayResult.textContent = operate(currentEquation.numberA, 
            currentEquation.numberB, 
            currentEquation.operator);
        
        let result = (displayResult.textContent.split('='));
    displayInput.textContent = parseFloat(result[1])+' '+operator+' ';
    currentEquation.numberA = parseFloat(result[1]);
    currentEquation.operator = operator;
    }
}
btnEquals.addEventListener('click', () =>{
    equalCalc();
})

function equalCalc() {
    if (dotRemoval != undefined) {
        operators.appendChild(dotRemoval);
    }

    let temp = displayInput.textContent.split(' ');
    if (temp.length == 3) {
        console.log(temp);
        currentEquation.numberA = parseFloat(temp[0]);
        currentEquation.operator = temp[1];
        currentEquation.numberB = parseFloat(temp[2]);
        displayResult.textContent = operate(currentEquation.numberA,
            currentEquation.numberB,
            currentEquation.operator);
        displayInput.textContent = '';

    }
    if (currentEquation.numberB == undefined) {
        displayInput.textContent = '';
        displayResult.textContent = '';
        alert('nope');
    }
    clearEquation();
}

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
    return numA + ` ${operator} ` 
            + numB +' = '+add(numA, numB);
    }
    else if(operator=='-')
    return numA + ` ${operator} ` + 
            numB +' = '+substract(numA, numB);
    else if(operator=='*')
    return numA + ` ${operator} ` + 
            numB +' = '+multiply(numA, numB);
    else if(operator=='/')
    return numA + ` ${operator} ` + 
            numB +' = '+divide(numA, numB);
}