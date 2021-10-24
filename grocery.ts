class Grocery {
    name: string;
    description: string;
    quantity: number;
    price: number;
    amount_Total: number

    constructor(name: string, description: string, quantity: number, price: number) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        this.amount_Total = quantity * price;
    }
}

let pasta = new Grocery("Pasta\n", "Made In Italy\n", 2, 4.75);
let olive_Oil = new Grocery("Olive Oil", "Made In Italy", 2, 8.75);
let apple = new Grocery("Fresh apple", "Organic", 2, 1.75);;


let groceries: Grocery[] = [];

groceries.push(pasta);
groceries.push(olive_Oil);
groceries.push(apple);


const info = document.getElementById('grocery');

groceries.map(grocery => {
    const {name, description, quantity, price, amount_Total} = grocery;
     const p = document.createElement("p");
    p.textContent = 
    `${grocery.name}/
    ${grocery.description} /
    ${grocery.quantity} /
    ${grocery.price} /
    $${grocery.amount_Total} \n`;
    info.appendChild(p);
});
