var resultText = "";
var number = 0;
while (number <= 100) {
    if (isPrimeNumber(number) && number > 1) {
        if (resultText == "") {
            resultText += number;
        } else {
            resultText += (", " + number);
        }
        console.log(number);
    }
    number++;
}

function isPrimeNumber(number) {
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        } 
    }
    return true;
}

addResultToDocument(1, resultText);