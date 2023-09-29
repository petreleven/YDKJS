function foo(a) {
   this.a = a;
}

var bar = new foo(2);
console.log(bar.a)
bar.a = 100
bar.b =340
console.log(bar);
