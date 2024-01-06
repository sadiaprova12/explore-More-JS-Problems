// Handel unexpected function input parameter error
function add(num1, num2){
    // Validation check process: number na hole ei message asbe 
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please Enter A Number'; 
    }
    return num1 + num2
}

// const result = add(12, '45');
const result = add(false, 45); // Error message return diye dibe ei line dile
// console.log(result);

function multiply(num1, num2){
    console.log(num1, num2);
    return num1 * num2;
}

const output = multiply(12,45);
console.log(output);