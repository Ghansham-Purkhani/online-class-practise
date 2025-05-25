// REVISION 1ST TO 10TH CLASS

// alert ia methood its show pops on screen 

alert("hello");

// variable is that store value/data in memmory,

var num = 10;
console.log(num);

let currenSitution; // undefine its not error
console.log(currenSitution);
// console.log(fatherName);  not-define its error

//  LEGALL AND ILLEGAL

//  LEGALL

let yahoCom = "camelCase use to recomded by js"; // use camelCase,Snake_Case extra 

//  ILEGALL

let alert = 10; // cant use reserd words its means wo words jo js men use hoe hai { alert,let,var extra}, can not satart with number 

// concatenation (+) if any one is string then + to do concatenation (add any thing)

let num03 = 7;
let userName = "Ghansham"
console.log(num03+" "+userName);
let num04 = "8"
console.log(num03+num04);

// changes
let myNumber = "10";
let myNum01 = 10;
console.log( typeof myNumber,typeof myNum01); // type bata rah hai data ka 
console.log(Number(myNumber),String(myNum01)); // string into number , number into string 

 // prompt { its value is string give you anything => (you can change it through + sign)}

let yourAnser01 = prompt("Enter your f-Name");
let yourAnser02 = prompt("Enter your l-Name");
console.log(yourAnser01,yourAnser02);

// condition 

let num01 = +prompt("Enter your age 01",10);
let num02 = +prompt("Enter your age 02",20);
if (num01 < num02) {
    console.log("you are right");
} else{
     console.log("you are wrong");

}
// an other example of condittion

let num05 = +prompt("Enter your result 05",60);

if (num05 >= 80) {
    console.log("you are passed with A+ Grade Congratulation");
} else if(num05>=70){
    console.log("you are passed with A Grade Congratulation");
} else if(num05>=60){
    console.log("you are passed with B Grade Congratulation");
} else{
       console.log("try next time,better luck");
}



