// Find the largest element in an array.

let arr = ["Adi" , "Arghya", "Hriday","Sayan"];
let max = arr[0].length;
for(let i = 0; i < arr.length; i++){
    if(arr[i].length > max){
        max = arr[i];
    }
}
console.log(`Maximum eliment in this array is ${max}`);