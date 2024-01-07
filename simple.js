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

// Explore Factorial Recursion Using A For Loop Concept

// Recursion 
/**
  5 + sum(4)
  5 + i + sum(i-1)
  5 + 4 + sum (4-1) = 3
  5 + 4 + 3 + sum (3-1) = 2
  5 + 4 + 3 + 2 + sum (2-1) = 1
  5 + 4 + 3 + 2 + 1
 */

  // Calculate sum of numbers using recursion

  function sum(i){
    if (i == 1 ){
        return 1;
    }
    return i + sum(i - 1);
  }
  const cost = sum(5);
  console.log(cost);