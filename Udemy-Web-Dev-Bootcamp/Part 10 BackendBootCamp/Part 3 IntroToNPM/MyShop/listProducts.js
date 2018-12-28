const faker = require("faker");

function generateFakeProducts(numProducts) {
    let fakeProducts = [];
    for (let i = 0; i < numProducts; i++) {
        let product = {};
        product.name = faker.commerce.product();
        product.price = faker.commerce.price();
        fakeProducts.push(product);
    }
    return fakeProducts;
}

function prettyPrint(num) {
    const products = generateFakeProducts(num);
    products.forEach(function (product) {
        console.log(product.name + " - " + product.price);
    });
}

console.log("====================");
console.log("WELCOME TO MY SHOP!");
console.log("====================");
prettyPrint(10); 