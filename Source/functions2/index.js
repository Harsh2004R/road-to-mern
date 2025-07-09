// Some of the fucntion problem will be solved here related to functions....
// Problem 1. Counte even and odds btw 1 to 15.
function CountEvenOdd(num) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            evenCount++
        } else {
            oddCount++;
        }
    }
    console.log(`evenCount - ${evenCount}`, `oddCount - ${oddCount}`)
}
CountEvenOdd(15);


// Problem 2. Write a function to reverse the string...
function revStr(str) {

    let bag = ""
    for (let i = str.length - 1; i >= 0; i--) {
        bag += str[i];
    }
    console.log(bag)
}
revStr("chunnu")


// Problem 3. Check String is pallendromic or not ?
function CheckPallendromicString(str) {
    let container = "";
    for (let i = str.length - 1; i >= 0; i--) {
        container += str[i];
    }
    if (container === str) {
        return true;
    }
    else {
        return false;
    }
}
let pallendromic = CheckPallendromicString("racecar")
console.log(pallendromic)







// Inbuilt functions
// 1. Number to String
let x = 45;
console.log(typeof (x.toString()), x.toString())
// 2. Array inbuilt functions...
let arr = [18, 12];
arr.push(10);// push el at the end of array.
arr.pop();// removes el from end of array.
arr.shift()// remove el from very first index.
arr.unshift(51) // adds el at very first index.
arr.join(" ")// print array in single array.


// 2. String in built functions...
let str = "abc";
str.toUpperCase();
str.toLowerCase();
str.includes("ab"); // caseSencitive -> true/false
str.endsWith("c") // true
str.startsWith("a") // true
str.split(" "); 












