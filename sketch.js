
const engine = Matter.Engine;
const world  = Matter.World;
const bodies = Matter.Bodies;

var myengine,myworld;

var gameState = "onSling";

var ground;

var rope;

var ball;

var block1;

function setup() {

  createCanvas(1270,580);

  myengine = engine.create ();
  myworld  = myengine.world;

  ground   = new Ground (650,580,1300,15);

  ball     = new Ball (500,200,40);

  rope     = new Rope (ball.body, { x:300 , y:0 } );

  block1   = new Block (900,500);
  block2   = new Block (950,500);
  block3   = new Block (1000,500);
  block4   = new Block (850,500);
  block5   = new Block (800,500);

  block6   = new Block (900,450);
  block7   = new Block (950,450);
  block8   = new Block (1000,450);
  block9   = new Block (850,450);
  block10  = new Block (800,450);
 
  block11  = new Block (900,400);
  block12  = new Block (950,400);
  block13  = new Block (1000,400);
  block14  = new Block (800,400);
  block15  = new Block (850,400);

  block16  = new Block (900,350);
  block17  = new Block (950,350);
  block18  = new Block (1000,350);
  block19  = new Block (800,350);
  block20  = new Block (850,350);

  block21  = new Block (900,300);
  block22  = new Block (950,300);
  block23  = new Block (850,300);
  
  block24  = new Block (900,250);
  block25  = new Block (950,250);
  block26  = new Block (850,250);

  block27  = new Block (900,200);
 
}

function draw () {

  background("yellow");

  textSize (18);
  text ("Drag the wrecking ball and release it to destroy tower. Press Space to get an other chance.",10,510);

  text ("Good Luck!!",10,530);
  
  engine.update (myengine);

  ground.display ();

  ball.display ();

  rope.display ();

  block1.display ();
  block2.display ();
  block3.display ();
  block4.display ();
  block5.display ();
  block6.display ();
  block7.display ();
  block8.display ();
  block9.display ();
  block10.display ();
  block11.display ();
  block12.display ();
  block13.display ();
  block14.display ();
  block15.display ();
  block16.display ();
  block17.display ();
  block18.display ();
  block19.display ();
  block20.display ();
  block21.display ();
  block22.display ();
  block23.display ();
  block24.display ();
  block25.display ();
  block26.display ();
  block27.display ();
 
}

function mouseDragged () {

  if (gameState!=="launched") {

    Matter.Body.setPosition (ball.body, { x: mouseX , y: mouseY } )

  }
  
}

function mouseReleased () {

  gameState = "launched";
  rope.fly ();

}


function keyPressed () {

  if (keyCode===32) {

    gameState = "onSling";
    rope.attach (ball.body);

  }

}
