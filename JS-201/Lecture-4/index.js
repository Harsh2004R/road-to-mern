// Advance Function Object concepts ...
// First thing we learn in this lecture is Creating objects in BULK...

// Method 1. Using Factory functions...
// A factory function is nothing but a function which returns a object 
function factoryIphone(name, ios_version, price) {
    let iPhone = {
        name,
        ios_version,
        price,
        method1: function () {
            return `Your current phone name is ${this.name}`
        },
        method2: function () {
            return `your current version is ${this.ios_version}`
        }
    }
    return iPhone
}
console.log(factoryIphone("i-phone X", "V1.25.8", 25000))
console.log(factoryIphone("i-phone 12", "V3.5.2", 65000).method1())


// Problem 2: Create a Laptop Factory
// Write a factory function createLaptop that takes in:
// brand (e.g., "Dell", "HP")
// model (e.g., "Inspiron 15", "Pavilion")
// price
// ram (in GB)
// Each laptop should have two methods:
// getSpecs() → Logs full specs.
// isBudgetFriendly() → Returns true if price < 40000.
// Example Output:

function createLaptop(brand, model, price, ram) {
    let laptop = {
        brand, model, price, ram,
        getSpecs: function () {
            console.log(`Brand: ${brand}, Model: ${model} , RAM: ${ram}, Price: ${price}`)
        },
        isBudgetFriendly: function () {
            return price < 40000;
        }
    }
    return laptop;

}

const l1 = createLaptop("Dell", "Inspiron 15", 38000, 8);
l1.getSpecs(); // Brand: Dell, Model: Inspiron 15, RAM: 8GB, Price: 38000
const ifWorthit = l1.isBudgetFriendly();
console.log(ifWorthit);// true




// Problem 3: Use setPrototypeOf for Animal Sounds
// Create a soundPrototype object with a method makeSound() that logs the animal sound based on this.type.
// Then write a factory function createAnimal(name, type) that returns an object with:
// name (e.g., "Dog")
// type (e.g., "bark", "meow")
// Use Object.setPrototypeOf to give the object access to makeSound().
let soundPrototype = {
    makeSound: function () {
        console.log(`${this.name} says ${this.type}!`)
    }
}
function createAnimal(name, type) {
    let obj = {
        name, type,
    }
    Object.setPrototypeOf(obj, soundPrototype)
    return obj;
}
const dog = createAnimal("Dog", "bark");
dog.makeSound(); // Dog says bark!





// Problem 4: Array of Mobiles with Custom Methods
// Create an array mobiles containing 3 objects created using your factoryIphone() function.
// Then loop through the array and call both method1() and method2() on each.


let phone1 = factoryIphone("i-phone 10", "V2.2.8", 50000);
let phone2 = factoryIphone("i-phone 11", "V2.25.9", 65000);
let phone3 = factoryIphone("i-phone 12", "V3.5.4", 95000);
const mobiles = [phone1, phone2, phone3];
let log = mobiles.forEach((el) => {
    let method1 = el.method1();
    let method2 = el.method2();
    console.log(method1)
    console.log(method2)
})






// setPrototypeOf    or     ...
let details = {
    print: function () {
        console.log(this)
        console.log(`Fruit is ${this.name} and its color is ${this.color}`);
    }
}

function fruits(name, color) {
    let fruits = {
        name, color
    }
    Object.setPrototypeOf(fruits, details)
    return fruits;
}
const fruit1 = fruits("apple", "red");
const fruit2 = fruits("banana", "yellow");
// console.log(fruit1.print.toString())
fruit1.print();
fruit2.print();




















