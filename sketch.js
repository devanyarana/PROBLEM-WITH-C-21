
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine ; 
let world;

var ball;
var ground;
var leftside;
var rightside;

function setup() {
	createCanvas(600, 600);
	engine = Engine.create();
	world = engine.world;


	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	fill("white");

	//Create the Bodies Here.
ball = Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
rectMode(CENTER);
ellipseMode(RADIUS);
  
}


function draw() {
  
  background(0);
  ground.show();
  leftside.show();



  ellipse(ball.position.x,ball.position.y,20);


  Engine.update(engine);

  
  drawSprites();
 
}



