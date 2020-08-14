var a = prompt("Введите a:");
var resultText;

if ((isCancelForNumbers(a)) || (a < 0) || (a > 15)) {
    resultText = getTextOfIncorrectPrompt();
    alert(resultText);
} else {
    //использовал только default, т.к использовал рекурсию
    switch (a) {
        default:
            resultText = getResultMessage(getOtherValues(a));
            alert(resultText);
            break;
    }
}

addResultToDocument(4, resultText);


function getOtherValues(a) {
    var result = +a;

    if (a == 15) {
        return a;
    }

    return result += ", " + getOtherValues(result + 1);
}

function getResultMessage(values) {
    return "При a = " + a + " результат: " + values;
}