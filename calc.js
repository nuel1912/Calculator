// let values = document.querySelectorAll(".values");
let screen = document.getElementById("screen");
// let valu = document.getElementsByClassName("valu");

//Numbers...
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const zeros = document.getElementById("zeros");


//Operators and symbol...
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const decimal = document.getElementById("decimal");
const equal = document.getElementById("equal");


//Clear screen or blank screen...
const allClear = document.getElementById("all-clear");
const clear = document.getElementById("clear");


// valu.addEventListener("click", function () {
//     screen.value += value;
// })


//A simple click function that displays the user's value on the screen...
one.addEventListener("click", function () {
    screen.value += "1";
})
two.addEventListener("click", function () {
    screen.value += "2";
})
three.addEventListener("click", function () {
    screen.value += "3";
})
four.addEventListener("click", function () {
    screen.value += "4";
})
five.addEventListener("click", function () {
    screen.value += "5";
})
six.addEventListener("click", function () {
    screen.value += "6";
})
seven.addEventListener("click", function () {
    screen.value += "7";
})
eight.addEventListener("click", function () {
    screen.value += "8";
})
nine.addEventListener("click", function () {
    screen.value += "9";
})
zero.addEventListener("click", function () {
    screen.value += "0";
})
zeros.addEventListener("click", function () {
    screen.value += "00";
})


//A simple click function that displays the operators on the screen...
divide.addEventListener("click", function () {
    screen.value += "/";
})
multiply.addEventListener("click", function () {
    screen.value += "*";
})
subtract.addEventListener("click", function () {
    screen.value += "-";
})
add.addEventListener("click", function () {
    screen.value += "+";
})
decimal.addEventListener("click", function () {
    screen.value += ".";
})






allClear.addEventListener("click", function () {
    screen.value = "";
})
clear.addEventListener("click", function () {
    screen.value = screen.value.toString().slice(0,-1);
})



equal.addEventListener("click", function () {
    screen.value = eval(screen.value);
})





//I also want to 