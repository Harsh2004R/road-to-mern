//  This Lecture includes Mastering Inheritance...
//  We will master it in 3 way
// In this Lecture we are just gonna look Inheritance via factory functions ...


// 1. PI in factory functions.
// 2. PI in Cunstructors.
// 3. PI in ES6.



//  ======================================================  I am gonna take a factory function to understand Inheritance  ============================================
//  ================================================================ V E R S I O N   1 ==================================================================  


const iphone1AdditionalFeatures = {
    dial: function () {
        return `Tring... Tring...`
    }
}


function iphone1(model, color, screen_size) {
    let obj = {};
    obj.model = model;
    obj.color = color;
    obj.screen_size = screen_size;
    Object.setPrototypeOf(obj, iphone1AdditionalFeatures);

    return obj;

}

let i1 = iphone1("iphone1", "black", 4.2);
// console.log(i1.dial())




const iphone2AdditionalFeatures = {
    blutooth: function () {
        return `connecting...`
    }
}

Object.setPrototypeOf(iphone2AdditionalFeatures, iphone1AdditionalFeatures);
function iphone2(model, color, screen_size, frontCamera) {
    let obj = {};
    obj.model = model;
    obj.color = color;
    obj.screen_size = screen_size;
    obj.frontCamera = frontCamera;
    Object.setPrototypeOf(obj, iphone2AdditionalFeatures);

    return obj;

}

let i2 = iphone2("iphone1", "black", 4.2, true);
// console.log(i2.blutooth())




















//  ================================================================ V E R S I O N   2 ==================================================================


// we know that every function has its own inbuild object called prototype , so we are gonna use that object to avoid creating below kindda object...
// const iphone2AdditionalFeatures = {
//     blutooth: function () {
//         return `connecting...`
//     }
// }


function message() {
}
console.log(message.prototype) // so we are fetting an empty obj like this -> {}   Now let's add a ke in it and log then.
message.prototype.hello = "hey from harsh"
console.log(message.prototype) // see our output is { hello : "hey from harsh" }
// we are gonna use same idiology to modify / update our iPhoe1 , iPhone2 factory function...



iphone1.prototype.dial = function () {
    return `Tring... Tring...`
}
function iphone1(model, color, screen_size) {
    let obj = {};
    obj.model = model;
    obj.color = color;
    obj.screen_size = screen_size;
    Object.setPrototypeOf(obj, iphone1AdditionalFeatures);

    return obj;

}

let i3 = iphone1("iphone1", "black", 4.2);
// console.log(i3.dial())





iphone2.prototype.blutooth = function () {
    return `connecting...`
}
Object.setPrototypeOf(iphone2AdditionalFeatures, iphone1AdditionalFeatures);
function iphone2(model, color, screen_size, frontCamera) {
    let obj = {};
    obj.model = model;
    obj.color = color;
    obj.screen_size = screen_size;
    obj.frontCamera = frontCamera;
    Object.setPrototypeOf(obj, iphone2AdditionalFeatures);

    return obj;

}

let i4 = iphone2("iphone1", "black", 4.2, true);
// console.log(i4.dial(), i4.blutooth())















//  ================================================================ V E R S I O N   3 ==================================================================
// We know that if we have 2 objects we can littrely access their properties ...
function obj1(o) {
    let obj = o;
    obj.newKey1 = 1
    obj.newKey2 = 2

    return obj;
}
function obj2() {
    let obj = {}
    // i want when i call this fyunction obj2 it should have obj1 keys and values like this ...
    // obj.newKey3 = 1
    // obj.newKey4 = 2
    obj1(obj)
    obj.newKey3 = 3
    obj.newKey4 = 4
    return obj;
}
console.log(obj2()) // this will give me output like this ... { newKey1: 1, newKey2: 2, newKey3: 3, newKey4: 4 }








// we will use this concept to write version 3. and complete inheritance using function factory...
iphone1.prototype.dial = function () {
    return `Tring... Tring...`
}
function iphone1(object, model, color, screen_size) {
    let obj = object;
    obj.model = model;
    obj.color = color;
    obj.screen_size = screen_size;
    Object.setPrototypeOf(obj, iphone1.prototype);

    return obj;

}

let i5 = iphone1({}, "iphone1", "black", 4.2);
// console.log("output comming from i5",i5.dial())





iphone2.prototype.blutooth = function () {
    return `connecting...`
}
Object.setPrototypeOf(iphone2.prototype, iphone1.prototype);
function iphone2(model, color, screen_size, frontCamera) {
    let obj = {};
    iphone1(obj, model, color, screen_size)
    obj.frontCamera = frontCamera;
    Object.setPrototypeOf(obj, iphone2.prototype);

    return obj;

}

let i6 = iphone2("iphone1", "black", 4.2, true);
console.log(i6.dial(), i6.blutooth(), i6.color, i6.model, i6.frontCamera)


































