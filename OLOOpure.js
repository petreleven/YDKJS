var Widget = {
    init: function(height, width){
        this.width = width;
        this.height = height;
        this.$elem = null;
    },
    render:function($where){
        if(this.$elem){
            this.$elem.css({
                width: this.width +"px",
                height: this.height +"px"
            }).appendTo($where)
        }
    }
}

var button = Object.create(Widget);
button.setup = function(width, height, label){
    this.init(height, width);
    this.label = label;
    this.$elem = $("<button>").text(this.label);
}

button.display = function($where){
    this.render($where);
    this.$elem.click(this.onClick.bind(this))
}
button.onClick = function(evt){
    console.log("Button "+ this.label+ " clicked!!")
}
$(document).ready(function(){
    var body = $(document.body);
    var btn1 = Object.create(button);
    btn1.setup(120, 20, "Hello");
    btn1.display(body);
    var btn2 = Object.create(button);
    btn2.setup(120, 20, "World");
    btn2.display(body);
})
