
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pacman;
var ghost1,ghost2,ghost3,ghost4;
var o1,o2,o3,o4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	pacman=new Pacman(200,200,20);
    ghost1=new Ghost(400,200,20);
	ghost2=new Ghost(500,200,20);
	ghost3=new Ghost(600,200,20);
	ghost4=new Ghost(700,200,20);
	o1=new Obstacle(200,300,100,10);
	o2=new Obstacle(350,300,100,10);
	o3=new Obstacle(450,300,100,10);
	o4=new Obstacle(550,300,100,10);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  pacman.display();
  fill("blue");
  ghost1.display();
  fill("pink");
  ghost2.display();
  fill("green");
  ghost3.display();
  fill("red");
  ghost4.display();
  o1.display();
  o2.display();
  o3.display();
  o4.display();

  drawSprites();
 
}



