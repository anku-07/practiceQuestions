// Implement a function that returns the factorial of a number.
function getFactorial(n){
    fact = 1;
    for(let i = 1; i <= n; i++){
        fact *= i;
    }
    console.log(fact);
}
console.log(getFactorial(5));