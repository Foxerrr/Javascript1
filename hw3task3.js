var resultText = "";
var basket = [
    {
        title: "Товар 1",
        price: 100,
        number: 1
    },
    {
        title: "Товар 2",
        price: 200,
        number: 2
    },
    {
        title: "Товар 3",
        price: 300,
        number: 3
    }
];

function getCost(goods) {
    var result = 0;
    for (var i in goods) {
        result += goods[i].price * goods[i].number;
    }
    return result;
}

function basketToString(goods) {
    var result = "{";
    for (var i in goods) {
        result += goods[i].number + " x " + goods[i].title + " (" + goods[i].price + '); ';
    }
    result += "}";
    return result;
}

resultText = "Корзина: " + basketToString(basket) + ". Сумма товаров всей корзины: " + getCost(basket);
console.log(resultText);

addResultToDocument(3, resultText);