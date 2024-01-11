// Write a function to remove duplicate elements from an array.

let arr = [1,2,3,4,4,3,2,1,5,6,7,7,8,8,9];
let newArr = [];
for(let i = 0 ; i <= arr.length-1; i++){
    // let currentEliment = arr[i];
    if(newArr.indexOf(arr[i]) === -1){
        newArr.push(arr[i]);
    }
}

console.log(newArr);