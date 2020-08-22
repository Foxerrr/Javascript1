var resultText;

var number = prompt("Введите число: ");

if (isCancelForNumbers(number)) {
    resultText = "Некорректный ввод";
    alert(resultText);
} else {

    var resultObject = convertToObject(number);

    if (resultObject === null) {
        resultText = "Некорретный ввод. " + resultObject;
        console.log(resultText);
        alert(resultText);    
    } else {
        resultText = "Было введено: " + number + ". Результат: " + resultObject.toString();
        alert(resultText);
    }

}

function PartsOfNumber(number) {
    this.hundreds = Math.floor(number / 100);
    this.tens = Math.floor(number % 100 / 10);
    this.units = Math.floor(number % 100 % 10);
    this.toString = function() {
        return "Единицы: " + this.units + ", десятки: " + this.tens + ", сотни: " + this.hundreds;
    };
}

function convertToObject(number) {
    if (number < 0 || number > 999) {
        return null;
    } else {
        return new PartsOfNumber(number);
    }
    
}

addResultToDocument(1, resultText);