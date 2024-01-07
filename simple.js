// Understand recursion using sum of numbers

// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     sum = sum + i;
// }

// console.log(sum);

// let sum = 0;
// for(let i = 5; i >= 1; i++){
//     sum = sum + i;
// }
// // console.log(sum);

function sum(i){
    if(i==1){ // stoping condition
        return 1;
    }
    console.log(i);
    return i + sum(i-1);
}
const result = sum(5);
console.log(result);