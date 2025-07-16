// write a ES6 Class IPhone1 to create iPhone objects in bulk quantiy
// iPhone1 takes in generation, ASIN, weight, OS, RAM, color, display, camera
// the object it creates has the following
// properties: generation, ASIN, weight, OS, RAM, color, display, camera
// methods:
// dial - console logs "tring.. tring..."
// sendMessage - console logs "Sending message..."
// cameraClick - "Camera clicked"
// feel free to copy your constructor function solution and then make changes to them



class IPhone1 {
    constructor(generation, ASIN, weight, OS, RAM, color, display, camera) {
        this.generation = generation
        this.ASIN = ASIN
        this.weight = weight
        this.OS = OS
        this.RAM = RAM
        this.color = color
        this.display = display
        this.camera = camera
    }
    dial() {
        return `tring.. tring...`
    }
    sendMessage() {
        return "Sending message..."
    }
    cameraClick() {
        return "Camera clicked"
    }

}

let newPhone = new IPhone1("3rd", "NaN", "156gm", "10  OS", "6gb", "Black", "4.5 inch", true)
// console.log(newPhone.cameraClick())


// --------------------------------
// bluetooth feature added
// 3g Internet feature added
// high resolution capture added
// -------------------------------- 

class IPhone2 extends IPhone1 {
    constructor(generation, ASIN, weight, OS, RAM, color, display, camera, internet, resolution) {
        super(generation, ASIN, weight, OS, RAM, color, display, camera);
        this.internet = internet;
        this.resolution = resolution;
    }
    blutooth() {
        return `conneccting to bluetooth devices....`
    }
}
let newPhone2 = new IPhone2("3rd", "NaN", "156gm", "10  OS", "6gb", "Black", "4.5 inch", true, "3g", "heigh")
console.log(newPhone2)
console.log(newPhone2.cameraClick())
console.log(newPhone2.dial())
console.log(newPhone2.sendMessage())




















