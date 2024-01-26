// Create a function that finds the index of the first occurrence of a specific character in a string.
function findIndexOfCharacter(inputString, targetCharacter) {
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === targetCharacter) {
            return i; // Return the index if the character is found
        }
    }
    return -1; // Return -1 if the character is not found in the string
}

// Example usage:
const inputString = "hello world";
const targetCharacter = "o";
const result = findIndexOfCharacter(inputString, targetCharacter);

console.log(`The index of the first occurrence of "${targetCharacter}" is: ${result}`);
