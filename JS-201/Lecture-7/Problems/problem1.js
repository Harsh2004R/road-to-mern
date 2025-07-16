// .call() Method 
// .call()  Method allows us to use this keyword in any regular function and it takes first agrument as object 
// whome this keyword will point and rest of arguments as arguments.
let objForCall = {
    name: "Harshu",
    age: 22
}
function sayName(address) {
    return `Your name is ${this.name} and you address is ${address}`
}
console.log(sayName.call(objForCall, "Shiv colony ,khatima 262308"));


// .apply() Method
// .apply() Method works exactly the same as call() method but it takes first arg as object whome this key word will point 
// and rest of arg as an array of arguments.

let objForApply = {
    movie: "Sita Ramam",
    duration: "2.5 hours"
}
function reviewMovie() {
    return `${this.movie} movie got ${args[0]} IMDB ratings  and it is ${this.duration} long.`
}
let args = [4.6, 3.2, 2.9]
let applyRes = reviewMovie.apply(objForApply, args); // here apply method accept objForApply ponting to this keyword and arg as aruments array.
console.log(applyRes);



// .bind()
// .bind() method gives us a fresh new function in which the this keyword is preset for you...
let objForBind = {
    fruit: "apple",
    color: "red"
}

function fruitColor() {
    return `The color of this food is ${this.colors[1]}`
}

let fruitNewFun = fruitColor.bind({ colors: ["red", "green"] }); // here .bind() method will set this value as preset value and creates an new function called fruitNewFun.
console.log(fruitNewFun())

