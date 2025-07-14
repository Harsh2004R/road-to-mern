// Essential Javascript Concepts - 2  (Lecture-2)


// I will discuss some topics which I have covered in todays class related to advance js I suppose to give a nice evaluation problems will be given to you I will share what type of content i have learnt today based on that or may be twist it them and take a evaluation.
// Things i have covered today are mention below...




// 1. Truthy/falsey Values
// guess the output kindda problem i  solved by the looking of them in live session.
// 2. Ternary Operator
// condition ? exprIfTruthy : exprIfFalsy
// 3. Logical operators [with booleans]
// let a = false;
// let b = 0;
// let c = null;

// let z = a || b || c;

// console.log(z);
// I solved this kindda problems in live session.
// let bankbalance = 100;
// let accountactive = true;

// (bankbalance > 0) && (accountactive) && console.log('active');
// 4. Rest and Spread
// // rest operator helps collect all the arguments in an array
// function doSomething(first, second, ...rest) {
//   console.log(first, second, rest); // rest is guarenteed to be an array
// }

// doSomething('one', 'two', 'three', 'four', 'five');
// // The spread operator explodes array or objects in place
// let arr = [1, 3, 5, 7, 9];
// console.log(...arr); //-> 1 3 5 7 9

// let user = {
//   firstName: 'Vivek',
//   lastName: 'Agarwal'
// }

// console.log({
//   ...user,
//   fullName: `${user.firstName} ${user.lastName}`
// });
// //-> {firstName: 'Vivek', lastName: 'Agarwal', fullName: 'Vivek Agarwal'}
// 5. Destructuring Arrays and Objects
// const arr = [1, 3, 5, 7, 9];

// const [first, second, ...rest] = arr;
// console.log(first, second, rest);
// 6. arraow functions
// how to return arrow function if we have single return and single parameter
// 7. new loops
// a. for in (both array and obj)
// b. for of (both array and obj)


// Thats pretty much I have covered







// /////////////////////////////////////////////////////////////////////////////////////////     Test         atarts        from         here    //////////////////////////
// 1. Build a function using truthy / falsy values...
// Create a function getValidUsername(usernames) that takes an array of usernames(some may be falsy) and returns
// the first valid(truthy) username from the array.
// Sample input: ["", null, 0, "Harsh", undefined]
// Expected output: "Harsh"
function getValidUsername(array) {
    for (let element of array) {
        if (element) {
            return element;
        } else {
            "";
        }
    }
}
const ans = getValidUsername(["", null, 0, "Harsh", undefined])
console.log(ans);


// 2. Use ternary to categorize age group
// Write a function getAgeCategory(age) that returns:
// "Child" if age < 13
// "Teen" if age is between 13 and 19
// "Adult" if age >= 20
// Use nested ternary operators to achieve this.

function getAgeCategory(age) {
    return age < 13 ? "Child" : age >= 13 && age <= 19 ? "Teen" : age >= 20 ? "Adult" : ""
}
console.log(getAgeCategory(22));



// 3. Logical operators to conditionally log
// Create a function checkSystemStatus(isOnline, isCharged) that logs "System Ready" only if both are true.
// Also log "Turn on the system" only if isOnline is false using logical OR.
function checkSystemStatus(isOnline, isCharged) {

    // isOnline ? "" : console.log("Turn on the system");
    // if (isOnline && isCharged) {
    //     console.log("System Ready");
    // } else {
    //     ""
    // }

    if (!isOnline) console.log("Turn on the system");
    if (isOnline && isCharged) console.log("System Ready");
}
checkSystemStatus(false, true); // turn on the system.
checkSystemStatus(true, true); // System Ready


// 4. Use Rest and Spread to combine inputs
// Write a function mergeArrays(...args) that takes multiple arrays and returns one 
// flattened array using spread syntax.
// Example: mergeArrays([1, 2], [3, 4], [5]) => [1, 2, 3, 4, 5]

function mergeArrays(...args) {
    return [].concat(...args); // OR: return args.flat();
}
console.log(mergeArrays([1, 2], [3, 4], [5]));


//  5. Destructure with rest – object and array
// You are given this object:
const user = {
    name: "Harsh",
    email: "harsh@example.com",
    city: "Surat",
    profession: "Developer"
};
const scores = [100, 90, 80, 70, 60];
// Write a function that destructures the name and collects the remaining values in a rest object. 
// Also,  destructure the array: Get the first two scores, and store the remaining in a new array.


function destructureObj(obj) {
    let { name, ...existing } = obj;
    console.log(name);
    console.log(existing);
}
destructureObj(user);
function destructureArr(arr) {
    let [first, second, ...rest] = arr;
    console.log(first, second, rest);
}
destructureArr(scores);



//  6. Arrow function + object return
// Write an arrow function getUserInfo(name, age) that returns this object:
// Use an arrow function with an implicit return.
let getUserInfo = (name, age) => ({
    name, age: age, verified: true
})
console.log(getUserInfo("Harsh", 21))



//  7. Loop challenge: for...in vs for...of
const student = {
    name: "Harsh",
    marks: [90, 85, 92]
};
// 1. Use for...in to log keys of student.
// 2. Use for...of to log each mark in student.marks.
for (let key in student) {
    console.log(key); //keys of student

    if (key == "marks") {
        for (let marks of student[key]) {
            console.log(marks) //each mark in student.markss
        }
    } else {
        ""
    }

}


// 8. Optional Chaining + Nullish Coalescing
// Create a function getCity(user) that safely returns the city of a user object.
// If city doesn't exist, return "Unknown" instead using optional chaining and nullish coalescing (??).
const user1 = { name: "Harsh", address: { city: "Surat" } };
const user2 = { name: "Yash" };
function getCity(user) {
    return user.address?.city ?? "Unknown";
}
console.log(getCity(user2))


// 9. Default Parameters + Ternary
// Write a function calculateBill(amount, tax = 0.05) that returns:
// "Invalid" if amount is 0 or negative
// Otherwise, return total amount including tax
// use ternary and default parameter.

function calculateBill(amount, tax = 0.05) {
    return amount <= 0 || amount === 0 ? "Invalid" : amount + amount * tax;
}
console.log(calculateBill(10))


//  10. Destructuring in Function Parameters
// Create a function printProfile({ name, age = 18, city }) that logs:
function printProfile({ name, age = 18, city }) {
    const returnObj = {
        name, age, city
    }
    return returnObj;
}
console.log(printProfile({ name: "Harsh", city: "sutar" }))



// 11. Deep Copy using Spread
// You are given: 
const original = {
    name: "Harsh",
    skills: ["JS", "React"]
};
// Create a deep copy of the object so that changes in the copy do not affect the original.
// Then update the copied object’s name and push a new skill "Node".
// Log both objects and prove original is unchanged.
//  Method 1: Spread + slice() for nested arrays...................................................................................
let copy1 = {
    ...original,
    skills: [...original.skills]
};
copy1.name = "Yash";
copy1.skills.push("Node");

console.log("Original:", original);
console.log("Copy:", copy1);

//  Method 2: JSON-based deep clone....................................................................................................
let copy2 = JSON.parse(JSON.stringify(original));
copy2.name = "Yash";
copy2.skills.push("Node");

// Method 3: Modern (Vite/React/Node) – use structuredClone().......................................................................
let copy = structuredClone(original);
copy.skills.push("Node");




// 12. Advanced Arrow Function – Array Map
// Write an arrow function doubleAndFilter that:
// Takes an array of numbers
// Doubles all numbers
// Filters only numbers divisible by 4
let input = [1, 2, 3, 4, 5];
// Output: [4, 8]

const doubleAndFilter = (inp) => {
    let array = [];
    inp.map((el) => {
        if (el * 2 % 4 === 0) {
            array.push(el * 2);
        }
        // or
        // let double = el * 2;
        // if (double % 4 === 0) {
        //     array.push(double);
        // }
    })
    return array;
}
console.log(doubleAndFilter(input))



// 13. Rest in Function Parameters
// Write a function logAllNames(first, ...rest) that logs:
function logAllNames(first, ...rest) {
    console.log("First name:", first)
    console.log("Other names: ", rest)
}

logAllNames("Harsh", "Yash", "Aman");


//  14. Bonus: Use for...of and Destructuring Together
const students = [
    { name: "Harsh", marks: 90 },
    { name: "Yash", marks: 85 },
    { name: "Aman", marks: 92 }
];
for (let el of students) {
    let { name, marks } = el
    console.log(`${name} scored ${marks}`);
}



