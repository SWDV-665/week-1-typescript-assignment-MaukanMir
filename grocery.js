var Grocery = /** @class */ (function () {
    function Grocery(name, description, quantity, price) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        this.amount_Total = quantity * price;
    }
    return Grocery;
}());
var pasta = new Grocery("Pasta\n", "Made In Italy\n", 2, 4.75);
var olive_Oil = new Grocery("Olive Oil", "Made In Italy", 2, 8.75);
var apple = new Grocery("Fresh apple", "Organic", 2, 1.75);
;
var groceries = [];
groceries.push(pasta);
groceries.push(olive_Oil);
groceries.push(apple);
var info = document.getElementById('grocery');
groceries.map(function (grocery) {
    var name = grocery.name, description = grocery.description, quantity = grocery.quantity, price = grocery.price, amount_Total = grocery.amount_Total;
    var p = document.createElement("p");
    p.textContent =
        grocery.name + "/\n    " + grocery.description + " /\n    " + grocery.quantity + " /\n    " + grocery.price + " /\n    $" + grocery.amount_Total + " \n";
    info.appendChild(p);
});
