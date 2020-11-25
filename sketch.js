
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
var ground;
var gameState="onSling";
var ground1;
var ball;
var balli;
var box;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;
var box17;
var box18;
var box19;
var box20;
function preload(){
  balli=loadImage("polygon.png");

}
function setup() {
  createCanvas(1200,800);
  
  engine = Engine.create();
  world = engine.world;

  ground1=Bodies.rectangle(500,550,300,20,{isStatic:true});
  World.add(world,ground1);
  ground2=Bodies.rectangle(970,450,300,20,{isStatic:true});
  World.add(world,ground2);
  ground=Bodies.rectangle(600,750,1200,30,{isStatic:true});
  World.add(world,ground);
  box=new Box(375,500);
  box1=new Box(425,500);
  box2=new Box(475,500);
  box3=new Box(525,500);
  box4=new Box(575,500);
  box5=new Box(625,500);
  box6=new Box(400,400);
  box7=new Box(450,400);
  box8=new Box(500,400);
  box9=new Box(550,400);
  box10=new Box(600,400);
  box11=new Box(430,300);
  box12=new Box(480,300);
  box13=new Box(530,300);
  box14=new Box(580,300);
  box15=new Box(450,200);
  box16=new Box(500,200);
  box17=new Box(550,200);
  box18=new Box(480,100);
  box19=new Box(530,100);
  //ball not box
  ball=new Ball(200,200);
  slingshot=new SlingShot(ball.body,{x:200,y:200});
  Engine.run(engine);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground1.position.x,ground1.position.y,300,20);
  rect(ground.position.x,ground.position.y,1200,30);
  rect(ground2.position.x,ground2.position.y,300,20);
  ball.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  slingshot.display();
  mouseDragged();
  mouseReleased();
  keyPressed();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}
function keyPressed(){
  if(keyCode === 32){
  Matter.Body.setPosition(ball.body,{x:500,y:350});
  slingshot.attach(ball.body);
   gameState="onSling";
 }
}