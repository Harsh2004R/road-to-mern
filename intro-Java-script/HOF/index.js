// All lecture covered problwma will be done here...



// Problem 1: map()
// 👉 Multiply each number by 10.....
const nums = [1, 5, 7, 9];
// Use map to return: [10, 50, 70, 90]
let ans = nums.map((el) => {
    return el * 10;
})
console.log(ans);



//  Problem 2: filter()
// 👉 Filter names that have more than 4 letters.....
const names = ["Ram", "Sita", "Lakshman", "Hanuman", "Om"];
// Expected: ["Sita", "Lakshman", "Hanuman"]

let filteredAns = names.filter((el) => {
    if (el.length > 4) {
        return el;
    }
})
console.log(filteredAns);



// Problem 3: forEach()
// 👉 Log each animal name in uppercase with its index
const animals = ["dog", "cat", "lion"];
// Output:
// 0: DOG
// 1: CAT
// 2: LION
animals.forEach((el, i) => {
    console.log(`${i}: ${el.toUpperCase()}`)
})



//  Problem 4: map()
// 👉 From an array of objects, return a new array containing just the names in uppercase.
const people = [
    { name: "Harsh", age: 21 },
    { name: "Radha", age: 23 },
    { name: "Om", age: 19 },
];
// Expected Output: ["HARSH", "RADHA", "OM"]
const arrayWithUpperCase = people.map((e,) => {
    return e.name.toUpperCase();
})
console.log(arrayWithUpperCase)




// Problem 5: filter()
// 👉 Filter only the users who are 18 or older and have a verified email.
const users = [
    { username: "dev1", age: 17, verified: true },
    { username: "dev2", age: 20, verified: false },
    { username: "dev3", age: 22, verified: true }
];
// Expected Output:
// [
//   { username: "dev3", age: 22, verified: true }
// ]
let filteredRes = users.filter((el) => {
    if (el.age > 18 && el.verified === true) {
        return el;
    }
})
console.log(filteredRes)



// Problem 6: forEach()
// 👉 Given an array of scores, log the grade based on the value:
// 90 + → A
// 75–89 → B
// 50–74 → C
// below 50 → F
const scores = [95, 83, 67, 42, 100, 56];
// Expected Output:
// Score: 95 → Grade: A
// Score: 83 → Grade: B
// ...
let grade = scores.forEach((e, i) => {
    if (e > 90) {
        console.log("Grade: A");
    } else if (e >= 75 && e <= 89) {
        console.log("Grade: B");
    } else if (e >= 50 && e <= 74) {
        console.log("Grade: C");
    }
    else {
        console.log("Grade: F");
    }
})


// Problem 7: map() + string formatting
// 👉 You’re given an array of students with their full names. Return an array of their initials in uppercase.
const students = [
    { fullName: "Harsh Sharma" },
    { fullName: "Radha Singh" },
    { fullName: "Om Bhatt" }
];
// Expected Output: ["HS", "RS", "OB"]
let initials = students.map((el) => {
    return el.fullName
        .split(" ")
        .map((word) => word[0].toUpperCase())
        .join("");
});
console.log(initials); // ["HS", "RS", "OB"]




//  Problem 8: filter()
// 👉 From the array of transactions, return only the successful payments above ₹500.
const transactions = [
    { id: 1, amount: 1200, status: "success" },
    { id: 2, amount: 300, status: "failed" },
    { id: 3, amount: 800, status: "success" },
    { id: 4, amount: 450, status: "success" }
];
// Expected:
// [
//   { id: 1, amount: 1200, status: "success" },
//   { id: 3, amount: 800, status: "success" }
// ]
let successful = transactions.filter((el) => {
    if (el.amount > 500) {
        return el;
    }
})
console.log(successful);



//  Problem 9: forEach()
// 👉 You are given a list of tasks. Log each task with a ✅ if completed, ❌ if not.
const tasks = [
    { task: "HTML Practice", done: true },
    { task: "React Routing", done: false },
    { task: "MongoDB Setup", done: true }
];
// Expected Output:
// HTML Practice - ✅
// React Routing - ❌
// MongoDB Setup - ✅
tasks.forEach((el, i) => {
    if (el.done == true) {
        console.log(`${el.task} - ✅`)
    } else {
        console.log(`${el.task} - ❌`)
    }
})



//  Problem 10: Mixed HOFs
// 👉 You have an array of users with their orders.Your task is to:
// Filter only active users.
// From each, map their name and the total amount of their orders.
// Log each in the format:
// "Harsh - ₹1700"
// "Radha - ₹0"
const customers = [
    {
        name: "Harsh",
        isActive: true,
        orders: [500, 600, 600]
    },
    {
        name: "Radha",
        isActive: true,
        orders: []
    },
    {
        name: "Om",
        isActive: false,
        orders: [300, 400]
    }
];

// Expected console logs:
// Harsh - ₹1700
// Radha - ₹0
const step1 = customers.filter((el) => {
    if (el.isActive) {
        return el;
    }
})
let step2 = step1.map((el) => {
    const sum = el.orders;
    let final = 0;
    for (let i = 0; i < sum.length; i++) {
        final += sum[i];
    }
    return { name: el.name, final }
})
console.log(step2)
step2.forEach((el) => [
    console.log(`${el.name} - ${el.final}`)
])










