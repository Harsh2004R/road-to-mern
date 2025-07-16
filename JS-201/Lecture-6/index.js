// This is going to be prototypical inheritance -2 Lecture or inheritance -1 continuation.

let student = {
    name: "john",
    subject: "Javascript",
    // __proto__

}
function sayHi() {
    console.log(`hi, my name is ${this.name}, I am Learning ${this.subject}`)
}

// Don't touch abobe code ...
// invode sayHi() in such a way that this point to the student object.
// way1. make sayHi() a method of student.
//  way2. use call() to invoke the function to set the context of this.

student.sayHi = sayHi;// way 1.
student.sayHi(); // -> hi, my name is john, I am Learning Javascript



// call() // this method taks 1st argument as object and rest other arguments as arguments
sayHi.call(student) // way 2.
// -> hi, my name is john, I am Learning Javascript


function sayBy(name) {
    console.log(`By, from  ${name} 👋, I am Learning ${this.subject}`)
}
sayBy.call(student, "Harsh")
















