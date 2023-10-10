// 1. Create variable name (firstFavNumb) & store your favorite number.
// 2. Create variable name (secondFavNumb) & store second fav Number.
// 3. Check (firstFavNumb is greater then secondFavNumb)
// 4. Check (firstFavNumb is less then secondFavNumb)
// 5. Check (firstFavNumb is greater then & equal to secondFavNumb)
// 6. Check (firstFavNumb is less then & equal to secondFavNumb)
// 7. Check (firstFavNumb is equal to secondFavNumb) using strict equality operator.
// 8. Check (firstFavNumb is equal to secondFavNumb) using loose equality operator.
// 9. Check (firstFavNumb is not equal to secondFavNumb) using strict non-equality operator.
// 10. Check is (firstFavNumb is not equal to secondFavNumb) using loose non-equality operator.
 
let firstFavNum = 8; 
let secondFavNum = 80; 
 
let d = firstFavNum > secondFavNum; 
let e = firstFavNum < secondFavNum; 
let l = firstFavNum <= secondFavNum; 
let a = firstFavNum === secondFavNum; 
let c = firstFavNum == secondFavNum; 
let r = firstFavNum !== secondFavNum; 
let z = firstFavNum != secondFavNum; 
console.log("The first variable is greater then the second variable: " + d); 
console.log("The first variable is less then the second variable: " + e); 
console.log ("First number is less than and equal to second number: " + l); 
console.log("FirstFavNum is equal to secondFavNum: " + a); 
console.log("FirstFavNum is equal to secondFavNum: " + c); 
console.log("FirstFavNum is not equal to secondFavNum: " + r); 
console.log("FirstFavNum is not equal to secondFavNum: " + z);