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
console.log("is runing");
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

/*💡 Question: array base
Write a program that finds the largest number in an array of integers.
*/

