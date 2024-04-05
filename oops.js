// const student = {
//     name: "Ankush",
//     marks: 94.3,
//     printMarks: function() {
//         console.log("marks = ", this.marks);
//     }
// }

class Car{
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand) {
        this.brand = brand
    }
}

let c1 = new Car();
c1.start();
c1.stop();

c1.setBrand("BMW");
console.log(`${c1.brand}`);