//java script For loop lecture work and practice work will be done here...
// Lecture problems ----->

// What I have covered so far is written bellow...
let array = [1, 2, 3, 4, 5];
console.log(`array :- ${array}`);
console.log(`Lenght :-${array.length}`)
// push pop an array...
array.push(99);
console.log(`pushed array including 99:- ${array}`);
array.pop();
console.log(`popped array including 99:- ${array}`);
// Spreading of an arrat...
let Name = ["harsh", "Gunnu", "Koka", "Tota"]
let AddName = [...Name, "Chintu"]
console.log(`new array with coped / spreaded Name array:- \n ${AddName}`)





// Lecture discussed problems.
// Problem 1. Print all the elements in array except Pushpa and Ved.
let Movies = ["RRR", "KGF", "Ram Setu", "Pushpa", "Rockey", "Ved"]
for (let i = 0; i <= Movies.length - 1; i++) {
    if (Movies[i] === "Pushpa" || Movies[i] === "Ved") {
        continue;
    }
    console.log(`${Movies[i]}`);
}

let i = 0;
while (i <= Movies.length - 1) {

    if (Movies[i] === "Pushpa" || Movies[i] === "Ved") {
        i++;
        continue;
    }
    console.log(Movies[i]);
    ++i;
}
















// IA Covered problems....................
//  LEVEL 1: Basics (Loop + Array access)
// Problem 1.  Given an array of numbers, print only the even numbers from it.
let numbers = [3, 12, 8, 7, 15, 24, 31, 2];
for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}


// LEVEL 2: Intermediate (Loop + Conditional Filtering)
// Problem 2: You’re given an array of student scores. Print all the scores greater than 75, but stop the loop immediately 
// if you encounter a score below 35(student failed).
let scores = [88, 92, 79, 81, 90, 32, 85, 99];
for (let i = 0; i <= scores.length - 1; i++) {
    if (scores[i] < 35) {
        break;
    } if (scores[i] > 75) {
        console.log(scores[i]);
    }
}


// LEVEL 3: Advanced Logic + Looping
// Problem 3. You’re given an array of product prices.
// Skip (i.e., continue) any product priced above ₹1000
// Stop the loop if a product is priced at ₹0 (invalid product)
// For valid products (≤ ₹1000), print the price after applying 
// 10% discount
let prices = [250, 1300, 499, 999, 0, 120, 800];
for (let i = 0; i <= prices.length - 1; i++) {
    if (prices[i] === 0) {
        break;
    }
    if (prices[i] <= 1000) {
        const discount = prices[i] - (prices[i] * 10 / 100)
        console.log(Math.floor(discount));

    }
    if (prices[i] > 1000) {
        continue;
    }
}








