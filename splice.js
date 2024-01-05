const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
const elements = [13, 46, 33, 26, 49, 63, 29, 69, 86];

// Removes elements from an array
// and , if necessary, inserts new elements in their place,
// returning the deleted elements.
// will change the original array

// Removes elements from an array
const partial = friends.splice(2, 5);
// console.log(partial);
// console.log(friends);

// inserts new elements in their place
const newPlace = elements.splice(3, 6, 999, 666, 787);
console.log(newPlace);
console.log(elements);
