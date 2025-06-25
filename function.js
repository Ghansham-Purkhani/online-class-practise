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