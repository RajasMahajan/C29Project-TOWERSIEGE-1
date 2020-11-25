class Box{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=50;
        this.height=40;
        var ops={
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,50,50,ops);
        World.add(world,this.body);

    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,50,50);
    }
}