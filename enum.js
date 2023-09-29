'use strict';
var obj = {};
Object.defineProperty(obj, "a", {
    enumerable: false,
    value: 2,
})

Object.defineProperty(obj, "b", {
    enumerable: true,
    value: 2,
    configurable: false
})


console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj))