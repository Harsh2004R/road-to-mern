let a: string = "Harsh";
let b: number = 10;
let arr_num: Array<number> = [1, 2, 3];
arr_num.push(10);
let arr_str: string[] = ["Harsh", "chunnu", ""];

let flag: boolean = false;
type objType = { name: string; age: number; address: string }
let object: objType = {
    name: "Harsh",
    age: 22,
    address: "Shiv solony , Khatima"
}

type objImage = { images: string[] };
let objOfArray = {
    image: ["one", "two", "three"]
}

let arrayOfObj: Array<objType> = [];



type admin = {
    name: string; id: number; role: string; address: string; salary: number
}
type user = {
    name: string; age: number; id: number; role: string; address: string; phone: number; status?: boolean
}

let IA: admin & user = {
    name: "harsh",
    age: 22,
    role: "instructer",
    address: "Murti street",
    salary: 99999,
    id: 142,
    phone: 4456468565
    // status is optional ..>
}


function add(a: number, b: number, c?: string) {
    return `${a + b} and ${c}`;
}
add(2, 3)


// Tupple...
type rgb = [number, number, number, number];
let color: rgb = [253, 241, 223, 208]


// Generic functions...
function generic<Type>(val: Type) {
    return val;
}

generic<number>(152)
generic<string>("152")
generic<boolean>(true)


// Interface ...

interface car1 {
    name: string,
    seat: string,
    id: number
}
interface car2 extends car1 {
    color: string,
    balanced: boolean,
}

let vehicle: car2 = {
    name: "swift",
    seat: "five",
    id: 1256,
    color: "grey",
    balanced: true
}


// Class ....
class Bike1 {
    brand: string;
    name: string;
    constructor(b: string, n: string) {
        this.brand = b;
        this.name = n;
    }
}
let bike1 = new Bike1("honda", "city");
class Bike2 extends Bike1 {
    color: string;
    constructor(b: string, n: string, c: string) {
        super(b, n)
        this.color = c
    }
}
let bike2 = new Bike2("hero", "sata", "blue");









