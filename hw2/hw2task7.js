var isEquals = (0 == null);
var isNotEquals = (0 != null);
var isMoreOrEquals = (0 >= null);
var isMore = (0 > null);
var isLess = (0 < null);
var isLessOrEquals = (0 <= null);
var resultText = getResultText(isEquals, isNotEquals, isMore, isMoreOrEquals, isLess, isLessOrEquals);
addResultToDocument(7, resultText + " Причина подобного - приведение типов, которое, почему-то в > и >= работает, а в == нет.");

function getResultText(isEquals, isNotEquals, isMore, isMoreOrEquals, isLess, isLessOrEquals) {
    return "0 == null: " + isEquals + "; " + 
    "0 != null: " + isNotEquals + "; " +
    "0 >= null: " + isMoreOrEquals + "; " +
    "0 > null: " + isMore + "; " +
    "0 < null: " + isLess + "; " +
    "0 <= null: " + isLessOrEquals + ".";
}


