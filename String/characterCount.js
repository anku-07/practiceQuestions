//Write a function that takes a string and a character as parameters and counts the number of occurrences of that character in the string.

let str = "Banana";
let char = 'a';
let count = 0;
for(let fruit of str){
    if(str[fruit]==char){
        count++;
    }
}
console.log(count);