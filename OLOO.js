var foo = {
    init: function (id){
        this.id = id
    },
    identify: function (){
        return "I AM "+ this.id
    }
}

var bar = Object.create(foo)
bar.speak = function (){
    console.log("Hello " + this.identify()+".");
}

var b1 = Object.create(bar)
b1.init(1)
b1.speak()
console.log(b1)