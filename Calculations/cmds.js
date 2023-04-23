var num1 = parseFloat("13");
var num2 = parseFloat("26")

function add() {
    var num1 = parseFloat(prompt("Enter the first number: ", "")); //Input answer and converts from string to int
    var num2 = parseFloat(prompt("Enter the second number: ", "")); //Input answer and converts from string to int
    var sum = num1 + num2; //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
}
function sub() {
    var num1 = parseFloat(prompt("Enter first number: ", num1)); //Input answer and converts from string to int
    var num2 = parseFloat(prompt("Enter the second number: ", num2)); //Input answer and converts from string to int
    var sum = num1 - num2; //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
}

function mult() {
    var num1 = parseFloat(prompt("Enter first number: ", num1)); //Input answer and converts from string to int
    var num2 = parseFloat(prompt("Enter the second number: ", num2)); //Input answer and converts from string to int
    var sum = num1 * num2; //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
    }

function divi() {
    var num1 = parseFloat(prompt("Enter first number: ", num1)); //Input answer and converts from string to int
    var num2 = parseFloat(prompt("Enter the second number: ", num2)); //Input answer and converts from string to int
    var sum = num1 / num2; //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
}

function modu() {
    var num1 = parseFloat(prompt("Enter first number: ", num1)); //Input answer and converts from string to int
    var num2 = parseFloat(prompt("Enter the second number: ", num2)); //Input answer and converts from string to int
    var sum = parseFloat(num1 % num2); //Calculations
    document.getElementById('output').innerHTML = "Your answer is " + sum; //Output
}

function sqr() {
        alert("Sry, square doesn't work. Use multiplication.");
        console.log("\"Sry, square doesn't work. Use multiplication.\"")
    document.getElementByID('output').innerHTML = "Sry, square doesn't work. Use multiplication."; //Output 
}