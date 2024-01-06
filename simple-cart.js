// Calculate The Total Cost Of The Products In A Shopping Cart

const shoppingCart = [
    { name: 'shoe', price: 1200},
    { name: 'shirt', price: 2200},
    { name: 'pant', price: 3700},
    { name: 'belt', price: 1100}
];

function totalCost(products){
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        console.log(product);
    }
}

const expense = totalCost(shoppingCart);
console.log('Total expense today: ', expense );