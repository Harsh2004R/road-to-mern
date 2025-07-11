// Object-methods lecture covered taks will be some here.......

// Problem 1. Write an obj method to print your name and place you are from....
const objectMethod1 = {
    printMyData: function (name, place) {
        console.log(name, place)
    }
}
objectMethod1.printMyData("Harsh Sharma", "Khatim")





// Problem 2. Write an obj method to print sum of two numbers....
const objectMethod2 = {
    sumData: function (a, b) {
        return a + b;
    }
}
let ans = objectMethod2.sumData(10, 56)
console.log(ans);





// Problem 3. 
let form = {
    name: "Tung Tung Tung Sahoor",
    age: 19,
    origin: "Free Fire",
    apperence: ["funny", "wooden structure", "brown color", "big eyes"],
    ratings: [4.2, 2.5, 3.7, 4.9, 1, 2.8, 4, 1.9],
    submit: function () {
        // Write logic to log all form data...
        console.log(this.name);
        console.log(this.age);
        console.log(this.origin);
        console.log(this.apperence);
        console.log(this.ratings);
    },
    clear_form: function () {
        this.name = "",
            this.age = 0;
        this.origin = "";
        this.apperence = [];
        this.ratings = []
        console.log("form data after reset", this.name);
        console.log("form data after reset", this.age);
        console.log("form data after reset", this.origin);
        console.log("form data after reset", this.apperence);
        console.log("form data after reset", this.ratings);
    },
    avg_rating: function () {
        let ratings = this.ratings;
        let sum = 0;
        let ans;
        for (let i = 0; i < ratings.length; i++) {
            sum += ratings[i];
            ans = sum / ratings.length;
        }
        console.log("Avarage Rating: ", ans);
    }
}

form.submit()
form.avg_rating();
// form.clear_form()





// Problem 4. Write a object method for calculating  area and parameter or rectangle...
const rectangleCalculation = {

    l: 14,
    b: 12,

    area: function (l, b) {
        return l * b;
    },
    parimeter: function (l, b) {
        let sum = l + b
        return 2 * sum;
    }
}
console.log("area of rectangle :", rectangleCalculation.area(10, 12))
console.log("parimeter of rectangle : ", rectangleCalculation.parimeter(10, 12))



// Problem 5. Print Output using object methods ...
// Input --->
// let details = {
//     name: "Ram",
//     age: 39,
//     hobbies: ["coding", "reading", "biking"],
// }

// Required Output --->
// NAME: Ram
// AGE: 39
// My hobbies are coding, reading, biking
let details = {
    name: "Ram",
    age: 39,
    hobbies: ["coding", "reading", "biking"],
    print: function () {
        console.log("NAME: ", this.name);
        console.log("AGE: ", this.age);
        console.log("My hobbies are ", this.hobbies.join(", "))
        // let pocket = "";
        // for (let i = 0; i < this.hobbies.length; i++) {
        //     pocket += this.hobbies[i] + " ";

        // }
        // console.log(`My hobbies are ${pocket}`)
    }
}
details.print()
















// IA given Problems will be solved here...
// Task 1: Create an object person that has name, age, and location. Write 
// a method updateProfile(newName, newAge, newLocation) to update these properties.
let person = {

    name: "Ronin",
    age: 19,
    location: "Delhi",
    updateProfile: function (newName, newAge, newLocation) {
        this.name = newName;
        this.age = newAge;
        this.location = newLocation;
        console.log(this);
    }
}
person.updateProfile("Harh", 22, "Uttarakhand")


// Task 2: Inside an object, write a method countVowels()
// that counts how many vowels are in the name property.

let task2 = {
    name: "hArshit",
    countVowels: function () {
        let str = this.name;
        let vowelCount = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "A" || str[i] === "a" || str[i] === "E" || str[i] === "e" || str[i] === "I" || str[i] === "i" || str[i] === "O" || str[i] === "o" || str[i] === "U" || str[i] === "u") {
                vowelCount++;
            }
        }
        console.log("Vowels found in your name is :", vowelCount)
    }
}
task2.countVowels()



// Task 3: Create a calculator object with the following methods:
// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)
// Also, handle division by zero with a proper message.
let calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        if (b === 0) {
            return "Cannot divide by zero!";
        }
        return a / b;
    },
}
const add = calculator.add(5, 2)
const sub = calculator.subtract(7, -7)
const mul = calculator.multiply(9, 12)
const div = calculator.divide(56, 14)
console.log("addition -", add)
console.log("subtract -", sub)
console.log("multiplication -", mul)
console.log("division -", div)




// Task 4: Student result analyzer
// Create a student object with:
// name
// subject marks(as an object { math: 88, science: 92, english: 78 })
// a method average() that returns the average marks.
// a method grade() that gives:
// A if average ≥ 90
// B if 75–89
// C if 60–74
// D if below 60

let student = {
    name: "Gunjan",
    subject_marks: { math: 88, science: 92, english: 78 },
    average: function () {
        let avg = (this.subject_marks.math + this.subject_marks.science + this.subject_marks.english) / 3;
        return avg;

    },
    grade: function (avg) {
        if (avg >= 90) return "A";
        else if (avg >= 75 && avg < 90) return "B";
        else if (avg >= 60 && avg < 75) return "C";
        else return "D";
    }
}

const avrage = student.average()
const grade = student.grade(avrage)
console.log("Avrage of student is :" + " " + avrage + " " + "& Grade is " + grade)



// Task 5: Method chaining
// Challenge Task (Slightly Advanced):
// Create an object counter with:
// a count property starting at 0
// methods increment(), decrement(), and reset()
// Make these methods return the object itself so that method chaining like this works:

let counter = {
    count: 0,
    increment: function () {
        this.count += 1;
        return this;

    },
    decrement: function () {
        this.count -= 1;
        return this;
    },
    reset: function () {
        this.count = 0;
        return this;
    }
}
const output = counter.increment().increment().decrement().reset();
console.log(output);










