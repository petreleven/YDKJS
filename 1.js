var obj1 = {
   a: 10,
};

var obj2 = Object.create(obj1);
obj2.b = 20;
console.log(obj2);
