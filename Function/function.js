/*
Write a function that takes two parameters and returns their sum.
Create a function that converts Fahrenheit to Celsius.
Write a function that checks if a number is even or odd.
*/
//Qn -1
// Function definition
function sum(a,b){
    return a + b;
}

console.log(sum(1,2));

//Qn -2
// Function definition
function fahrToCel(fahr){
    let celsius = (fahr - 32)*5/9;
    return celsius;
}

console.log(fahrToCel(100));

// Qn -3
// Function Definition
function isEvenOdd(n){
    let output;
    if(n%2 == 0){
        output = "Even";
    }else{
        output = "Odd";
    }

    return output;
}

console.log(isEvenOdd(23));