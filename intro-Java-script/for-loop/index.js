//java script For loop lecture work and practice work will be done here...
// Lecture problems ----->


// problem 1. write a code to print numbers from 10 to 1.
// Soluion.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// problem 2 . Print numbers from 10 to 1 in horizontal manner.
// Soltuion.
let bag = "";
for (let i = 10; i >= 1; i--) {
    bag += i + " ";
}
console.log("lecture problem-2: ", bag);


// problem 3. Print odd numbers between 1 to 20 in Horizontal line.
// Solution.
let sack = "";
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        sack += i + " ";
    }
}
console.log("lecture problem-3: ", sack);


// Problem 4. Want following output.
//  1-*2-*3-*4-*
let ans = "";
for (let i = 1; i <= 4; i++) {
    ans += i + "-*"
}
console.log("lecture problem-4: ", ans)


//Problem 5. Print the sum of those numbers that are devided via 2 or 5 between a range of 1 and 15.
// Solution.
let sum = 0;
for (let i = 1; i <= 15; i++) {
    if (i % 2 == 0 || i % 5 == 0) {
        sum += i;
    }
}
console.log("lecture problem-4: ", sum);


// Problem 6. calculate factorial of a given number n.
// Solution.
let n = 7;
let factorial = 1;
for (let i = n; i >= 1; i--) {
    factorial *= i;
}
console.log("lecture problem-5: ", factorial)


// Calculate the average of even numbers in a range of 1 to 50.
// Solution. 
let EvenSum = 0;
let count = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        EvenSum += i;
        ++count;
    }
}
console.log("lecture problem-6: ", EvenSum / count)














// IA (Instructional Associate) given problem 1.
// guess the output...
// let result = "";
// for (let i = 1; i <= 5; i++) {
//     result += i * 2 + "-";
// }
// console.log(result);
//  <-------Solution --------->   2-4-6-8-10-


// IA (Instructional Associate) given problem 2.
// Print numbers from 1 to 20. As soon as you encounter a number divisible by 7 and 3, stop the loop.
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 7 == 0) {
        break;
    }
    console.log(i);
}


// IA (Instructional Associate) given problem 3.
// Print all numbers from 1 to 15 except those divisible by 4 or 6.
for (let i = 1; i <= 15; i++) {

    if (i % 4 == 0 || i % 6 == 0) {
        continue;
    }
    console.log(i);
}




















