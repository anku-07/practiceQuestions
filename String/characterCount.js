//Write a function that takes a string and a character as parameters and counts the number of occurrences of that character in the string.

function numOfoccurrences(str,char){
    let count = 0;
    for(let i = 0; i <= str.length-1;i++){
        if(str[i] == char){
            count++;
        }
    }
    return count;
}
let name = "aditya";
let char = 'a';
console.log(numOfoccurrences(name,char));
console.log(numOfoccurrences('aditya','a')); // we can do that;