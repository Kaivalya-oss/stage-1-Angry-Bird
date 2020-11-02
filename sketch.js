// Namespacing object of matter.js
var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;

// variables for engine world & bodies
var engine , world , ground , ball ;
var box1 , box2;


function setup() {
  createCanvas(1200,600);

  engine = Engine.create(); 

  world = engine.world;

  box1=new Box(600,570,50,50);
  box2 = new Box(800,570,50,50);
  ground= new Ground(600,590,1200,20)
  log1= new Logs(700,530,250,PI/2);
  box3 = new Box(600,450,50,50);
  box4 = new Box(800,450,50,50);
  log2 = new Logs(700,440,250,PI/2);
  box5 = new Box(700,300,50,50);
  log3 = new Logs(650,320,100,PI/10);
  log4 = new Logs(750,320,100,-PI/10);
  pig1 = new Pig(700,450);
  pig2 = new Pig(700,570);
  bird1 = new Bird(100,100,50,50);



}

function draw() {
  background(0);  
  // for the updating the ENGINE.
  Engine.update(engine);

  box1.show();
  box2.show();
  ground.show();
  log1.show();
  box3.show();
  box4.show();
  log2.show();
  box5.show();
  log3.show();
  log4.show();
  pig1.show();
  pig2.show();
  bird1.show();
}