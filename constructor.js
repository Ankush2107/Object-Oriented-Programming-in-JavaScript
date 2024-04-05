class Car{
    constructor(brand, mileage) {
        console.log("constructr called")
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    // setBrand(brand) {
    //     this.brand = brand
    // }
}

let c1 = new Car("lexus", 12);
c1.start();
c1.stop();
console.log(c1);


let c2 = new Car("fortuner", 5)
console.log(c2)
// c1.setBrand("BMW");
// console.log(`${c1.brand}`);