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
    console.log("====================");
    console.log("WELCOME TO MY SHOP!");
    console.log("====================");

    generateFakeProducts(num).forEach(function (product) {
        console.log(product.name + " - " + product.price);
    });
}

prettyPrint(10); 