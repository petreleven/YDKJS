var obj = {
    a:2,
}

var myObj = Object.create(obj)
for (var k in myObj){
    console.log(k)
}
myObj.a = 100
console.log(myObj)