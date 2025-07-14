// Essential Javascript Concepts - 1  (Lecture-1)

// First thing we see in this is diffrence between let var and const.

var variable1 = "rahul" // its function scoped variable
let variable2 = "mohit" // its  block scoped variable.
const variable3 = "constant variable" // its work just like let but the difference is its value can't be reassigned.




function var_variable() {
    console.log(name, "from var variable"); // this will give me undefined because at this line compailer does't know what is name ,but it knows that we have something called name since we difined it using var.
    var name = "sumit";

    if (2 === 2) {
        console.log(name, "from var variable") // know it knows its value as well since we defined it. and it has its value in whole function 
    } else {
        console.log("false")
    }
}
var_variable();

function let_variable() {
    // console.log(name); // this will give me and error called name is not defined because at this line compailer does't know what is name ,and its values because its defined via let.

    // console.log(name, "from let variable")

    if (5 < 1) {
        let name = "sumit";

        console.log("False")
    } else {
        // console.log(name, "from let variable") // this will give me an error because let name = "sumit" is a blocked scoped variable it has acces to its value in just if block
    }
    //  console.log(name); // again this will give me an error name not defined because we dont have access to its value out of if block...
}
let_variable();

function const_variable() {

    if (100 >= 100) {
        const obj = { name: "harsh" };
        const age = 12;
        console.log(obj, "const obj from if block");
    } else {
        // console.log(obj)
        // console.log(age)
    }
    // console.log(age,obj) // this will give me an error called age,obj not defined besacue const works exactly the same as let but we can't modify const variable value. 

}
const_variable()



// What are template strings...
let firstName = `harsh`;
let lastName = `sharma`;
console.log(`my full name is :- ${firstName} ${lastName}`)