function mixin(sourceObj, targetObj){
    for (let key in sourceObj){
        if (!(key in targetObj)){
            targetObj[key] = sourceObj[key];
        }       
    }
    return targetObj;
}

var Vehicle = {
    engines: 1,
    ignition: function (){
        console.log("VRRRRM engine on");
    },
    
    drive: function (){
        this.ignition();
        console.log("Moving");
    }
}

var Car = mixin(Vehicle, {
    wheels: 4,
    drive: function(){
        Vehicle.drive.call(this)
        console.log("Mercedes"+ this.wheels +" wheeels!");
    },
})

Car.drive()
