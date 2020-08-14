var a = prompt("Введите a:");
var b = prompt("Введите b:");
var operation = prompt("Введите операцию (+, -, *, /):");
var resultText;

if (isCancelForNumbers(a) || isCancelForNumbers(b) || isCancel(operation) || isIncorrectOperation(operation)) {
    resultText = getTextOfIncorrectPrompt();
    alert(resultText);
} else {
    resultText = getTextOfResult(a, b, operation, mathOperation(a, b, operation));
    alert(resultText);
}

addResultToDocument(6, resultText);

function mathOperation(a, b, operation) {
    switch (operation) {
        case '+':
            return sum(a, b);
        case '-':
            return sub(a, b);
        case '*':
            return mul(a, b);
        case '/':
            return div(a, b);
    }
}

function isIncorrectOperation(operation) {
    return (operation != '+') && (operation != '-') && (operation != '*') && (operation != '/');
}

function getTextOfResult(a, b, operation, result) {
    return a + " " + operation + " " + b + " = " + result;
}