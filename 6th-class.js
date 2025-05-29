/*
 statement in js and array
 if else,if else-if else
 */

// structure of statement

// if (condition) {
//     // which you print 
// } else if(condition){
//  // which you print 
// }else{
//  // which you print 
// }

// structure of array

//let newArr = [1,"Ali"]; 

/*
💡 Question: of satement
Write a program that checks a person's age and prints:
 */
let ageOfInput = +prompt("enter your age in number");
console.log(object);
if (ageOfInput <=10) {
    console.log("You are Child");
} else if (ageOfInput <=25) {
    console.log("you are young man");
} else if(ageOfInput <=50){
    console.log("you are old man");
}else{
    console.log("you are 'bora' man");
}

// Array in js,store more than one elemment/value...... 

let arrayNumbers = [1,"Ghansham",2,3,4,5,6]; // array
console.log(arrayNumbers[1]); // find konse index pe kia save hai
console.log(arrayNumbers[0]);

// Some  bsics array methood

// 5. length — Get number of items
console.log(arrayNumbers.length); // 7
// 11. indexOf() — Find index of an item
console.log(arrayNumbers.indexOf("Ghansham")); // 1
//1. push() — Add item to the end of the array
arrayNumbers.push("somro");
console.log(arrayNumbers);
//2. pop() — Remove item from the end
arrayNumbers.pop("somro");
console.log(arrayNumbers);
//3. unshift() — Add item to the start
arrayNumbers.unshift("somro bhai");
console.log(arrayNumbers);
//4. shift() — remove item to the start
arrayNumbers.unshift("somro bhai");
console.log(arrayNumbers);
// 12. join() — Convert array to string
console.log(arrayNumbers.join("apple,banana")); // "apple, banana"
// 11. indexOf() — Find index of an item
console.log(arrayNumbers.indexOf("banana")); // 1
// 10. includes() — Check if array contains a value
console.log(arrayNumbers.includes("banana")); // true
// 9. find() — Return the first match
let firstBig = arrayNumbers.find(num => num > 10);
console.log(firstBig); // 15
// 8. filter() — Return elements that match a condition
let nums = [5, 10, 15, 20];
let greaterThan10 = nums.filter(num => num > 10);
console.log(greaterThan10); // [15, 20]
// 7. map() — Create a new array by transforming each element
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
// 6. forEach() — Loop through each item
arrayNumbers.forEach(function(item, index) {
  console.log(index + ": " + item);
});
// 13. slice(start, end) — Copy part of the array
let sliced = arrayNumbers.slice(0, 1);
console.log(sliced); // ["apple"]
// 14. splice(start, deleteCount, item1, item2, ...) — Add/remove items
arrayNumbers.splice(1, 1, "grape");
console.log(arrayNumbers); // ["apple", "grape"]

/*💡 Question: array base
Write a program that finds the largest number in an array of integers.
*/

let newArrNum = [3, 7, 2, 9, 1, 14, 6];

// Use Math.max() with the spread operator (...)
let largest = Math.max(...newArrNum);

console.log("The largest number is:", largest);


