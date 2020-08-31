var tempC = prompt("Задание 1. Введите температуру по Цельсию:", 0);
var tempF = convertTemperature(tempC);

if (isNaN(tempF)) {
    alert("Введено некорректное значение.");
} else {
    alert("Температура по Фаренгейту будет: " + tempF);
}

function convertTemperature(t) {
    return (9 / 5) * t + 32;
}