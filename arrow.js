//  arrow function => syntax
// const add = (a, b) => a + b;
//  this both same but way diffrent
// function add(a, b) {
//   return a + b;
// }
// One parameter: 
const greet = name => `Hello, ${name}`;
console.log(greet("Ali")); // Hello, Ali
// No parameter:
const sayHi = () => console.log("Hi!");
sayHi(); // Hi!
// this: new example:
// function Person() {
//   this.age = 0;

//   setInterval(() => {
//     this.age++; // Arrow function uses the 'this' from Person
//     console.log(this.age);
//   }, 1000);
// }
// new Person();
//  they show undefine
// const chore = (num) =>{ num + num };
//  they show return value
const adding = (num) => num + num;
console.log(adding(5));

// forEach methood, its return value by default undefine hotte hai .

let fruits = [`Ali`,`Johan`,`maro`,`kalya`,`bosreki`,`lose`]
fruits.forEach( function (elements) {
    console.log(elements)
});
console.log("**************************************")

// forEach methood with arrow function

let Names = [`Ali`,`Johan`,`maro`,`kalya`,`bosreki`,`lose`]
Names.forEach( (elements)=>{
    console.log(elements)
});
console.log("**************************************")
// for of and for in loop in JS 
let namesFull = [`Ali`,`Johan`,`maro`,`kalya`,`bosreki`,`lose`];
for (const element of namesFull) {
    console.log(element)
}
console.log("**************************************")
// for in 
for (const nmes in namesFull) {
    console.log(nmes)
}
//  for object exsecution we used for in loop not for of , avoid this but time consuming other
//  many way mostly literble object ke lai as like : array,string,nodelist extra ....
const personal={
    name:`Ghansham`,
    last:`Purkhani`,
    age:22,
    City:`Mithi`,
}
//  every value exces by brakeNotion => [key]
for (const key in personal) {
    console.log(key,":",personal[key]);
}
console.log("**************************************")
// best way  to execute object for of loop
const personkey = Object.keys(personal); // 
const personValues = Object.values(personal); // values mile ge 
const personentres = Object.entries(personal); // full information mile ge 
for (const key of personkey) {
   console.log(personal[key])
}


