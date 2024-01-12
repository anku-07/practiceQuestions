// Reverse array eliment without using reverse method
let arr = ["Aditya","Arghya","Hriday","Akash"];
let newArr = [];
for(let i = arr.length-1; i >= 0; i--){
    newArr.push(arr[i]);
    console.log(newArr);
}