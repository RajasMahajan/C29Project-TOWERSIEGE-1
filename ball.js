class Ball{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.radius=30;
        var ops={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,30,ops);
      //  World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(balli,this.body.position.x,this.body.position.y,this.radius,this.radius);
        
    }

}