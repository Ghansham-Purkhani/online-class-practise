/*var days = ["Sun","Mon","Tus","Wed","Thur","Fri","Sat"];
console.log(days[newDate.getDay()]);

// SPECIFING DATE AND TIME 
var today = new Date();
var domsDay= new Date("june 21,2035");

console.log(today);
console.log(domsDay);

var mstoday = today.getTime();
console.log(mstoday);

var msdomsDay = domsDay.getTime();
console.log(msdomsDay);

var msDiff = msdomsDay - mstoday;
console.log(msDiff);

var dDiff = msDiff / (1000 * 60 * 60 * 24);
console.log(dDiff);

dDiff = Math.floor(dDiff);
var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));
var d = new Date("July 21, 1983 13:25:00");
console.log(d); */
// var newDate = new Date(); // MilliSecond 
// console.log("MilliSecond",newDate.getTime());  
// var newTime = newDate/(1000);  // Second 
// console.log("Second",newTime); 
// var newTime = newDate/(1000*60);  // Mintus
// console.log("Mintus",newTime);
// var newTime = newDate/(1000*60*60);  // clock
// console.log("Clock",newTime);
// var newTime = newDate/(1000*60*60*24);  // day
// console.log("Day",newTime);
// var newTime = newDate/(1000*60*60*24*365);  // Year
// console.log("Year",newTime); 

var newDateMeth = new Date(1750692585898);
console.log(newDateMeth.toLocaleString());

