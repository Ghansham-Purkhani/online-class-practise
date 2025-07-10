g const ulList = document.querySelector('#parent')
 console.log(ulList);  // exces parent 
 console.log(ulList.children); // exces chlid 
 console.log(ulList.children[0]); // exces chlid properties
 console.log(ulList.children[1].innerHTML); // exces chlid properties text b/w tag
//   of loop used
 for (let child of ulList.children) {
  console.log(child.innerHTML);
}
console.log("*********************************");
//  for loop used 
 for (let i = 0; i < ulList.children.length; i++) {
  console.log(ulList.children[i].innerHTML); 
 }

//   adding style through JS
ulList.children[0].style.color = "green"
// ulList.children[0].style.backGroundColor = "white"
console.log(ulList.firstElementChild);










