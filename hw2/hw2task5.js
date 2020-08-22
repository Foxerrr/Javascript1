var a = prompt("Введите a:");
var b = prompt("Введите b:");
var resultText;

if (isCancelForNumbers(a) || isCancelForNumbers(b)) {
    resultText = getTextOfIncorrectPrompt();
    alert(resultText);
} else {
    resultText = getTextOfResult(a, b);
    alert(resultText);
}

addResultToDocument(5, resultText);

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function getTextOfResult(a, b) {
    return a + " + " + b + " = " + sum(a, b) +"; " +
    a + " + " + b + " = " + sub(a, b) +"; " +
    a + " + " + b + " = " + mul(a, b) +"; " +
    a + " + " + b + " = " + div(a, b);
}