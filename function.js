//  Main thing in code Function Structure, paramenter and argument

function AudioBook(BookName, year, chaneelName, language) {
    console.log(`its Book of karachi based ${BookName}`);
    console.log(`Publish in ${year}`);
    console.log(`Audio book On Yotube chanell name is ${chaneelName} `);
    console.log(`Audio book On Yotube chanell in language of ${language} `);

}
AudioBook('Brithish Rule', 1900, 'GP', 'Urdu')
console.log("******************************")
AudioBook('Brithish Hakomat', 1800, 'PV', 'Sindhi')

console.log("******************************")

// EXPALAIN RETURN KEYWORD .....
function addTwoNumber(a, b) {
    return a + b
}
// debugger
const result = addTwoNumber(4 , 6)
console.log(result) 

console.log("*****Substract******")

function subTwoNumber(c,d){
    return c-d;
}
 const resultofSub = subTwoNumber(subTwoNumber(12,13),subTwoNumber(10,5));
 console.log(resultofSub);

 //  Execution methood in JS .....

//  debugger
 const number = 12;
 const numberVar = 16;
 function pressCulb(PressCulb,City,Dist) {
    return PressCulb!=City!=Dist;
 }
//  pressCulb(SadiquePressCulb,Mithi,Tharparker);

 const  ResultOfPressCulb = pressCulb('SadiquePressCulb','Mithi','Tharparker');
 console.log(ResultOfPressCulb);


 function greatUser(Name){
return `Hello ${name}!`;
 }
  const userName = greatUser('Ghansham');
  console.log(userName);

   function createProfile(nameP,ageP){
return {
    Name: nameP,
    Age: ageP
}

   }
   const profile = createProfile('Ghansham',24);
   console.log(profile);


   function firstAndLast(arr) {
  return [arr[0], arr[arr.length - 1]];
}
console.log(firstAndLast([10, 20, 30]));

function conditionBased(number) {
    if (number % 2 === 0) {
  return "Even";
} else {
  return "Odd";
};
}
console.log(conditionBased(10));

 //  Function  Expression in JS ..OR.. Function Defination, not used before delearation 
const sayHii = function() {
  console.log("hii")
}
// sayHi() 

 //  Function Decleartion in JS .. used before delearation 
 function chora(beforeDec) {
  return beforeDec;
 } 
 chora();
 function dade(bc) {
  return bc;
 }
 console.dir(dade); // its data type is basically obj but in js show function datatype 
 const cd =  dade([1,2,3,]);
  console.log(cd);

  //  high order function

function a(c) {
  console.dir(c);
  c();
}

// function sayHello() {
//   console.log(`hiiiiii`);
// }

// a(sayHello); // ✅ Don't use parentheses here

a(function () {
  console.log(`hiiiiii`);}); // ease be call kar sakte hai use callback function kahte hai

  // return and closure
  function outer() {
    debugger
    function parent() {
    const num2 = 5;
    const num = 2;
    function add() {
        console.log(num+num2); 
    }
    return add();
      } 
    return parent();
  }

  const add1 =outer();
  console.dir(add1);

