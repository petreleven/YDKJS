function  Foo(name){
    this.name = name;
}

function Bar(name, label){
    Foo.call(this, name);
    this.label = label;
}

Bar.prototype = Object.create(Foo)
Bar.prototype.test = "test";
console.log(Bar.prototype)

