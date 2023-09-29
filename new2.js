function foo(something) {
   this.a = something;
}

var obj1 = {};
var bar = foo.bind(obj1);
bar(2)

var baz = new bar(3)
console.log(obj1.a)
console.log(baz.a)