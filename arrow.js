//  arrow function => syntax
// const add = (a, b) => a + b;
//  this both same way diffrent
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
