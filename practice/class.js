class Student{
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log('Hello,' + this.name + '!');
    }
}

var kate = new Student('kate');
kate.hello();

class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); //use super() method to get the parent class
        this.grade = grade;
    }
    myGrade() {
        console.log('I am at grade ' + this.grade);
    }
}

var Lucy = new PrimaryStudent('Lucy', 'A');
Lucy.hello();
Lucy.myGrade();