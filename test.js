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

var  newObj = Object.freeze(myObj)
console.log(myObj.e)