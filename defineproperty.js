"use strict";

var anotherObj = {
   juju: 10,
};
var anotherArr = ["shh", "time"];
function anotherFn() {
   return true;
}

var myObj = {
   a: 2,
   b: anotherObj,
   c: anotherArr,
   d: anotherFn,
};

Object.defineProperty(myObj, "a", {
   value: 2,
   configurable: false,
   enumerable: true,
   writable: true,
});

delete myObj.a;
