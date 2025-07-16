// Person
//   name
//   age
//   increaseAge() // will increase the age by 1
//   sayName() // return 'my name is <name>'
//   Employee extends Person
//   salary
//   increaseSalary(amt)
//   decreaseSalary(amt)
//   introduce() // return `my name is <name>, I am <age> years old & my salary is <salary>`  

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    increaseAge() {
        return this.age += 1;
    }
    sayName() {
        return `my name is ${this.name}`
    }
}
// let P1 = new Person("Harsh", 22);
// console.log(P1.increaseAge())

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    increaseSalary(amt) {
        let inc = this.salary + amt;
        return inc;
    }
    decreaseSalary(amt) {
        let dec = this.salary - amt;
        return dec;
    }
    introduce() {
        return `my name is ${this.name}, I am ${this.age} years old & my salary is ${this.salary}`
    }

}

let P2 = new Employee("Harsh", 22, 10000);
console.log(P2.increaseSalary(2000))























