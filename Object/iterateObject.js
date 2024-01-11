// Create an object and iterate over its properties.
let student = {
    name : "Aditya",
    age : 22,
    role : "Software Engineer"
}
let keys = Object.keys(student); // Getting the keys of the object as an array

for(let i = 0; i < keys.length; i++){
    let key = keys[i];
    console.log(key + ' : '+ student[key]);
}