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



// Problem 9. 
/*
 form a new array using the users array
 the new array is expected to have objects with the following properties:
  - fullName: <name><space><surname> 
  - id: <id>
 check the end result / sample output in the comment below. 
*/
/* 
end result/sample output: 
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let newUsersArray = [john, pete, mary];

let usersMapped = newUsersArray.reduce((acc, item) => {

    // acc = [];// initial val
    // item = { //itration 1.
    //     name: "John", surname: "Smith", id: 1
    // }

    let obj = { "fullName": item.name + " " + item.surname, "id": item.id }
    acc.push(obj);
    return acc;


}, [])
console.log(usersMapped);


// Problem 10.
/*
  Use of the array functons to manipulate the users array. We need a new array called usersGreetings.
  usersGreetings will be an array of strings: ["Hi from John Smith.","Hi from Pete Hunt.","Hi from Mary Key."]
  You are expected to use the getGreeting function inside the callback of the array method that you choose to use.
*/

function getGreeting(firstName, lastName) {
    return `Hi from ${firstName} ${lastName}.`
}
let obj1 = { name: "John", surname: "Smith", id: 1 };
let obj2 = { name: "Pete", surname: "Hunt", id: 2 };
let obj3 = { name: "Mary", surname: "Key", id: 3 };
let names = [obj1, obj2, obj3];
let usersGreetings = names.reduce((acc, item) => {
    msg = getGreeting(item.name, item.surname)
    acc.push(msg)
    return acc;
}, [])
console.log(usersGreetings) // ["Hi from John Smith.","Hi from Pete Hunt.","Hi from Mary Key."]


// Problem 11.

/* 
----------------------------------
create a new object called `newObj` using the `students` array &  
the `subjectsHash` object.
----------------------------------
Expected Output of `newObj`: 
{
  Prateek: ["Rust", "Javascript"],
  Yogesh: ["HTML"],
  Nrupul: ["Java"],
}
*/

let subjectsHash = {
    1: 'Javascript',
    2: 'HTML',
    3: 'CSS',
    4: 'Java',
    5: 'Rust',
}
let students = [
    { id: 1, name: 'Prateek', subjectID: 5 },
    { id: 2, name: 'Yogesh', subjectID: 2 },
    { id: 3, name: 'Nrupul', subjectID: 4 },
    { id: 4, name: 'Prateek', subjectID: 1 },
]
let newObj = students.reduce((acc, item) => {
    let name = item.name;
    let subjectName = subjectsHash[item.subjectID]
    if (acc[name]) {
        acc[name].push(subjectName);
    } else {
        acc[name] = [subjectName];
    }

    return acc;
}, {})

console.log(newObj);





// Problem 12. 
/*
 ------------------------------------------------
 massage the `allStudentsMarksData` to get a new 
 array called `massagedData`

 Instead of separate enties for 5 subjects and their marks,
 in the new array, we just have one entry called marks. 
 marks is an array of objects. the objects of marks
 contains subject and score.
 ------------------------------------------------

  Expected output from `massagedData`

  [
     {
       name: "Prateek", 
       marks: [
         {subject: 'Javascript', score: 90},
         {subject: 'HTML', score: 81},
         {subject: 'CSS', score: 80}
       ]
     },
     {
       name: "Nrupul", 
       marks: [
         {subject: 'Java', score: 95},
         {subject: 'Python', score: 85}
       ]
     },

  ]

*/
let prateekMarksData = {
    name: "Prateek",
    subject1: "Javascript",
    subject2: "HTML",
    subject3: "CSS",
    subject4: null,
    subject5: null,
    marks1: 90,
    marks2: 81,
    marks3: 80,
    marks4: null,
    marks5: null,
}

let nrupulMarksData = {
    name: "Nrupul",
    subject1: "Java",
    subject2: "Pyton",
    subject3: null,
    subject4: null,
    subject5: null,
    marks1: 95,
    marks2: 85,
    marks3: null,
    marks4: null,
    marks5: null,
}

let allStudentsMarksData = [prateekMarksData, nrupulMarksData];
let massagedData = allStudentsMarksData.reduce((acc, item) => {
    let marksArray = [];

    for (let i = 1; i <= 5; i++) {
        let subject = item[`subject${i}`];
        let score = item[`marks${i}`];

        if (subject !== null && score !== null) {
            marksArray.push({ subject: subject, score: score });
        }
    }

    acc.push({
        name: item.name,
        marks: marksArray
    });

    return acc;
}, []);
console.log(massagedData) // this will give you output like this 
// [
//   { name: 'Prateek', marks: [ [Object], [Object], [Object] ] },
//   { name: 'Nrupul', marks: [ [Object], [Object] ] }
// ]
// because how Node.js prints nested objects in the console.
console.log(JSON.stringify(massagedData, null, 2));



// Problem 13. 
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once: 227005.
// using reduce function..
let costUsingReduceMethod = wishlist.reduce((acc, item) => {
    return acc += item.price;
}, 0)
console.log(costUsingReduceMethod);
let total = 0;
let costUsingForEachMethod = wishlist.forEach((el) => {
    total += el.price;
});
console.log(total);



// Problem 14. 
const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/

let votes = voters.reduce((acc, item) => {
    if (item.age >= 18 && item.age <= 25) {
        acc.numYoungPeople += 1;
        item.voted ? acc.numYoungVotes += 1 : ""
    } else if (item.age > 25 && item.age <= 35) {
        acc.numMidsPeople += 1;
        item.voted ? acc.numMidVotesPeople += 1 : ""
    } else {
        acc.numOldsPeople += 1
        item.voted ? acc.numOldVotesPeople += 1 : ""
    }
    return acc;
},
    {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0
    }
)
console.log(votes)


// Problem 15 .
/*
{
  Strawberry: 3,
  Vanilla: 4,
  Chocolate: 5,
  'Cookies & Cream': 2,
  'Mint Chocolate Chip': 3,
  'Rocky Road': 1,
  Pistachio: 1,
  Banana: 1,
  'French Vanilla': 1,
  'Vanilla Bean': 1
}
*/
const flavours = [
    { name: 'Superman', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
    { name: 'Batman', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
    { name: 'Flash', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
    { name: 'Aquaman', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
    { name: 'Green Lantern', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
    { name: 'Robin', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
];

let newData = flavours.reduce((acc, item) => {
    // acc = {strawbeery: 2}
    // item = { name: 'Superman', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] }
    item.favoriteIceCreams.forEach((el) => {
        acc[el] = (acc[el] || 0) + 1;
    })

    return acc;
}, {})

console.log(newData);





































