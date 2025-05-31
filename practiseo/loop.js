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