//  object - 2 lecture related problems will be solved here...
// Problem 1. given a string print the number of thimes each character is prestent

let string = "harsh";
let obj = {};
for (let i = 0; i < string.length; i++) {
    if (obj[string[i]] == undefined) {
        obj[string[i]] = 1;
    }
    else {
        obj[string[i]]++;
    }
}
console.log(obj)


// Problem 2. What is the frequency of each element...
let array = [1, 2, 3, 4, 5, 6, 1, 2, 5, 8, 9];
let frequency = {};
for (let i = 0; i <= array.length - 1; i++) {
    // console.log(array[i])
    if (frequency[array[i]] == undefined) {
        frequency[array[i]] = 1;

    }
    else {
        frequency[array[i]]++;
    }

}
console.log(frequency)



// Problem 3. Find the sum of elemenys whoes accurence is more then 2 times or more...
let numArr = [1, 5, 5, 7, 6, 2, 1, 5, 3];
let accurence = {};
for (let i = 0; i <= numArr.length - 1; i++) {
    if (accurence[numArr[i]] == undefined) {
        accurence[numArr[i]] = 1;
    } else {
        accurence[numArr[i]]++;
    }
}
// console.log(accurence);
let sum = 0;
for (let key in accurence) {
    if (accurence[key] > 1) {
        sum += Number(key);
    }
}
console.log(`sum of accurence elements is - ${sum}`);





// Problem 4. Print the elements whoes accurence is just 1...
let temp = [1, 2, 3, 4, 2, 8, 1, 3, 9];
let objectWith1 = {};
for (let i = 0; i <= temp.length - 1; i++) {
    if (objectWith1[temp[i]] == undefined) {
        objectWith1[temp[i]] = 1;
    } else {
        objectWith1[temp[i]]++;
    }
}
// console.log(objectWith1)
for (let key in objectWith1) {
    if (objectWith1[key] === 1) {
        console.log(key)
    }
}


// Problem 5. print the employee name who's salary is more than 50000.
let emp_Array = [
    {
        name: "Rohit", age: 21, salary: 12000
    }, {
        name: "Ruhi", age: 29, salary: 45000
    }, {
        name: "Kanika", age: 32, salary: 75000
    }
]


for (let i = 0; i <= emp_Array.length - 1; i++) {
    if (emp_Array[i].salary > 50000) {
        console.log(emp_Array[i].name);
    }
}

// Problem 6. Convert the data structure from arrays to array of objects...
let products = ["mackbook", "iPhone", "AirPods"];
let price = [150000, 100000, 25000];
// output..
// [
//     {
//         name: "mackbook", price: 150000
//     }, {
//         name: "iPhone", price: 100000
//     }, {
//         name: "AirPods", price: 25000
//     }
// ]
let completeArray = [];
for (let i = 0; i < products.length; i++) {
    let newObj = {
        name: products[i],
        price: price[i]
    }
    completeArray.push(newObj);
}
console.log(completeArray)


// Problem 7. Given an obj of students grades and their marks in the mentioned below fromate, print the heighest student for each grade along with the total..
// Sample input ...
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

let total1 = 0
let total2 = 0;

for (let i = 0; i <= input_array.length - 1; i++) {
    let grade = input_array[i].grade
    let studentArray = input_array[i].students
    let topper = "";
    let maxTotal = 0;
    for (let j = 0; j < studentArray.length; j++) {
        let student = studentArray[j];
        let total = 0;
        for (let k = 0; k < student.marks.lenght; k++) {
            total += student.marks[k];
        }
        if (total > maxTotal) {
            maxTotal = total;
            topper = student.name;
        }
    }

    console.log("Grade:", grade, "- Topper:", topper, "- Total Marks:", maxTotal);
}




// IA covered problems will be done here.....

























