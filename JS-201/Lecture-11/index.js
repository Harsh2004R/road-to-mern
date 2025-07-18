// https://www.notion.so/vivmagarwal/Commonly-asked-interview-Questions-8ddfa4b600d341298a0222e45648db09

// // Curring function....
// // Example of curring function...
function a() {
    return function b() {
        return function c() {
            return `hello friends... from curring function`;
        }
    }
}
let ans = a()()()
console.log(ans) // Output : hello friends... from curring function


function A() {
    let a = "Hello";
    return function B() {
        let b = "from";
        return function C() {
            let c = "chunnu"
            return `${a} ${b} ${c}`
        }
    }
}
console.log(A()()()) // Hello from chunnu


// Convert this function into curing function...
// function a(A, B, C) {
//     return A + B + C;
// }
// a(2, 3, 4)
function sum(a) {
    return function B(b) {
        return function C(c) {
            return a + b + c;
        }
    }
}
console.log(sum(2)(3)(4))

// Defining currying using arrow functions...
// let sumX = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c;
//         }
//     }
// }
let sumX = (A) => (B) => (C) => A + B + C
console.log(sumX(3)(3)(4))



// Infinite curring function...
// sample output1:
//  sumInfinite(1)(2)(3)(4)(5)(6)() // 21
// sample output2:
// sumInfinite(1)(2)(3)(4)(8)(3)(1)() // 22

function sumInfinite(a) {
    return function (b) {
        if (b) {
            return sumInfinite(a + b);
        } else {
            return a;
        }
    }
}
let infiniteFunAns = sumInfinite(1)(2)(3)(4)(8)(3)(1)()
console.log(infiniteFunAns)


// Event loop Practice problems...



console.log('Start'); // first 1. //start --->execution stack

setTimeout(() => {
    console.log('Timeout 1'); // five 5. Timeout 1 ---->callback queue or job queue
}, 0);

Promise.resolve()
    .then(() => {
        console.log('Promise 1'); // third 3. // Promise 1 ---> Microtask Queue
    })
    .then(() => {
        console.log('Promise 2'); // fourth 4. // Promise 2 ----> Microtask Queue
    });

setTimeout(() => {
    console.log('Timeout 2'); // six 6. Timeout 2 ---->callback queue or job queue
}, 0);

console.log('End'); // seconde 2.  // End --->execution stack




// // Problem 2.





console.log('1'); // Order 1.  Synchronous → logs immediately

setTimeout(() => {
    console.log('2'); // Order 7.  Goes to Callback Queue / job queue → executes after microtasks are done.
}, 0);

async function asyncFunc() {
    console.log('3'); // Order 2. Synchronous inside async function
    await Promise.resolve();   // pause here & schedule the next line as a microtask
    console.log('4'); // Order 5. Synchronous but this will become (microtask) not execute imediatly
}

asyncFunc(); //  Call the function → prints '3', schedules '4'

new Promise((resolve) => {
    console.log('5'); // Order 3. Synchronous task again...
    resolve(); // promise will Immediately resolve
}).then(() => {
    console.log('6'); // Order 6. Microtask (after current stack ends)
});

setTimeout(() => {
    console.log('7'); // Order 8.  (Scheduled Macrotask) job / callBack queue execution 2
}, 0);

console.log('8'); // Order 4.  Synchronous , this will execute right back console.log('5') 







