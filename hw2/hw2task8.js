var a = prompt("Введите число:");
var b = prompt("Введите степень:");
var resultOfText;
if (isCancelForNumbers(a) || isCancelForNumbers(b)) {
    resultText = getTextOfIncorrectPrompt();
} else {
    resultText = a + " ^ " + b + " = " + power(a, b);
    alert(resultText);
}

addResultToDocument(8, resultText);


function power(val, pow) {
    //val^0 = 1
    var result = 1;

    if (pow != 0) {
        result = power(val, pow - 1) * val;   
    }
    
    return result;
}