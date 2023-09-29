function foo(something) {
   console.log(this.a);
   return this.a + something;
}

var obj = {
   a: 2,
};
var bar = foo.bind(obj)
var result = bar(3)

console.log(result)