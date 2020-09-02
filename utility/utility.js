/*
 * Проверка на то, что была нажата кнопка "Отмена" при вызове prompt, либо что значение не число
 */
function isCancelForNumbers(resultOfPrompt) {
    //Единственный браузер, который не возвращает null при отмене ввода (prompt) – это Safari.
    return isNaN(resultOfPrompt) || isCancel(resultOfPrompt); 
}

function isCancel(resultOfPrompt) {
    return (resultOfPrompt == null) || (resultOfPrompt == "");
}

/*
 * Дополнение html для результата по каждому заданию
 */
function addResultToDocument(taskNumber, result) {
    var task;
    var resultText;
    if (isNaN(+taskNumber)) {
        task = createElement("H1", "Очередное задание.");
    }
    task = createElement("H1", "Задание " + taskNumber + ".");
    resultText = createElement("p", result);
    document.body.append(task);
    document.body.append(resultText);

}

function addElementToDocument(element) {
    document.body.innerHTML += element;
}

/*
 * Создание элемента для вставки на страницу
 */
function createElement(tag, text) {
    var element = document.createElement(tag);
    element.innerHTML = text;
    return element;
}

/*
 * Возвращает сообщение при неудачном prompt
 * P.S. Я пришёл из java, поэтому не уверен, как тут можно объявлять и передавать публичные константы
 */
function getTextOfIncorrectPrompt() {
    return "Введено некорректное значение.";
}