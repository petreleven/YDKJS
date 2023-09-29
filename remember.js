var myArray = [99, 88, 77];

for (let i = 0; i < myArray.length; i++) {
   console.log(myArray[i]);
}

console.log("////////////////");
myArray.forEach((value, index) => {
   console.log(index);
});

console.log("////////////////");
var xx = myArray.some((value, index) => {
   return value % 2 === 0
});
console.log(xx);
