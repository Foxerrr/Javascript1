var a = prompt("Введите a:");
var b = prompt("Введите b:");
var result;
var resultText;

if (isCancelForNumbers(a) || isCancelForNumbers(b)) {
    resultText = getTextOfIncorrectPrompt();
    alert(resultText);
} else if (a >= 0 && b >= 0) {
    result = a - b;
} else if (a < 0 && b < 0) {
    result = a * b;
} else {
    result = a + b;
}

if (result !== undefined) {
    resultText = "При a = " + a + " и b = " + b + " результат равен " + result;
    alert(resultText);
}

addResultToDocument(3, resultText);