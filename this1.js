function foo() {
   console.log(this.a);
}

var obj2 = {
   a: 42,
};

var bar = function () {
   foo.call(obj2);
};

bar();
setTimeout(bar, 1000);
bar.call(document)