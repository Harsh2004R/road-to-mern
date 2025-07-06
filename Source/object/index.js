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










