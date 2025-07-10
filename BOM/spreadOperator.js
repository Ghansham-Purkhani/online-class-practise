//  spread operator = use for join array and obj

// join array
let Num1 = [1, 2, 3, 4, 5]
let Num2 = [6, 7, 8, 9, 10]
const joinNum1Num2 = [...Num1, ...Num2]
console.log(joinNum1Num2)

// join obj
let objEct = {
  firstname: 'Ghansham',
  lastName: 'Purkhani',
  age: 22
}
const objEctJoin = {
  ...objEct,
  city: 'Mithi',
  Dist: 'Tharparker',
  state: 'Sindh'
}
console.log(objEctJoin);
