/*
01=> Even or Odd
Write a program that takes a number and checks if it is even or odd.
 */
let num01 = +prompt("enter the number"); 

if (num01 % 2 ===0) {
console.log("even number");  
}
if (num01 !== 0) {
console.log("invalid input");  
}
else{
    console.log("odd number");
}

/*
02=> Write a program that takes an integer input from the user and prints:
"Positive" if the number is greater than 0
"Negative" if the number is less than 0
"Zero" if the number is exactly 0
 */
let numberInteger = +prompt("enter integer value");
if(numberInteger >=1){
console.log("its positive number");
} 
if(numberInteger <=-1){
console.log("its Nrgative number");
} 
if(numberInteger == 0){
console.log("its zero number");
}

/*📚 Question: Grade Calculator
Write a program that:
Takes an integer score as input (0 to 100).
Then prints the grade based on the following rules:
Score Range	Grade
90 - 100  =	A
80 - 89	 =  B
70 - 79	 =  C
60 - 69  =	D
0 - 59	 =  F
Anything else	Invalid input

✅ Examples:
Input: 85
Output: Grade: B
Input: 45
Output: Grade: F
Input: 105
Output: Invalid input*/

let scoreNumber = +prompt("Enter score");
if (scoreNumber>=90) {
    console.log("cong you got A Grade ");
}
if (scoreNumber>=80) {
    console.log("cong you got B Grade ");
}
if (scoreNumber>=70) {
    console.log("cong you got C Grade ");
}
if (scoreNumber>=60) {
    console.log("cong you got D Grade ");
}
if (scoreNumber <=50) {
    console.log("try next time");  
}


/*🚦 Question: Traffic Signal Decision Helper
Write a program that:
Takes two inputs from the user:
Signal color (red, yellow, or green)
Based on the input, decide what the driver should do:
Signal Color Action
red	no	Stop
red	yes	Go (make way)
yellow	no	Slow down
yellow	yes	Go carefully
green	no	Go
green	yes	Go
any invalid input	Invalid input	

🧪 Examples:
Input:
Signal color: red
Output: Go (make way)

Input:
Signal color: blue
Output: Invalid input*/

let signalColorBase = prompt("enter Color");
if (signalColorBase=="red") {
    console.log(" No (make way)");
}
if (signalColorBase=="blue") {
    console.log(" yes (make way)");
}
if (signalColorBase=="yellow") {
    console.log(" No (make way)");
}