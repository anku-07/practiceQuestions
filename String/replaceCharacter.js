//Write a program that replaces all occurrences of a specified character in a string with another character. Prompt the user for the characters to be replaced.

function replaceCharacters(inputString, targetCharacter, replacementCharacter) {
    const resultString = inputString.split(targetCharacter).join(replacementCharacter);
    return resultString;
}

// Example usage:
const inputString = prompt("Enter a string:");
const targetCharacter = prompt("Enter the character to be replaced:");
const replacementCharacter = prompt("Enter the replacement character:");

const result = replaceCharacters(inputString, targetCharacter, replacementCharacter);

console.log(`Original String: ${inputString}`);
console.log(`Result String: ${result}`);
