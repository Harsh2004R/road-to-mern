// while loop lecture and practice work will be done here...






// 🔁 Level 1: Warm-Up (Focus: while, x++, ++x)

// 1. Print numbers from 1 to 10 using a while loop.
// Constraint: Use post-increment x++.
// 2. Print even numbers from 2 to 20.
// Constraint: Use while and pre-increment ++x.
// 3. Print numbers from 10 down to 1.
// Constraint: Use post-decrement x--.


// Level = 1 soluton 1 ----->
let solution = 1;
while (solution <= 10) {
    console.log(solution)
    solution++;
};


// Level = 1 soluton 2 ----->
let evenNum = 2;
let number = 2;
while (evenNum <= 20) {
    console.log(number);
    if(number === 20){
        break;
    }
    number = ++evenNum * 2;
}


// Level = 1 soluton 3 ----->
let x = 10;
while (x >= 1) {
    console.log(x);
    x--;
}








//  Level 2: break Practice
// 1. Print numbers from 1 to 100 but stop if the number is divisible by 13.
// Constraint: Use while with break.
// 2. Print numbers from 10 to 50 but stop the loop when the number is 27.
// Constraint: Use post - increment inside the loop and a break condition.


// Level = 2 soluton 1 ----->
let num = 1;
while (num <= 100) {
    console.log(num);
    if (num % 13 == 0) {
        break;
    }
    num++;
}


// Level = 2 soluton 2 ----->
let X = 10;
while (X <= 50) {
    console.log(x);
    if (X === 27) {
        break;
    }
    X++;
}









//  Level 3: Focus on continue (Core Learning Area)
// 1. Print numbers from 1 to 20 but skip the number 13.
// Constraint: Use continue to skip 13.
// 2. Print numbers from 1 to 30 but skip all even numbers.
// Expected Output: 1 3 5 7 ... 29
// Constraint: Use continue inside while.
// 3. Print numbers from 1 to 30 but skip numbers that are multiples of 3.
// Expected Output: 1 2 4 5 7 8...
// Hint: num % 3 === 0
// 4. Print numbers from 1 to 50 but skip numbers between 20 and 30 (inclusive).
// Constraint: Use a continue statement with a compound condition (&&).


// Level = 3 soluton 1 ----->
let pic_thirteen = 1;
while (pic_thirteen <= 20) {
    if (pic_thirteen === 13) {
        pic_thirteen++;
        continue;
    }
    console.log(pic_thirteen);
    pic_thirteen++;
}


// Level = 3 soluton 2 ----->
let ExceptevenNumber = 1;
while (ExceptevenNumber <= 30) {
    if (ExceptevenNumber % 2 === 0) {
        ExceptevenNumber++;
        continue;
    }
    console.log(ExceptevenNumber);
    ExceptevenNumber++;
}


// Level = 3 soluton 3 ----->
let ExceptMultipleOfThree = 1;
while (ExceptMultipleOfThree <= 30) {
    if (ExceptMultipleOfThree % 3 === 0) {
        ExceptMultipleOfThree++;
        continue;
    }
    console.log(ExceptMultipleOfThree);
    ExceptMultipleOfThree++;
}


// Level = 3 soluton 4 ----->
let requireNum = 1;
while (requireNum <= 50) {
    if (requireNum >= 20 && requireNum <= 30) {
        ++requireNum;
        continue;
    }
    console.log(requireNum);
    ++requireNum;
};








// Level 4: Mixed Concepts Challenge
// 1. Print numbers from 1 to 100 but follow these rules:
// Skip numbers divisible by 5 (continue)
// Stop if the number is 77 (break)
// Use ++x (pre-increment only)
// Constraint: Use one loop only.


// Level = 4 soluton 1 ----->
let req_num = 1;
while (req_num <= 100) {
    if (req_num % 5 === 0) {
        ++req_num;
        continue;
    }
    if (req_num === 77) {
        break;
    }
    console.log(`${req_num}`);
    ++req_num;
}







// 🌟 Bonus Logical Thinking
// Count how many numbers between 1 to 50 are NOT divisible by 3.
// Use continue to skip divisible-by-3 values
// Keep a count variable and print it at the end.


//  Bonus Logical Thinking Solution ------->
let bonusNum = 1;
let count = 0;
while (bonusNum <= 50) {
    if (bonusNum % 3 === 0) {
        ++bonusNum;
        continue;
    }
    count++;
    ++bonusNum;
}
console.log(`numbers between 1 to 50 are NOT divisible by 3 are = ${count}`)









