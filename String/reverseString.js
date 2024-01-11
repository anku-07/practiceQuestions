// Reverse a string without using the reverse method.
let str = "Aditya";
let newStr = "";
for(let i = str.length; i >= 0; i--){
    newStr += str[i];
}
console.log(newStr);