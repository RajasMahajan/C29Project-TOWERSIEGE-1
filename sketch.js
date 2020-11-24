
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
var ground;
var ground1;
var ball;
var balli;
var box;
var box1;
var box2;
var box3;
var box4;
function preload(){
  balli=loadImage("polygon.png");

}
function setup() {
  createCanvas(1200,800);
  
  engine = Engine.create();
  
  ground1=Bodies.rectangle(500,550,300,20,{isStatic:true});
  ground2=Bodies.rectangle(970,450,300,20,{isStatic:true});
  ground=Bodies.rectangle(600,750,1200,30,{isStatic:true});
  box=new Box(250,500);
  ball=new Ball(200,200);
  Engine.run(engine);
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground1.position.x,ground1.position.y,300,20);
  rect(ground.position.x,ground.position.y,1200,30);
  rect(ground2.position.x,ground2.position.y,300,20);
  ball.display();
  box.display();
}

