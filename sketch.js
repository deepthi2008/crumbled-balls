
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 1300);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
	}

	ball = Bodies.circle(100,200,40,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,40);
 
  drawSprites();
 
}



