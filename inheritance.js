class Person{
    constructor() {
        this.species = "homosapiens"
    }
    eat() {
        console.log("Eat");
    }

    sleep() {
        console.log("Sleep");
    }
}

class Coder extends Person {
    constructor(language) {
        super(); // to invoke parent class constructor
        this.language = language
    }
    work() {
        super.eat()
        console.log("Problem solving");
    }
}

class Doctor extends Person {
    work() {
        console.log("treat patient")
    }
}

let c = new Coder("C++")
console.log(c);
c.eat();
c.sleep();
c.work()

let d = new Doctor()
d.eat();
d.sleep();
d.work()