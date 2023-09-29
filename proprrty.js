"use strict";

var myObj = {};

Object.defineProperty(myObj, "a", {
   enumerable: true,
   value: 2,
});

Object.defineProperty(myObj, "b", {
   enumerable: false,
   value: 3,
});
console.log(Object.keys(myObj));
console.log(Object.getOwnPropertyNames(myObj));
