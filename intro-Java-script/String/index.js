// Previous class Array remaining questions...
// Problem 1. Find the maximum in array...
let arr1 = [10, 30, 5, 32, 50, 45];
let noteBook1 = -Infinity;
let i = 0;
while (i < arr1.length) {
    if (arr1[i] > noteBook1) {
        noteBook1 = arr1[i];
    }
    ++i;
}
console.log(`Maximun number of array is :- ${noteBook1}`);


// Problem 2. Find the miniimum in array...
let arr2 = [15, -30, 5, -32, 50, -45];
let noteBook2 = Infinity;
let j = 0;
while (j < arr2.length) {
    if (arr2[j] < noteBook2) {
        noteBook2 = arr2[j];
    }
    ++j;
}
console.log(`Maximun number of array is :- ${noteBook2}`);




//  from here onwords I will solve String lecture covered and IA covered problems.....
let sentence = "My name is tony stark";
console.log(`Length of String is - ${sentence.length}`);
// promblem 1. Print all the characters in new line ....
// solution 1.
let string = "kent water";
for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
}
// Problem 2. updating something in string...
// Solution 2.
let str = "hello";
let new_str = "";
for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] == "h") {
        new_str += "t"
    } else {
        new_str += str[i];
    }
}
console.log(new_str);
// Problem 3. Add a new character at the end or starting of string...
// Solution 3. 
let str1 = "harsh";
console.log(str1 + "a")
console.log("a" + str1)
// Problem 4. Print the character present at index no 2 of each string in a new line...
// Solution 4.
let arr = ["Rahul", "Chintu", "Ritika", "Tanshu", "Kshanika"];
for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i][2]);
}
// Problem 5. Given an array of names count the names starting from "a" or "A"...
// Solution 5.
let array = ["Aman", "Anshul", "Tunnu", "ashwin", "Kinny"];
let count = 0;
let z = 0;
while (z < array.length) {
    array[z][0] === "A" || array[z][0] === "a" ? count++ : ""
    ++z;
}
console.log(count);



// IA given problems...
//  Level 1 – Basic(Warm - up)



// 1. Count vowels in the given string(a, e, i, o, u).
// 2. Print the index of first occurrence of "a" in a string.
// 3. Given a string, replace all spaces with _.
// 4. Print the ASCII code of each character.
// 5. Given a name, add Mr.at the beginning.

// Count vowels in the given string(a, e, i, o, u).
// solve.
let vowel_str = "racecar";
let vowels_count = 0;
for (let i = 0; i <= vowel_str.length - 1; i++) {
    if (vowel_str[i] == "a" || vowel_str[i] == "e" || vowel_str == "i" || vowel_str == "o" || vowel_str == "u") {
        vowels_count++
    }
}
console.log("raceCar:", count)
// Print the index of first occurrence of "a" in a string.
















