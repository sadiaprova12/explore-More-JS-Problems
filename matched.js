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
    {id: 1, name: 'Iphone', price: 19000},
    {id: 1, name: 'mac book air', price: 19000},
    {id: 1, name: 'lenovo yoga laptop 2025', price: 19000},
    {id: 1, name: 'Dell insprision laptop', price: 19000},
    {id: 1, name: 'Samsung phone note 7', price: 19000},
    {id: 1, name: 'Nokia old age phone gone', price: 19000},
    {id: 1, name: 'Phone one', price: 19000},
];

for(const product of products){
    console.log(product);
}