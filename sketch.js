const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var myEngine, myWorld,box1,box2,box3,box4,box5;
var ground
var pig1,pig2;
var log1,log2,log3,log4;
var bird
function setup() {
  createCanvas(1200,400);
  myEngine= Engine.create();// world
  myWorld= myEngine.world;
 box1= new Box(700,320,70,70);
 box2=new Box(920,320,70,70);
 ground=new Ground(600,390,1200,20)
 pig1=new Pig(810,320)
 log1=new Log(810,260,300,PI/2)
 box3= new Box(700,250,70,70);
 box4=new Box(920,250,70,70);
 pig2=new Pig(810,250);
 log2=new Log(810,210,300,PI/2)
 box5=new Box(810,190,70,70);
 log3=new Log(760,120,150,PI/7)
 log4=new Log(860,120,150,-PI/7)
 bird=new Bird(120,250);
}

function draw() {
  background(0); 

  Engine.update(myEngine)
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  pig2.display();
  box3.display();
  box4.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
}