var arr = [10, 20, 30];

function foo(num){
    return num<10;
}

function bar(num, index){
    console.log(num);
    console.log(index);
}

//arr.forEach(bar);
var passing_test = arr.some(foo)
//console.log(passing_test)

for(var v of arr){
    console.log((v))
}

var it = arr[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
