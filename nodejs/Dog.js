class Dog {
    bark(addressee, time){
        console.log(`the dog barked at ${addressee} for ${time} minutes.`);
    }
}
let dog = new Dog();
dog.bark("Tom",6);