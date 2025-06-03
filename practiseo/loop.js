/*
 🔹 Beginner Level
1=>Print numbers from 1 to 10 using a loop.
2=>Print even numbers between 1 and 100.
3=>Print the multiplication table of a number (e.g., 7).
4=>Calculate the sum of numbers from 1 to n.
5=>Print all characters of a string using a loop.
 */

// 1=>Print numbers from 1 to 10 using a loop.
console.log("1=>Print numbers from 1 to 10 using a loop.");
for(let i = 0; i<11; i++){
console.log(i);
}

// 2=> Print even numbers between 1 and 100.
console.log("Print even numbers between 1 and 10.");
for (var i = 0; i <=10; i++) {
   if (i%2===0) {
    console.log("even number b/w 1 to 10 => ", i);
   } 
    
}
// 3=>Print the multiplication table of a number (e.g., 7).
console.log("3=>Print the multiplication table of a number (e.g., 7).");
for(var i = 0; i<=10;i++){
var numbers = 7;
console.log( i,"*",numbers,"=", i*numbers);
}
//4=>Calculate the sum of numbers from 1 to n.
console.log("4=>Calculate the sum of numbers from 1 to n.");
 
for (var i =0;i<=20;i++) {
   var sum = 0;
   console.log(i+sum);
   
}
// 5=>Print all characters of a string using a loop.
console.log("5=>Print all characters of a string using a loop.");
for ( var i =0;i<5;i++) {
   var str = "Hello"
 console.log(str[i]);
   
}

/*
🟡 Intermediate Level
01=>Print each character of a string using a loop
(e.g., "JavaScript" → J, a, v, a, ...)
02=>Count how many vowels are in a string
(e.g., "Hello World" → 3 vowels: e, o, o)
03=>Calculate the factorial of a number (e.g., 5! = 5×4×3×2×1)
04=>Print the squares of numbers from 1 to 10
(e.g., 1, 4, 9, 16, ..., 100)
05=>Find the largest number in an array
(e.g., [3, 7, 2, 9, 1] → 9)
 */

// 02=>Count how many vowels are in a string (e.g., "Hello World" → 3 vowels: e, o, o)
console.log("02=>Count how many vowels are in a string (e.g., Hello World → 3 vowels: e, o, o)");
let vowelLetter = "JavaScript";
for (let i = 0; i < vowelLetter.length; i++) {
if (vowelLetter[i]==="a"||vowelLetter[i]==="e"||vowelLetter[i]==="i"||vowelLetter[i]==="o"||vowelLetter[i]==="u"||vowelLetter[i]==="y") {
   console.log(vowelLetter[i]);
}  
}
//03=>Calculate the factorial of a number (e.g., 5! = 5×4×3×2×1)
console.log("03=>Calculate the factorial of a number (e.g., 5! = 5*4*3*2*1)");

let number = 5;
let result = 1;
if (number >= 0) {
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  console.log("Factorial of", number, "is", result);
} 

// or

let result01 = 1;
for (let i = 1; i <= 5; i++) {
  result01 *= i;  // Multiply result by i each time
}
console.log(result01);  // Output: 120 (which is 5!)

//04=>Print the squares of numbers from 1 to 10 (e.g., 1, 4, 9, 16, ..., 100)
console.log("object04=>Print the squares of numbers from 1 to 10 (e.g., 1, 4, 9, 16, ..., 100)");
for (let index = 0; index <=10; index++) {
let arrayNumber=2;
console.log(arrayNumber**[index]);  
}

// 05=>Find the largest number in an array (e.g., [3, 7, 2, 9, 1] → 9);
console.log("05=>Find the largest number in an array (e.g., [3, 7, 2, 9, 1] → 9)");

var largestNumbers = [3, 7, 2, 9, 1];
var largest = largestNumbers[0]; // Start with the first element
for (var i = 1; i < largestNumbers.length; i++) {
  if (largestNumbers[i] > largest) {
    largest = largestNumbers[i]; // Update if current is bigger
  }
}
console.log("Largest number is:", largest);

 // palingdram  revesr use 
 var names = prompt("enter words");
 var reverse = "";
 for( var i = names.length-1;i>=0;i--){
  reverse+= names[i];
  if (names===reverse) {
    console.log("palindram");
  }else{
    console.log("not palingdram");
  }
 }
 // min ya max find karo
 var arr = [1,6,3,8];
 var min = arr[0];
 for(var i =0;i<=arr.length;i++){
if (min < arr[i]){
min = arr[i];
}
 }
console.log(min);
  var arr = [1,6,3,8];
 var min = arr[0];
 for(var i =0;i<=arr.length;i++){
if (min > arr[i]){
min = arr[i];
}
 }
console.log(min);