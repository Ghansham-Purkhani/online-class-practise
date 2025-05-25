let firstName = "Ghansham";
let lastName = "Purkhani";
console.log(firstName +" "+ lastName); //" " add space b/w name
let number01 = "01";
let number02 = "02";
console.log(number01+number02); //3 ⚠️|0102✅
let number03 = 03; 
console.log(number01+number02+number03); //6⚠️|0105⚠️|010203✅ rule=> left to right apply
let number0 = 0;
console.log(number03+number0+number02); // 5⚠️|52✅ 
/*
PROMPAT=> get input from user prompt( take 2 value both optional) response 
return
 */
// console.log(prompt());
// let userName = prompt();
// console.log(userName);

let userNumber = +prompt(); // by deafult prompt value is string
let userNumberLength= +prompt(); // if we use +sign before it change into number
console.log( userNumber+userNumberLength);  
//STSTEMENT=> B/C its has a if(){--} use curly braces,its works on tru and false
if(true){
    console.log("run"); // run
}
if(false){
console.log("can not run"); // can not run b/c of false statement
}

/**
 === -> match the value same then true / false. "smit"==="smit"(true)  and data type check.
== -> value check only . "2"==2 = true . case sensesitive language
!== -> us ke ilawa jo be ho chale ga 
 */ 
let city = prompt("enter city name");
if(city=="karachi"){
console.log("barish ho rahe hai"); 
}



let userAcount = prompt("Enter user Acount number")
console.log(userAcount);
let userAcount01 = +prompt("Enter user Acount number")
console.log(userAcount01);







