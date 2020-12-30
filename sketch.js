
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(135,600,30)
	bob2=new Bob(195,600,30)
	bob3=new Bob(255,600,30)
	bob4=new Bob(315,600,30)
	bob5=new Bob(375,600,30)
	roof1=new roof(270,200,400,50)
  rope3=new sling(bob3.body,{x:270,y:200})
  rope2=new sling(bob2.body,{x:210,y:200})
  rope1=new sling(bob1.body,{x:150,y:200})
  rope4=new sling(bob4.body,{x:330,y:200})
  rope5=new sling(bob5.body,{x:390,y:200})
  //ground=new roof(270,655,400,50)
  //ground.visibile=false
  Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("white");
  Engine.update(engine)
  //ground.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope3.display();
  rope2.display();
  rope1.display();
  rope4.display();
  rope5.display();
  
  strokeWeight(3)
  //line (bob3.body.position.x, bob3.body.position.y, roof1.body.position.x, roof1.body.position.y)
  //line (bob2.body.position.x, bob2.body.position.y, roof1.body.position.x-60, roof1.body.position.y)
  //line (bob1.body.position.x, bob1.body.position.y, roof1.body.position.x-120, roof1.body.position.y)
  //line (bob4.body.position.x, bob4.body.position.y, roof1.body.position.x+60, roof1.body.position.y)
  //line (bob5.body.position.x, bob5.body.position.y, roof1.body.position.x+120, roof1.body.position.y)

  //drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x:mouseX, y:mouseY})
}
function mouseDragged(){
  Matter.Body.setPosition(bob2.body,{x:mouseX, y:mouseY})
}
function mouseDragged(){
  Matter.Body.setPosition(bob3.body,{x:mouseX, y:mouseY})
}
function mouseDragged(){
  Matter.Body.setPosition(bob4.body,{x:mouseX, y:mouseY})
}
function mouseDragged(){
  Matter.Body.setPosition(bob5.body,{x:mouseX, y:mouseY})
}  

