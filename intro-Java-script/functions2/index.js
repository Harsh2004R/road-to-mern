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







// Doubt session problems will be discussed here...
// Problem 1. MAke afunction to convert single leter of string from upper case into lower.
function lowerLetter(string) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < upper.length; i++) {
        if (string == upper[i]) {
            return lower[i];
        }
    }
    return string;
}
console.log(lowerLetter("H"))


// Problem 2. Convert whole string into lower case string...
function lowerString(string) {
    let bag = "";
    for (let i = 0; i < string.length; i++) {
        bag += lowerLetter(string[i]);
    }
    return bag;
}
console.log(lowerString("HARSH"))


// Problem 3. Create a function to convert lowwer string of array from upper string of array...
function lowerArrayOfString(Array) {
    let returnArray = [];
    for (let i = 0; i < Array.length; i++) {
        let ans = lowerString(Array[i])
        returnArray.push(ans)

    }
    return returnArray;
}
console.log(lowerArrayOfString(["RA", "FA", "12", "57"]))




// Important problem 4.
let input_array = [
    {
        grade: "V",
        students: [
            {
                name: "Nrupul", marks: [10, 20, 30]
            }, {
                name: "Prateek", marks: [20, 30, 40]
            }
        ]
    }, {
        grade: "VI",
        students: [
            {
                name: "Aman", marks: [10, 20, 30]
            }, {
                name: "Albert", marks: [20, 30, 40]
            }
        ]
    }, {
        grade: "VII",
        students: [
            {
                name: "Yogesh", marks: [10, 20, 30]
            }, {
                name: "Sandhya", marks: [20, 30, 40]
            }
        ]
    }
]


function sumMarks(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum;
}
for (let i = 0; i < input_array.length; i++) {
    let grade = input_array[i].grade;
    let students = input_array[i].students;

    let maximum = -Infinity;
    let name = "";
    let topperTotal = 0;
    for (let j = 0; j < students.length; j++) {
        let total = sumMarks(students[j].marks);
        if (total > maximum) {
            maximum = total;
            topperTotal = total;
            name = students[j].name
        }
    }
    console.log(grade + "-" + name + "-" + topperTotal)
}