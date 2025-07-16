// console.log("..........................Console Work starting here........................")

// //  ==================================================================== V E R S I O N    1  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // This is going to be first version of my problem ....
// vehicle1.prototype.start = function () {
//     return `Engine starting with ${this.fuelType}`
// }
// function vehicle1(type, fuelType) {
//     let obj = {};
//     obj.type = type
//     obj.fuelType = fuelType
//     Object.setPrototypeOf(obj, vehicle1.prototype);
//     return obj;
// }
// let v1 = vehicle1("bike", "petorl");
// // console.log(v1.start())
// vehicle2.prototype.coolAC = function () {
//     return `Cooling with AC...`
// }
// Object.setPrototypeOf(vehicle2.prototype, vehicle1.prototype)
// function vehicle2(type, fuelType, hasAc) {
//     let obj = {};
//     obj.type = type
//     obj.fuelType = fuelType
//     obj.hasAc = hasAc
//     Object.setPrototypeOf(obj, vehicle2.prototype);
//     return obj;
// }
// let v2 = vehicle2("bike2", "petorl2", false);
// // console.log(v2.start())
// vehicle3.prototype.announce = function () {
//     return `This ${this.type} can carry ${this.capacity} people`
// }
// Object.setPrototypeOf(vehicle3.prototype, vehicle2.prototype)
// function vehicle3(type, fuelType, hasAc, capacity) {
//     let obj = {};
//     obj.type = type
//     obj.fuelType = fuelType
//     obj.hasAc = hasAc
//     obj.capacity = capacity

//     Object.setPrototypeOf(obj, vehicle3.prototype);
//     return obj;
// }
// let v3 = vehicle3("bus", "deisel", true, 28);
// console.log(v3)
// console.log(v3.start());
// console.log(v3.coolAC());
// console.log(v3.announce())














// //  ==================================================================== V E R S I O N    2  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // This is going to be second version of my problem ....


// vehicle1.prototype.start = function () {
//     return `Engine starting with ${this.fuelType}`
// }


// function vehicle1(object, type, fuelType) {
//     let obj = object || {};
//     obj.type = type
//     obj.fuelType = fuelType
//     Object.setPrototypeOf(obj, vehicle1.prototype);
//     return obj;
// }
// let v4 = vehicle1({}, "bike", "petorl");
// // console.log(v4.start())
// vehicle2.prototype.coolAC = function () {
//     return `Cooling with AC...`
// }
// Object.setPrototypeOf(vehicle2.prototype, vehicle1.prototype)
// function vehicle2(object, type, fuelType, hasAc) {
//     let obj = object || {};
//     vehicle1(obj, type, fuelType);
//     obj.hasAc = hasAc
//     Object.setPrototypeOf(obj, vehicle2.prototype);
//     return obj;
// }

// let v5 = vehicle2({}, "bike2", "petorl2", false);
// // console.log(v5.start())
// vehicle3.prototype.announce = function () {
//     return `This ${this.type} can carry ${this.capacity} people`
// }
// Object.setPrototypeOf(vehicle3.prototype, vehicle2.prototype)
// function vehicle3(object, type, fuelType, hasAc, capacity) {
//     let obj = object || {};
//     vehicle2(obj, type, fuelType, hasAc, capacity)
//     obj.capacity = capacity
//     Object.setPrototypeOf(obj, vehicle3.prototype);
//     return obj;
// }
// let v6 = vehicle3({}, "bus", "deisel", true, 28);
// console.log(v6)
// console.log(v6.start());
// console.log(v6.coolAC());
// console.log(v6.announce())






















// //  ==================================================================== V E R S I O N    3  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // This is going to be third version of my problem ....



// vehicle1.prototype.start = function () {
//     return `Engine starting with ${this.fuelType}`
// }


// function vehicle1(type, fuelType) {
//     this.type = type
//     this.fuelType = fuelType
// }
// let v7 = new vehicle1("bike", "petorl")
// // console.log(v7)
// // console.log(v7.start())



// vehicle2.prototype.coolAC = function () {
//     return `Cooling with AC...`
// }


// Object.setPrototypeOf(vehicle2.prototype, vehicle1.prototype)
// function vehicle2(type, fuelType, hasAc) {
//     vehicle1.call(this, type, fuelType);
//     this.hasAc = hasAc
// }


// let v8 = new vehicle2("bike2", "petorl2", false);
// // console.log(v8)
// // console.log(v8.start())



// vehicle3.prototype.announce = function () {
//     return `This ${this.type} can carry ${this.capacity} people`
// }
// Object.setPrototypeOf(vehicle3.prototype, vehicle2.prototype)
// function vehicle3(type, fuelType, hasAc, capacity) {

//     vehicle2.call(this, type, fuelType, hasAc, capacity)
//     this.capacity = capacity

// }
// let v9 = new vehicle3("bus", "deisel", true, 28);
// console.log(v9)
// console.log(v9.start());
// console.log(v9.coolAC());
// console.log(v9.announce())










// ====================================================================== V E R S I O N    4  =============================================================================== 
// This is going to be our last or final version of this given problem.......
class vehicle1 {
    constructor(type, fuelType) {
        this.type = type;
        this.fuelType = fuelType;
    }
    start() {
        return `Engine starting with ${this.fuelType}`;
    }
}

class vehicle2 extends vehicle1 {
    constructor(type, fuelType, hasAc, coolAC) {
        super(type, fuelType);
        this.hasAc = hasAc;
    }
    coolAC() {
        return `Cooling with AC...`;
    }
}

class vehicle3 extends vehicle2 {
    constructor(type, fuelType, hasAc, capacity, announce) {
        super(type, fuelType, hasAc);
        this.capacity = capacity;
    }
    announce() {
        return `This ${this.type} can carry ${this.capacity} people`;
    }
}

const v10 = new vehicle3("bus", "diesel", true, 28);
console.log(v10);
console.log(v10.start());
console.log(v10.coolAC());
console.log(v10.announce());
























console.log(".................................................Console Work ending here................................................")