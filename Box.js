class Box{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=50;
        this.height=40;
        var ops={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,30,30,ops);
       // World.add(world,this.body);

    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}