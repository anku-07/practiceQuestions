// Remove a specific element from an array.
let myArray = [1, 2, 3, 4, 5];
let elementToRemove = 3;

myArray = myArray.filter(item => item !== elementToRemove);

console.log(myArray);
