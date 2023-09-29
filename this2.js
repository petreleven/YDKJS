function foo(something) {
   console.log(this.a);
   return this.a + something;
}

var obj = {
   a: 2,
};

var bar = function(){
    return foo.apply(obj, arguments)
}

var result = bar(10)
console.log(result)