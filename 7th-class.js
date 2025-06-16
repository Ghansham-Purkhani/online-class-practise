/*
slice and splice methood of array and loop 
*/
//  // splice
// let students=["gp","gd","raj"];
// console.log(students);
// students.splice(1,1,"sardar","Naresh");
// console.log(students);
// // slice
// let studentClases = ["gp","gd","raj","sardar","Naresh"];
// console.log(studentClases);
// console.log(studentClases.slice(0,3));
// console.log(studentClases.slice(3,5));

// FOR LOOP IN JS
// structure of for-loop

for(var i=0;i<5;i++){
console.log(i);
}
console.log(i); // there use rule of js  think what is output ?.

                       // PalindromicWords

let word = prompt("Enter a word:");
word = word.toLowerCase(); // Make it case-insensitive
let isPalindrome = true;
let length = word.length;
for (let i = 0; i < length / 2; i++) {
    if (word[i] !== word[length - 1 - i]) {
        isPalindrome = false;
        break;
    }
} 
if (isPalindrome) {
    console.log("It's a palindrome ok!");
} else {
    console.log("It's not a palindrome.");
}

