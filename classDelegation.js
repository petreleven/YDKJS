var Task = {
    setId :function (ID){
        this.id = ID
    },
    outputID: function (){
        console.log(this.id);
    },
    computeNextId: function (){
        console.log(Number(this.id)+1)
    },
    
}

var ABC = Object.create(Task)
ABC.prepareTask = function (ID, label){
    this.setId(ID);
    this.label = label;
}
ABC.outputTask = function (){
    this.outputID();
    console.log(this.label);
}
ABC.getNext = function (){
    this.computeNextId();
}

ABC.prepareTask("1", "ABC label");
ABC.outputTask();
ABC.getNext();
console.log(ABC)