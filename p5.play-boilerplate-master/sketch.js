const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var ground,box,ball;

var engine,world;

function setup() {
 
  createCanvas(800,400);

/*var properties = {
  restitution: 1.8
}*/


engine = Engine.create();
world = engine.world;

 /*box = Bodies.rectangle(400,200,20,20,properties);
 World.add(world,box);*/

var properties = {
  isStatic : true
}

 ground = Bodies.rectangle(400,390,800,10,properties);
 World.add(world,ground);

 var properties = {
  restitution: 1
}

 ball = Bodies.circle(400,200,10,properties)
World.add(world,ball)
}



function draw() {
  background("aqua");  
Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
 // rect(box.position.x,box.position.y,20,20);
  rect(ground.position.x,ground.position.y,800,7);
  ellipse(ball.position.x,ball.position.y,10);
  drawSprites();
}