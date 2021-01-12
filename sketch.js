const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var tanmayEngine,tanmayWorld;

var ground,ball;

function setup() {
  createCanvas(800,400);

  tanmayEngine = Engine.create();
  tanmayWorld= tanmayEngine.world;

  var options={
    isStatic:true
  }

  ground = Bodies.rectangle(400,380,800,20,options);
  World.add(tanmayWorld,ground);
  console.log(ground);

  var ballOptions ={
    restitution:0.7
  }

  ball= Bodies.circle(100,110,20,ballOptions);
  World.add(tanmayWorld,ball);

}

function draw() {
  background(0); 
  Engine.update(tanmayEngine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}