let pers = []
let perm = []
let perd = []
function seven() {
    let element = document.querySelector(".input")
    element.textContent = element.textContent + 7
}
function eight() {
    let element = document.querySelector(".input")
    element.textContent = element.textContent + 8
}
function nine() {
    let element = document.querySelector(".input")
    element.textContent = element.textContent + 9
}
function four() {
    let element = document.querySelector(".input")
    element.textContent = element.textContent + 4
}
function five() {
    let element = document.querySelector(".input")
    element.textContent = element.textContent + 5
}
function six() {
    let element = document.querySelector(".input")
    element.textContent = element.textContent + 6
}
function one() {
    let element = document.querySelector(".input")
    element.textContent = element.textContent + 1
}
function two() {
    let element = document.querySelector(".input")
    element.textContent = element.textContent + 2
}
function three() {
    let element = document.querySelector(".input")
    element.textContent = element.textContent + 3
}
function zero() {
    let element = document.querySelector(".input")
    element.textContent = element.textContent + 0
}
function c() {
    let element = document.querySelector(".input");
    element.textContent = "";
}
function slice(){
    let element = document.querySelector(".input")
    element.textContent = element.textContent.slice(0, element.textContent.length - 1)
}
function summ() {
    sign = "+";
    let element = document.querySelector(".input");
    number1 = Number(element.textContent);
    element.textContent = "";
    return sign, number1;
}
function multiple() {
    sign = "*";
    let element = document.querySelector(".input");
    number1 = Number(element.textContent);
    element.textContent = "";
    console.log(sign, number1);
    return sign, number1;
}
function del() {
    sign = "/";
    let element = document.querySelector(".input");
    number1 = Number(element.textContent);
    element.textContent = "";
    console.log(sign, number1);
    return sign, number1;
}
function min() {
    sign = "-";
    let element = document.querySelector(".input");
    number1 = Number(element.textContent);
    element.textContent = "";
    console.log(sign, number1);
    return sign, number1;
}
function equel(){
    console.log(perm)
    let element = document.querySelector(".input");
    let number2 = Number(element.textContent);
    let result = 0;
    if (sign === "+") {
        result = number1 + number2;
        console.log(result);
        element.textContent = result;
    }
    else if (sign === "*") {
        result = number1 * number2;
        element.textContent = result;
    }
    else if (sign === "/") {
        result = number1 / number2;
        element.textContent = result;
    }
    else {
        result = number1 - number2
        element.textContent = result
    }
}