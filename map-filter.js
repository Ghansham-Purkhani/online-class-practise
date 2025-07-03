const students = [`Ali`,`Hussain`,`Mola Ali`,`ya-Hussain`];
//  array methood map its give return value in array 
 const studentName1 = students.map((student,index)=>{
    console.log(index + 1,student);
return student.toLocaleUpperCase();
})
console.log(studentName1);
console.log('*****************************************');

//  array methood filter its give return value in array ,give on condition 
//  or anything 

 const studentName = students.filter((student,index)=>{
    console.log(index + 1,student);
// return student.toLocaleLowerCase().includes(`s`); // commit for necha console run ho sake 
return student.length >=4
})
console.log(studentName);
