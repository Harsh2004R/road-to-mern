// Array methods will be discussed here.....
// 1. Arr.map();
// 2. Arr.reduce();
// 3. Arr.filter();


// Problem 1. Find the sum of given array using reduce method();
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = array.reduce((acc, item) => {
    acc += item;
    return acc;
}, 0)
console.log("Sum of array = [1,2,3,4,5,6,7,8,9,10] is ", sum)


// Problem 2. Find the total number of commets made via all developer
let developers = [
    { firstName: "Harsh", lastName: "Sharma", dept: "FS", commits: 10 },
    { firstName: "Diwakar", lastName: "Sharma", dept: "FS", commits: 12 },
    { firstName: "Vaibhav", lastName: "Porval", dept: "FE", commits: 6 },
];
let commits = developers.reduce((acc, item) => {
    acc += item.commits;
    return acc;
}, 0)
console.log("commets made via all developers are ", commits)


// Problem 3. GIve output like this.
// output: ["Harsh Sharma", "Diwakar Sharma", "Vaibhav Porval"];
let fullNames = developers.reduce((acc, item) => {
    acc.push(`${item.firstName} ${item.lastName}`);
    return acc;
}, [])
console.log("fullNames array ", fullNames);



// Problem 4. Give me output like this.
// Output ; {
//      FS: true,
//      FE: true,
// }

let deptWithBool = developers.reduce((acc, item) => {
    // acc = {}
    // itwm =    { firstName: "Harsh", lastName: "Sharma", dept: "FS", commits: 10 }
    acc[item.dept] = true;
    return acc;
}, {})
console.log(deptWithBool)



// 6. Problem ...
/* Use proper array method such that the newArr becomes: 
 {John: 1, Pete: 2, Mary: 3}
 
Note: the order doesnot matter here. 

Problem Statement: you are expected to use of the array mehtods
to create a new object called newArr using the users Array.

the keys of the new object (newArr) would be the name of the user 
and the values would be the id of the user
*/



let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

let newArr = users.reduce((acc, item) => {
    acc[item.name] = item.id
    return acc;
}, {})
console.log(newArr)




// Problem 7.  
/*
Problem Statement: 
Use proper array method such that the newArr becomes: 
 [16,20,23,30]
The newArr is simply an array of numbers, in this problem the ages of the users. 
*/
let users_age = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 30 }
];
// [16, 20, 23, 30]
let age_Array = users_age.reduce((acc, item) => {
    acc.push(item.age);
    return acc;
}, [])
console.log(age_Array); // [16,20,23,30]



// Problem 8. 
let data = [
    { name: "John", subject: "Javascript" },
    { name: "John", subject: "HTML" },
    { name: "John", subject: "CSS" },
    { name: "Pete", subject: "Java" },
    { name: "Pete", subject: "English" },
    { name: "Pete", subject: "Maths" },
    { name: "Mary", subject: "Rust" },
    { name: "Mary", subject: "Elm" },
]
/*
 - Use proper array methods to create an object from the data arrray.
 - from the data, the name would become the key of the new object.
 - keys must be unique, one key per user.
 - the value would be an array of their subjects.
 Expected output:
{
  John: ["Javascript", "HTML", "CSS"],
  Pete: ["Java", "English", "Maths"],
  Mary: ["Rust", "Elm"]
}
*/
let subjectHash = data.reduce((acc, item) => {
    // iteration 1 - acc: {}
    // iteration 1 - item: { name: "John", subject: "Javascript" }
    acc[item.name] = acc[item.name] || []
    acc[item.name].push(item.subject);
    // iteraction 1 - acc:
    return acc;
}, {})

console.log(subjectHash);









































