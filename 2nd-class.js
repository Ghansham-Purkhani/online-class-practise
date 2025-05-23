/*
DOCUMENT=> its object-> it a box, full with manything like htmltag,js predefined
function extra -> run karne ke lai {document.write("give value in string/html-tag")} document
ke agi(.) laga kar methood/function use kar lete hai , .write cross line show dont use in modern
web development 
✅ Use document.write() only for testing or very early page rendering.
⚠️ Avoid using it in modern web development — prefer DOM manipulation (innerHTML, appendChild,
 etc.).
 CONCATENATION => two string ko merge karna hoto (+) sign use kare ge 
 one string and one number ya dono string ke bech (+) sign use hoga tab be concatenation hoga
 jab dono number ho (+)  sign use kare ge to add hoga 
*/
                        // DOCUMENT

var document= Document; 
document.write( document,"<h1> hello ji</h1>");

                      // CONCATENATION 
let str1 = "chotya ho to chotya" ; 
let str2 = " ho to chotya" ;
alert(str1+str2) ;
document.write( "<h1>" +str1+"</h1>");
console.log(str1);
// re-assign 
let num = 1;
console.log(num); // come in d/t line
num = num + 1;
console.log(num); // come in d/t line 
num = num+1;
console.log(num,num); // come in one line               
/*
VARIABLE-NAME LEGAL AND ILLEGAL⚠️ => ILLEGAL-> can not give space(ji jo),starting with number(11gp), can not use default/
reservd word (document). LEGAL✅-> use camelCase(moryaThar),underscore(_jijo),snake case(pindi_chock) 
*/
let userRespontime; // recomdend for varible name ✅
/*
MATH-EXPRESION AND FAIMILAR OPERATOR => adition(+),sub(-),divide(/),multiply(*)
during this problem come when string come when we to do addition.
its mostaly follow BODMAS formula ko kare ga js
*/
alert(2+2)
alert(2*2)
alert(2-2)
alert(2/2)
alert("2"+2) //⚠️
/*
 MATH-EXPRESION AND UN-FAIMILAR OPERATOR => As increasement(num++;) and decresement (num--;) in
 variable. if you hav a variable that value in string and you to do increasement then then thro
 a eror ⚠️
 post increasemnt=> (num++) variable value first run then inc
 post deccreasemnt=>(num--)  variable value first  run then dec
 pre inccreasemnt=> (++num) variable value first inc then run
 pre deccreasemnt=> ( --num) variable value first dec then run

 
 */
let num1 = 10;
num1++; // 11
num1--; // 10 hogaya (11-1=10) = final value which is 10 show on browser
console.log(num1);
console.log(num1);
// console.log(num1);
let num2=2;
++num2;
console.log(num2);
// damag lagao bhai 
let a = 3;
let b = 2;
var mix= (--a+b++)+b/a*b++;
console.log(mix);





