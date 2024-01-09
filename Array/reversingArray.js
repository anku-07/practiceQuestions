function reversingArray(arr){
    let revArray = [];
    for(let i = arr.length-1; i >= 0; i--){
        revArray.push(arr[i]);
    }
    console.log(revArray);
}

let num = prompt("Enter number of eliment : ");
let arr = [];
for(let i = 0; i < num; i++){
    let eliment = prompt(`Enter eliment ${i}`);
    arr.push(eliment);
}
console.log(`Orginal array eliment is ${arr}.`);
reversingArray(arr);