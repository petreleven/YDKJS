function foo() {
   setTimeout(()=>{
    console.log(this.a)
   }, 1000)
}

var obj1 = {
   a: 2,
};
var obj2 = {
   a: 3,
};

foo.call(obj1)