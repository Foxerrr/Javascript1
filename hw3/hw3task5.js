var resultText = "";
var numberOfRows = 20;

var row = '';

for(var j = 0; j < numberOfRows; j++) {
    row = '';
    for (var i = 0; i <= j; i++) {
        row += "*";
    }
    resultText += row + "<br>";
    row += "\n";
    console.log(row);
}

addResultToDocument(5, resultText);