let a = "Harsh";
let b = 10;
let arr_num = [1, 2, 3];
arr_num.push(10);
let arr_str = ["Harsh", "chunnu", ""];
let flag = false;
let object = {
    name: "Harsh",
    age: 22,
    address: "Shiv solony , Khatima"
};
let objOfArray = {
    image: ["one", "two", "three"]
};
let arrayOfObj = [];
let IA = {
    name: "harsh",
    age: 22,
    role: "instructer",
    address: "Murti street",
    salary: 99999,
    id: 142,
    phone: 4456468565
    // status is optional ..>
};
function add(a, b, c) {
    return `${a + b} and ${c}`;
}
add(2, 3);
let color = [253, 241, 223, 208];
// Generic functions...
function generic(val) {
    return val;
}
generic(152);
generic("152");
generic(true);
let vehicle = {
    name: "swift",
    seat: "five",
    id: 1256,
    color: "grey",
    balanced: true
};
// Class ....
class Bike1 {
    constructor(b, n) {
        this.brand = b;
        this.name = n;
    }
}
let bike1 = new Bike1("honda", "city");
class Bike2 extends Bike1 {
    constructor(b, n, c) {
        super(b, n);
        this.color = c;
    }
}
let bike2 = new Bike2("hero", "sata", "blue");
//# sourceMappingURL=index.js.map