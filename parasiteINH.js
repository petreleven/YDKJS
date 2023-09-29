function  Vehicle(){
    this.engines = 1;
}

Vehicle.prototype.ignition = function (){
    console.log("Engine starting...")
}

Vehicle.prototype.drive = function (){
    this.ignition();
    console.log("Moving... ta ta taaaa");
}
function  Car(){
    var car = new  Vehicle();
    car.wheels = 4
    //save priveleged reference to drive in vehicle
    var vehDrive = car.drive;
    //overide drive of vehicle
    car.drive = function (){
        vehDrive.call(this);
        console.log("This vehicle is driving with " + this.wheels +" wheels!!!");
    }
    return car
}

var car = new  Car();
car.drive();
