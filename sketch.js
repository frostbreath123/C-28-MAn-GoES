

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, slingShot;
var mango1, mango2, mango3, mango4, mango5;
var world,boy;
var stoneReleased = false;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,24);
	mango2 = new Mango(1115, 55, 30);
	mango3 = new Mango(1000, 75, 24);
	mango4 = new Mango(1010, 132, 24);
	mango5 = new Mango(890, 165, 33);
	mango6 = new Mango(890, 230, 33);
	mango7 = new Mango(1000, 225, 24);
	mango8 = new Mango(1190, 210, 33);
	mango9 = new Mango(1090, 230, 30);
	mango10 = new Mango(1150, 140, 24);
	mango11 = new Mango(1125, 160, 30);
	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	stoneObj = new Stone(230, 350, 25);
	slingShot = new Sling(stoneObj.body, {x: 235, y: 410});
	Engine.run(engine);

}

function draw() {

  background(rgb(150, 223, 235));
  
  image(boy ,200,340,200,300);
  
  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);
  detectCollision(stoneObj, mango6);
  detectCollision(stoneObj, mango7);
  detectCollision(stoneObj, mango8);
  detectCollision(stoneObj, mango9);
  detectCollision(stoneObj, mango10);
  detectCollision(stoneObj, mango11);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  groundObject.display();
  stoneObj.display();
  slingShot.display();
  }


function mouseDragged()
{ 
  if(stoneReleased === false)
    Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
  stoneReleased = true;
    slingShot.fly();
}

function keyPressed()
{
	if(keyCode === 32)
	{
    stoneReleased = false;
    Matter.Body.setPosition(stoneObj.body, {x:230, y:350});
    slingShot = new Sling(stoneObj.body, {x: 235, y: 410});
    slingShot.attach(stoneObj.body);
	} 
}

function detectCollision(lStone, lMango)
{
	mangoBodyPosition = lMango.body.position;
	stoneBodyPosition = lStone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= lMango.r + lStone.r)
	{
    Matter.Body.setStatic(lMango.body, false);
  }
}