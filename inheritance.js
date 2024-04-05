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
    work() {
        console.log("Problem solving");
    }
}

class Doctor extends Person {
    work() {
        console.log("treat patient")
    }
}

let c = new Coder()
c.eat();
c.sleep();
c.work()

let d = new Doctor()
d.eat();
d.sleep();
d.work()