var num1 = 13.0;
var num2 = 26.0;
var sum = num1 + num2;

function add() {
    num1 = parseFloat(prompt("Enter the first number: ", num1)); //Input answer and converts from string to int
    num2 = parseFloat(prompt("Enter the second number: ", num2)); //Input answer and converts from string to int
    sum = num1 + num2; //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
}
function sub() {
    num1 = parseFloat(prompt("Enter first number: ", num1)); //Input answer and converts from string to int
    num2 = parseFloat(prompt("Enter the second number: ", num2)); //Input answer and converts from string to int
    sum = num1 - num2; //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
}

function mult() {
    num1 = parseFloat(prompt("Enter first number: ", num1)); //Input answer and converts from string to int
    num2 = parseFloat(prompt("Enter the second number: ", num2)); //Input answer and converts from string to int
    sum = num1 * num2; //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
    }

function divi() {
    num1 = parseFloat(prompt("Enter first number: ", num1)); //Input answer and converts from string to int
    num2 = parseFloat(prompt("Enter the second number: ", num2)); //Input answer and converts from string to int
    sum = num1 / num2; //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
}

function modu() {
    num1 = parseFloat(prompt("Enter first number: ", num1)); //Input answer and converts from string to int
    num2 = parseFloat(prompt("Enter the second number: ", num2)); //Input answer and converts from string to int
    sum = parseFloat(num1 % num2); //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
}

function sqr() {
    alert("Sry, square doesn't work. Use multiplication.");
    console.log("\"Sry, square doesn't work. Use multiplication.\"");
    document.getElementById('output').innerHTML = "Square doesn't work." + sum; //Output 
}

//Hope this fu... I mean, fruitful project works