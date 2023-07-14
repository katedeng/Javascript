var a = ['A', 'B', 'C'];
a.name= 'Hello';
for (var x of a) {
    console.log(x);
}
console.log(a);


var fn = x => x*x;
console.log(fn(5));

var arr = [10,20,1,2];
arr.sort((x,y) =>{
    if(x>y){
        return 1;
    }else  {
        return -1;
    }
});
console.log(arr);


function* next_id() {
    var current_id=1;

    while(true){
        yield current_id;
        current_id++;
    }
}
// 测试:
var
    x,
    pass = true,
    g = next_id();
for (x = 1; x < 100; x ++) {
    if (g.next().value !== x) {
        pass = false;
        console.log('测试失败!');
        break;
    }
}
if (pass) {
    console.log('测试通过!');
}


var today = new Date();
if (today.getMonth() === 1 && today.getDate() === 14) {
    console.log('Sweet, I have reserved a dinner, and meet at the restaurant');
}else{
    console.log("I fogot the time!");
}