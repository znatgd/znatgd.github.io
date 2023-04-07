function add() {
    var num1 = parseFloat(prompt("Enter first number: ", "13")); //Input answer and converts from string to int
    var num2 = parseFloat(prompt("Enter the second number: ", "25")); //Input answer and converts from string to int
    var sum = parseInt(num1 + num2); //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
}
function sub() {
    var num1 = parseFloat(prompt("Enter first number: ", "13")); //Input answer and converts from string to int
    var num2 = parseFloat(prompt("Enter the second number: ", "25")); //Input answer and converts from string to int
    var sum = parseInt(num1 - num2); //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
}

function mult() {
    var num1 = parseFloat(prompt("Enter first number: ", "13")); //Input answer and converts from string to int
    var num2 = parseFloat(prompt("Enter the second number: ", "25")); //Input answer and converts from string to int
    var sum = parseInt(num1 * num2); //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
    }
}

function div() {
    var num1 = parseFloat(prompt("Enter first number: ", "13")); //Input answer and converts from string to int
    var num2 = parseFloat(prompt("Enter the second number: ", "25")); //Input answer and converts from string to int
    var sum = parseInt(num1 / num2); //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
}

function modu() {
    var num1 = parseFloat(prompt("Enter first number: ", "13")); //Input answer and converts from string to int
    var num2 = parseFloat(prompt("Enter the second number: ", "25")); //Input answer and converts from string to int
    var sum = parseInt(num1 % num2); //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
}

function sqr() {
    var num = parseFloat(prompt("Enter the number to square:", "")); //Input answer
    var sum = parseFloat(num*num); //Square
    document.getElementByID('output').innerHTML = "Your answer is " + sum; //output
    
}