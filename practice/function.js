function Student(name){
    this.name = name;
    this.hello = function(){
        console.log('Hello,' + this.name + '!');
    }
}

var kate = new Student('kate');
console.log(kate.name);
kate.hello();