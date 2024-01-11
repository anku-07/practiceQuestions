//Check if a given string is a palindrome.
let str = 'level';
let len = str.length;
let sored = str;
// console.log(len);
let reversedString = '';
for(let i = len-1 ; i >= 0; i--){
    reversedString += str[i];
}
// console.log(reversedString);
if( reversedString === sored){
    console.log("Palindrome");
}else{
    console.log("Not palindrome");
}