var resultText = "";
var basket = [
    {
        title: "Товар 1",
        price: 100
    },
    {
        title: "Товар 2",
        price: 200
    },
    {
        title: "Товар 3",
        price: 300
    }
];

function getCost(goods) {
    var result = 0;
    for (var i in goods) {
        result += goods[i].price;
    }
    return result;
}

function basketToString(goods) {
    var result = "{";
    for (var i in goods) {
        result += goods[i].title + " (" + goods[i].price + '); ';
    }
    result += "}";
    return result;
}

resultText = "Корзина: " + basketToString(basket) + ". Сумма товаров всей корзины: " + getCost(basket);
console.log(resultText);

addResultToDocument(2, resultText);