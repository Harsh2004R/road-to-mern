// Lecture covered problems solved below...


// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(i, j);
//     }
// }

// problem 1. Father asked son to plant 3 seeds in each farms they have five farms. 

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, "*");
    }
}

//  problem 2. you have 3 pots plant 5 seeds in each pot but in horizontal manner.
for (let pot = 1; pot <= 3; pot++) {
    let bag = "";
    for (let seed = 1; seed <= 5; seed++) {
        bag += "*" + " ";
    }
    console.log(bag);
}
// problem 3. chunnu asked munnu to plant seeds in following pattern.
// *
// * *
// * * *
// * * * *
for (let i = 1; i <= 4; i++) {
    let pat = "";
    for (let j = 1; j <= i; j++) {
        pat += "*" + " ";
    }
    console.log(pat);
}
//  Problem 4. Give me this output.
// 1
// *
// 1 2
// * *
// 1 2 3 
// * * *
// 1 2 3 4
// * * * *
for (let i = 1; i <= 4; i++) {
    let pat = "";
    let index = ""
    for (let j = 1; j <= i; j++) {
        pat += "*" + " ";
        index += j + " ";

    }
    console.log(index)
    console.log(pat);
}

// Problem 5. Dry run and find the output.
for (let i = 1; i <= 4; i++) {

    for (let j = 1; j <= 3; j++) {
        if (i == 2) {
            break;
        }
        console.log(i, j);
    }
}
// Output will be,,,
// 1 1
// 1 2
// 1 3
// 3 1
// 3 2
// 3 3
// 4 1
// 4 2
// 4 3
// Problem 6. Dry run and find the output.
for (let i = 1; i <= 4; i++) {

    for (let j = 1; j <= 3; j++) {
        if (j == 2) {
            continue;
        }
        console.log(i, j);
    }
}
// Output will be,,,
// 1 1
// 1 3
// 3 1
// 3 3
// 4 1
// 4 3



// IA shred problems will be shared here...
// Basic Level
// 🧩 Problem 1: Print a square of *
Input: n = 4
for (let i = 1; i <= n; i++) {
    let bag3 = "";
    for (let j = 1; j <= n; j++) {
        bag3 += "*" + " "
    }
    console.log(bag3)
}
// Problem 2: Right-angled triangle of numbers
Input: N = 5;
for (let i = 1; i <= N; i++) {
    let pocket = "";
    for (let j = 1; j <= i; j++) {
        pocket += j
    }
    console.log(pocket)

}
//  Problem 3: Hollow rectangle pattern
Input: rows = 4, cols = 5;
for (let i = 1; i <= rows; i++) {
    // console.log(i)
    let line = "";
    for (let j = 1; j <= cols; j++) {
        if (i === 1 || i === rows || j === 1 || j === cols) {
            line += "* ";
        } else {
            line += "  ";
        }
    }
    console.log(line)
}


// & days nested loops Challenge.
//  print a solid square ...
let squareWithDimentions = 4;
for (let i = 1; i <= squareWithDimentions; i++) {
    let shape1 = "";
    for (let j = 1; j <= squareWithDimentions; j++) {
        shape1 += "* ";
    }
    console.log(shape1);
}
let rightAngleDim = 5;
for (let i = 1; i <= rightAngleDim; i++) {
    let shape2 = "";
    for (let j = 1; j <= i; j++) {
        shape2 += j + " ";
    }
    console.log(shape2)
}
// Print a continuous number triangle
// Output:
// 1
// 2 3
// 4 5 6
// 7 8 9 10
Input: continiousNum = 4;
for (let i = 1; i <= continiousNum; i++) {
    let shape3 = "";
    for (let j = 1; j <= i; j++) {
        // shape3 += i + " ";
        
    }
    // console.log(shape3)
}



