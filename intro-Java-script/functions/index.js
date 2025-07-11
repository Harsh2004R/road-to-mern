// Function lecture covered problems will be covered here.
// Problem1. Write a function to perform BODMAS operations
function bodmas() {
    a = 10;
    b = 5;
    console.log(a / b);
    console.log(a * b)
    console.log(a + b);
    console.log(a - b);
}
bodmas()


// Problem 2. Print hellow world 5 times ...
function hello() {
    let i = 1;
    while (i <= 5) {
        console.log("hello world")
        ++i;
    }
}
hello()


// Problem 3. passing values via paranthesis.
function invokeWithValues(a, b) {
    console.log(a + b);
}
invokeWithValues(5, 6)
invokeWithValues(10, 12)
invokeWithValues(15, 9)


// Problem 4. Check if the num is even using return keyword.
function CheckEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let evenAnswer = CheckEven(14)
console.log("is number even", evenAnswer);



// Problem 5. checki if the number is prime or not via functions.
function CheckPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
        return true;
    }
}
let n = 7;
if (CheckPrime(n)) console.log("true");
else console.log("false");


//Problem 6. STory to function.
// Chunnu add two numbers a,b and munnu takes result of chunnu and multiply it via 6
// then chocho takes munnu result / answer and devid it via 2 and
// at the end rahul takes chocho result and simple print that.


function chunnu(a, b) {
    return a + b;
}
function munnu(c) {
    return c * 6;
}
function chocho(d) {
    return d / 2;
}
function rahul(e) {
    console.log(`final answer is - ${e}`);
}

let step1 = chunnu(5, 6);
let step2 = munnu(step1);
let step3 = chocho(step2);
let step4 = rahul(step3);









// IA provided problems here.....
//  Level 1 – Foundation Check
// Problem 1. Maximum of Three Numbers
// Write a function findMax(a, b, c) that returns the largest of three numbers.
function findMax(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
const largestNum = findMax(1, 2, 3)
console.log(`largest number is - ${largestNum}`)


//  Level 2 – Intermediate Thinking
// Problem2.  Count Digits in Number
// Write a function countDigits(num) that counts how many digits are in a number. (e.g., countDigits(1234) ➝ 4)

function countDigits(num) {
    // let str = "";
    // str = num;
    // console.log(str.length)
    console.log(num.toString().length)
}
countDigits(1234);


// Problem3. Power Function Without Math.pow()
// Write a function power(base, exp) that calculates base raised to the power of exp using loops.
function power(base, exp) {
    let result = 1;
    for (let i = 1; i <= exp; i++) {
        result *= base;
    }
    console.log(result);
}


// Problem 4. Sum of All Primes till n
// Write a function sumOfPrimes(n) that returns the sum of all prime numbers up to n.
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function sumPrimeTilln(n) {
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    console.log(sum);
}



//  Level 3 – Logic + Function Composition
// Problem 5. Reverse a Number
// Write a function reverseNumber(num) that returns the reverse of a number. (e.g., 1234 → 4321)
function reverseNumber(num) {
    let s = num.toString().split("").reverse().join("");
    return +s;
}
let RevStrAns = reverseNumber(1234);
console.log(RevStrAns);



// Problem 6. Palindromic Number Check
// Write a function isPalindrome(num) that returns true if the number is a palindrome.
function isPalindrome(num) {
    let s = num.toString().split("").reverse().join("");
    // return +s;
    if (+s == num) return true;
    else return false;

}
let isPalindromeAnswer = isPalindrome(121);
console.log(isPalindromeAnswer);


//Problem 7.  Custom BODMAS Function with Operator
// Write a function calculate(a, b, operator) that performs +, -, *, or / based on the operator provided as a string.

function calculate(a, b, operator) {
    if (operator === "/") {
        return a / b;
    }
    if (operator === "*") {
        return a * b;
    }
    if (operator === "+") {
        return a + b;
    }
    if (operator === "-") {
        return a - b;
    }

}
const responce = calculate(1, 2, "+")
console.log(responce);


























