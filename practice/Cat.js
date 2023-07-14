function Cat(name) {
    this.name;
}
Cat.prototype.say = function() {
        console.log('Hello,' + this.name +'!' );
    };


class Animal {
    constructor(name){
        this.name = name;
    }
}

class cat extends Animal{
    constructor(name){
        super(name);
    }
    hello(){
        console.log('Hello,' + this.name +'!');
    }
}

var kitty = new cat('kitty');
kitty.hello();