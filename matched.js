// Find The Matching Product By Searching Products

const numbers = [45, 65, 23, 98, 19];
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(const number of numbers){
   console.log(number);
}

const products = [
    {id: 1, name: 'Xiami phone one night', price: 19000},
    {id: 2, name: 'Iphone', price: 192000},
    {id: 3, name: 'mac book air', price: 287000},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 68000},
    {id: 5, name: 'Dell insprision laptop', price: 72000},
    {id: 6, name: 'Samsung phone note 7', price: 188000},
    {id: 7, name: 'Nokia old age phone gone', price: 17000},
    {id: 8, name: 'Phone one', price: 10000},
];

// for(const product of products){
//     console.log(product);
// }

function matchedProducts (product, search){
    const matched = [];
    for(const product of products){
        // console.log(product)
        // if(product.name.includes(search)){
        //     matched.push(product);
        // }
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone');
console.log(result);