/*
Write an if-else statement to check if a number is positive, negative, or zero.
Create a switch statement that logs a message based on the day of the week.
*/
// Qn -1
let num = 7;
let result;
if(num > 0){
    result = "Positive";
}else if(num < 0){
    result = "Negative";
}else if(num === 0){
    result = "Zero";
}else{
    result = "it's not a number";
}
console.log(result);

// Qn-2

let weekDay = 1;
let dayName;

if(weekDay == 1){
    dayName = "Monday";
}else if(weekDay == 2){
    dayName = "Tuesday";
}else if(weekDay == 3){
    dayName = "Wednesday";
}else if(weekDay == 4){
    dayName = "Thrusday";
}else if(weekDay == 5){
    dayName = "Friday";
}else if(weekDay == 6){
    dayName = "Saturday";
}else if(weekDay == 7){
    dayName = "Sunday";
}else{
    dayName = "Please enter valid weekday";
}
console.log(dayName);