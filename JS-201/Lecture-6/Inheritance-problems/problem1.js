console.log("..........................Console Work starting here........................")

//  ==================================================================== V E R S I O N    1  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// This is going to be first version of my problem ....
vehicle1.prototype.start = function () {
    return `Engine starting with ${this.fuelType}`
}


function vehicle1(type, fuelType) {
    let obj = {};
    obj.type = type
    obj.fuelType = fuelType
    Object.setPrototypeOf(obj, vehicle1.prototype);
    return obj;
}
let v1 = vehicle1("bike", "petorl");
// console.log(v1.start())



vehicle2.prototype.coolAC = function () {
    return `Cooling with AC...`
}
Object.setPrototypeOf(vehicle2.prototype, vehicle1.prototype)
function vehicle2(type, fuelType, hasAc) {
    let obj = {};
    obj.type = type
    obj.fuelType = fuelType
    obj.hasAc = hasAc
    Object.setPrototypeOf(obj, vehicle2.prototype);
    return obj;
}


let v2 = vehicle2("bike2", "petorl2", false);
// console.log(v2.start())


vehicle3.prototype.announce = function () {
    return `This ${this.name} can carry ${this.capacity} people`
}
Object.setPrototypeOf(vehicle3.prototype, vehicle2.prototype)
function vehicle3(type, fuelType, hasAc, capacity) {
    let obj = {};
    obj.type = type
    obj.fuelType = fuelType
    obj.hasAc = hasAc
    obj.capacity = capacity

    Object.setPrototypeOf(obj, vehicle3.prototype);
    return obj;
}


let v3 = vehicle3("bus", "deisel", true, 28);
// console.log(v3.start())













//  ==================================================================== V E R S I O N    2  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// This is going to be second version of my problem ....
vehicle1.prototype.start = function () {
    return `Engine starting with ${this.fuelType}`
}


function vehicle1(object, type, fuelType) {
    // let obj = {};
    let obj = object || {};
    obj.type = type
    obj.fuelType = fuelType
    Object.setPrototypeOf(obj, vehicle1.prototype);
    return obj;
}
let v4 = vehicle1({}, "bike", "petorl");
// console.log(v4.start())



vehicle2.prototype.coolAC = function () {
    return `Cooling with AC...`
}
Object.setPrototypeOf(vehicle2.prototype, vehicle1.prototype)
function vehicle2(object, type, fuelType, hasAc) {
    let obj = object || {};
    // obj.type = type
    // obj.fuelType = fuelType
    vehicle1(obj, type, fuelType);
    obj.hasAc = hasAc
    Object.setPrototypeOf(obj, vehicle2.prototype);
    return obj;
}


let v5 = vehicle2({}, "bike2", "petorl2", false);
// console.log(v5.start())


vehicle3.prototype.announce = function () {
    return `This ${this.name} can carry ${this.capacity} people`
}
Object.setPrototypeOf(vehicle3.prototype, vehicle2.prototype)
function vehicle3(object, type, fuelType, hasAc, capacity) {
    let obj = object || {};
    // obj.type = type
    // obj.fuelType = fuelType
    // obj.hasAc = hasAc
    vehicle2(obj, type, fuelType, hasAc, capacity)
    obj.capacity = capacity

    Object.setPrototypeOf(obj, vehicle3.prototype);
    return obj;
}


let v6 = vehicle3({}, "bus", "deisel", true, 28);
// console.log(v6)
// console.log(v6.start())





















//  ==================================================================== V E R S I O N    3  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// This is going to be third version of my problem ....
vehicle1.prototype.start = function () {
    return `Engine starting with ${this.fuelType}`
}


function vehicle1(type, fuelType) {
    this.type = type
    this.fuelType = fuelType
}
let v7 = new vehicle1("bike", "petorl")
// console.log(v7)
// console.log(v7.start())



vehicle2.prototype.coolAC = function () {
    return `Cooling with AC...`
}


Object.setPrototypeOf(vehicle2.prototype, vehicle1.prototype)
function vehicle2(type, fuelType, hasAc) {
    vehicle1.call(this, type, fuelType);
    this.hasAc = hasAc
}


let v8 = new vehicle2("bike2", "petorl2", false);
// console.log(v8)
// console.log(v8.start())



vehicle3.prototype.announce = function () {
    return `This ${this.name} can carry ${this.capacity} people`
}
Object.setPrototypeOf(vehicle3.prototype, vehicle2.prototype)
function vehicle3(type, fuelType, hasAc, capacity) {

    vehicle2.call(this, type, fuelType, hasAc, capacity)
    this.capacity = capacity

}
let v9 = new vehicle3("bus", "deisel", true, 28);
console.log(v9)
console.log(v9.start())

























console.log(".................................................Console Work ending here................................................")