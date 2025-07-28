declare let a: string;
declare let b: number;
declare let arr_num: Array<number>;
declare let arr_str: string[];
declare let flag: boolean;
type objType = {
    name: string;
    age: number;
    address: string;
};
declare let object: objType;
type objImage = {
    images: string[];
};
declare let objOfArray: {
    image: string[];
};
declare let arrayOfObj: Array<objType>;
type admin = {
    name: string;
    id: number;
    role: string;
    address: string;
    salary: number;
};
type user = {
    name: string;
    age: number;
    id: number;
    role: string;
    address: string;
    phone: number;
    status?: boolean;
};
declare let IA: admin & user;
declare function add(a: number, b: number, c?: string): string;
type rgb = [number, number, number, number];
declare let color: rgb;
declare function generic<Type>(val: Type): Type;
interface car1 {
    name: string;
    seat: string;
    id: number;
}
interface car2 extends car1 {
    color: string;
    balanced: boolean;
}
declare let vehicle: car2;
declare class Bike1 {
    brand: string;
    name: string;
    constructor(b: string, n: string);
}
declare let bike1: Bike1;
declare class Bike2 extends Bike1 {
    color: string;
    constructor(b: string, n: string, c: string);
}
declare let bike2: Bike2;
