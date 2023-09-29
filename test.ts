"use strict";
var anotherObj = {
   juju: 10,
};
var anotherArr = ["shh", "time"];
function anotherFna() {
   return true;
}

var myObj = {
   a: 2,
   b: anotherObj,
   c: anotherArr,
   d: anotherFna,
};
console.log(Object.getOwnPropertyDescriptor(myObj, "a"));
Object.defineProperty(myObj, "a", {
   value: 10,
   writable: false,
   configurable: true,
   enumerable: true,
});
myObj.a = 1000;
console.log(myObj.a);
