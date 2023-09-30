"use strict";
function Foo(){
   this.a = 384;
}
Foo.prototype.yell = function (){
   console.log("I am saying "+ this.a)
}
//var bar = Object.create(Foo);
var baz = new Foo();
console.log(baz.a)