let numbers = document.querySelectorAll('.operand')
let operator = document.querySelectorAll('.operator')
let display = document.querySelector('.display')
let clearButton = document.querySelector('.clear')
let equalButton = document.querySelector('.equals')
let negativeButton = document.querySelector('.sign')
let percentButton = document.querySelector('.percent')
let negative
let firstOperand
let secondOperand
let finalResult
let addition
let subtraction 
let division
let multiplication

display.textContent = 0

//reset calculator\\\
const reset = ()=>{
    display.textContent = 0
    if(finalResult){
        finalResult = 0
    }
}
clearButton.addEventListener('click', reset)

//write numbers on calc (checks if decimal was already written or not)\\
const writenumber = (e)=>{

    const dotExists = display.textContent.includes('.');

    if(display.textContent == 0 || display.textContent == finalResult){
        display.textContent = e.target.value
    }else if(e.target.value == '.' && !dotExists){
        display.append(e.target.value)
    }else if(e.target.value != '.'){
        display.append(e.target.value)
    }
}
//to target each of the number keys
numbers.forEach(number => {
    number.addEventListener('click', writenumber);
});


//do the math (decide what operator was clicked)\\
const doTheMath = (event)=>{

    switch (event.target.value){
        case '+': 
            add();
            break
        case '-': 
            subtract()
            break
        case '*': 
            multiply()
            break
        case '/': 
            divide()
            break
    }
}
//to target all of the operator keys\\
operator.forEach(operator => {
operator.addEventListener('click', doTheMath)
})


// sets the first operand and sets true what operator was used for final equation\\
const add = ()=>{

    firstOperand = Number(display.textContent)
    reset()
    return addition = true
}

const subtract = ()=>{

    firstOperand = Number(display.textContent)
    reset()
    return subtraction = true
}

const multiply = ()=>{

    firstOperand = Number(display.textContent)
    reset()
    return multiplication = true

}

const divide = ()=>{

    firstOperand = Number(display.textContent)
    reset()
    return division = true
}


// where the magic happens //
const equation = ()=>{
    secondOperand = Number(display.textContent)

    if(addition){
    finalResult = firstOperand + secondOperand
    display.textContent = finalResult
        return addition = false
    }

    if(subtraction){
    finalResult = firstOperand - secondOperand
    display.textContent = finalResult
        return subtraction = false
    }

    if(multiplication){
    finalResult = firstOperand * secondOperand
    display.textContent = finalResult
        return multiplication = false
    }

    if(division){
    finalResult = firstOperand / secondOperand
    display.textContent = finalResult
        return division = false
    }
}

equalButton.addEventListener('click', equation)


// negative positive number is pressed \\

const positiveNegative = () =>{
    if(display.textContent != 0){
        display.textContent = -display.textContent
        return negative = true
    }
    if(negative = true)
    display.textContent = +display.textContent
        return negative = false
}
negativeButton.addEventListener('click', positiveNegative)

// percent button is pressed //
