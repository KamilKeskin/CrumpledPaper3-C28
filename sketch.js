
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject,groundObject, dustbinImg, dustbinImgObj, launcher;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,350,0.001);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	launcher=new Launcher(paperObject.body,{x:200, y:300});

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
 
  launcher.shapeColor = "black"

  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  launcher.display();
  
drawSprites();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-100});
    
  	}
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
    //}
}

function mouseReleased(){
    launcher.fly();
}
