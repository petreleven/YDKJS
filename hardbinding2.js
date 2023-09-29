function foo(el) {
   console.log(el, this.a);
}

var obj = {
   a: 2,
}

var x = [1, 2, 3]
x.forEach( foo, obj );
