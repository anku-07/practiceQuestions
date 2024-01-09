// Write a program and take a string from user and showing number of vowel in this string.
function vowel(str){
str = str.toLowerCase();
    let vowelCount = 0;
    for(let i = 0; i <= str.length; i++){
        let currentChar = str[i];
        if(currentChar === 'a' || currentChar === 'e' || currentChar === 'i' || currentChar === 'o' || currentChar === 'u'){
             vowelCount++;
        }
    }
    console.log(`Your string have ${vowelCount} vowel.`);
}

// let str = 'Aditya';
let str = prompt("Enter a string : ");
vowel(str);