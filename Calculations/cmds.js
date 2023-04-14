function add() {
    let num1 = parseFloat(prompt("Enter first number: ", "13")); //Input answer and converts from string to int
    let num2 = parseFloat(prompt("Enter the second number: ", "25")); //Input answer and converts from string to int
    let sum = parseInt(num1 + num2); //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
}
function sub() {
    let num1 = parseFloat(prompt("Enter first number: ", "13")); //Input answer and converts from string to int
    let num2 = parseFloat(prompt("Enter the second number: ", "25")); //Input answer and converts from string to int
    let sum = parseInt(num1 - num2); //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
}

function mult() {
    let num1 = parseFloat(prompt("Enter first number: ", "13")); //Input answer and converts from string to int
    let num2 = parseFloat(prompt("Enter the second number: ", "25")); //Input answer and converts from string to int
    let sum = parseInt(num1 * num2); //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
    }

function divi() {
    let num1 = parseFloat(prompt("Enter first number: ", "13")); //Input answer and converts from string to int
    let num2 = parseFloat(prompt("Enter the second number: ", "25")); //Input answer and converts from string to int
    let sum = parseInt(num1 / num2); //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
}

function modu() {
    let num1 = parseFloat(prompt("Enter first number: ", "13")); //Input answer and converts from string to int
    let num2 = parseFloat(prompt("Enter the second number: ", "25")); //Input answer and converts from string to int
    let sum = parseInt(num1 % num2); //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
}

function sqr() {
    let num = parseFloat(prompt("Enter the number to square:", "")); //Input answer
    let sum = num * num; //Square
    document.getElementByID('output').innerHTML = "Your answer is " + sum; //Output 
}