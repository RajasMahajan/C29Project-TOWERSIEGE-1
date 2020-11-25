class Ball{
    constructor(x,y){
        
        this.x=x;
        this.y=y;
        this.radius=50;
        var ops={
            isStatic:false
        }
        this.body=Bodies.circle(x,y,50,ops);
        World.add(world,this.body);
    }
    display(){
       imageMode(CENTER);
       image(balli,this.x,this.y,this.radius,this.radius);
        
    }
}