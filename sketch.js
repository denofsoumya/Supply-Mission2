var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bottomSprite,leftSprite,rightSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottomSprite=createSprite(400,650,200,20);
	bottomSprite.shapeColor="red";

	leftSprite=createSprite(290,610,20,100);
	leftSprite.shapeColor="red";

	rightSprite=createSprite(500,610,20,100);
	rightSprite.shapeColor="red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.0, isStatic:true});
	World.add(world, packageBody);
	
	redBox1 = new RedBox(290,610,20,100);
	redBox2 = new RedBox(400,630,200,20);
	console.log(redBox2);
	redBox3 = new RedBox(500,610,20,100);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 // redBox1.display();
 // redBox2.display();
 // redBox3.display();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //console.log(ground.position.x);
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}



