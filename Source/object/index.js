// I will be cover all lecture covered problems here.....
// Problem 1. Create a object containing your details.
let my_data_obj = {
    name: "Harsh Sharma",
    age: 22,
    phone: 7845123691,
    addredd: "Khatima, Uttarakhand",
    education: "BSC"
}
console.log(my_data_obj);
// Problem 2. extract name value from my_data_obj
console.log(my_data_obj["name"]); // this is bracket notation...
console.log(my_data_obj.name); // this is dot notation.


// Problem 3. Update something in objects.
my_data_obj.phone = 7454589621;
console.log(my_data_obj);

// Problem 4. Add new key and value in objects.
my_data_obj.isMarried = false;
my_data_obj["status"] = "single";

console.log(my_data_obj);


// Problem 5. Delete key and it's value from objects.
delete my_data_obj.status;
console.log(my_data_obj);

// Problem 6. How to print only solo traveling.
let new_obj = {
    id: "9634dsjkd1i23hji23",
    title: "This object contails all hobbies of harsh",
    hobbies: ["gaming", "coding", "solo traveling"]
}
console.log(new_obj["hobbies"][2]);

// Problem 7. print values from nested objects.
let nested_obj = {
    id: "874hfh87349814",
    name: "chunnu",
    address: {
        line1: "Delhi",
        line2: "lajpat road",
        line3: "house no. 145"
    },
    contact: 7458961235,
}
console.log(nested_obj.address["line3"]);
// Problem 8. print all values of nested_obj objects.
for (let key in nested_obj) {
    console.log(nested_obj[key]);
}














// IA covered problem...




//  Level 1: Intermediate Challenges
// 🔹 Problem 1: Add a nested object
// Create a new key "socials" inside vertual_life that contains your instagram, github, and linkedin usernames as keys.
let vertual_life = {
    id: "7846khsajgf",
    name: "Harsh Sharma",
    social: {
        instagram: "harsh_2004r",
        github: "Harsh2004R",
        linkedin: "Harsh2004R"
    }
}
console.log(vertual_life);
// Problem 2: Count total keys in an object
// Write a function countKeys(obj) that returns the total number of keys inside any given object (not including nested keys).

function countKeys(obj) {
    let container = 0;
    for (let key in obj) {
        if (key) {
            container++;
        }
        null;
    }
    console.log(container)
}
let obj = {
    name: "chunnu",
    place: "dholakpur",
    age: 22,
}
countKeys(obj)
// Problem 3: Loop and format output
// Subject: Math, Marks: 92
// Subject: Science, Marks: 88
// ...
let marks = {
    Math: 92,
    Science: 88,
    History: 79
};
for (let num in marks) {
    console.log(` Subject: ${num}, Marks: ${marks[num]}`);
}













// Level 2: Advanced Object Handling
// Problem 4: Deep access 
// Print the second non-veg item and your favorite color.
let person = {
    id: "HS101",
    name: "Harsh",
    preferences: {
        food: {
            veg: ["Paneer", "Dal"],
            nonVeg: ["Chicken", "Fish"]
        },
        colors: ["Blue", "Black"]
    }
};
console.log(person.preferences.food.nonVeg[1], person.preferences["colors"][1])


//  Problem 5: Array of objects filtering
let users = [
    { id: 1, name: "Amit", isAdmin: false },
    { id: 2, name: "Harsh", isAdmin: true },
    { id: 3, name: "Reena", isAdmin: false }
];
users.map((el, idx) => [
    el.isAdmin === true ? console.log(el.name) : null
])













//  Level 3: Expert Problems(Real - world style)
// 🔹 Problem 6: Dynamic property update
// Create a function updateProperty(obj, key, value) that updates the value of a given key.If the key doesn't exist, add it.
let targetObject = {
    userName: "Rohit Sharma",
    email: "rohit42@gmail.com",
    password: "%injds\\3#@IOJ$/@$%NRNWDI\FWSF"
}
function updateProperty(obj, key, value) {
    obj[key] = value;
    return obj;
}
let key = "isMarried";
let value = true;
console.log(updateProperty(targetObject, key, value));


// Problem 7: Nested iteration
// Write a loop that prints:
// javascript
// Copy
// Edit
// Category: fruits => apple, banana
// Category: vegetables => carrot, spinach
// ...
let shop = {
    fruits: ["apple", "banana"],
    vegetables: ["carrot", "spinach"],
    dairy: ["milk", "cheese"]
};
for (let key in shop) {
    console.log(`Category: ${key} => ${shop[key][0]}, ${shop[key][1]} `)
}


// Problem 8: Flatten nested object (Challenge)
// Write a function to flatten this:
// {
//   name: "Harsh",
//   "address.city": "Khatima",
//   "address.pin": 262308
// }
let nested = {
    name: "Harsh",
    address: {
        city: "Khatima",
        pin: 262308
    }
};













