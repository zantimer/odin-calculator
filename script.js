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
const displayText = document.querySelector('.displayText');
btn0.addEventListener('click', () => displayText.textContent += 0);
btn1.addEventListener('click', () => displayText.textContent += 1);
btn2.addEventListener('click', () => displayText.textContent += 2);
btn3.addEventListener('click', () => displayText.textContent += 3);
btn4.addEventListener('click', () => displayText.textContent += 4);
btn5.addEventListener('click', () => displayText.textContent += 5);
btn6.addEventListener('click', () => displayText.textContent += 6);
btn7.addEventListener('click', () => displayText.textContent += 7);
btn8.addEventListener('click', () => displayText.textContent += 8);
btn9.addEventListener('click', () => displayText.textContent += 9);
//sum
btnSum.addEventListener('click', ()=>displayText.textContent += ' + ');

//minus
btnMinus.addEventListener('click', ()=>displayText.textContent += ' - ');

//times
btnTimes.addEventListener('click', ()=>displayText.textContent += ' * ');

//div
btnDiv.addEventListener('click', ()=>displayText.textContent += ' / ');

btnClear.addEventListener('click', ()=>displayText.textContent = '');
//main calculation
btnEquals.addEventListener('click', ()=>{
    
    const equation = displayText.textContent.split(' ');
    console.log(equation);
    let result = 0;
    let newEquationLeft;
    let newEquationRight;
    if (equation.includes('*'))
    {
    for (let i=0;i<equation.length;i++)
    {
        if(equation[i] == '*')
        {
            result += multiply(equation[i-1], equation[i+1])
            if (equation.length > 3 
                && equation[i-1] != equation[0] 
                && equation[i+1] != equation[equation.length-1])
            {
                equation[i-1] = result;
                equation[i+1] = result;
            }
            else if(equation.length>3
                && equation[i-1]==equation[0])
                {
                    equation[i+1]=result;
                }
            else if(equation.length>3
                && equation[i-1]!=0
                && equation[i+1]==equation[equation.length-1])
                {
                    equation[i-1] = result;
                }
        }
    }
    }
    if (equation.includes('/'))
    {
    for (let i=0;i<equation.length;i++)
    {
        if(equation[i] == '/')
        {
            result = divide(equation[i-1], equation[i+1])
        }
    }
    }
    displayText.textContent = result;
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
        return 'get outta here';
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