var ship, ship_moving, edges;
var groundImage;
var ground;

function preload(){

ship_moving  = loadAnimation("ship-1.png", "ship-2.png");
groundImage = loadImage("sea.png");

}

function setup(){
  createCanvas(500,400);

  ground = createSprite(200,180,400,20);
  ground.addImage ("ground",groundImage);
  ground.x = ground.width/2;
  


  ship = createSprite(600,240,20,50);
  ship.addAnimation("moving", ship_moving);
  edges = createEdgeSprites();

  ship.scale = 0.25;
  ship.x = 190


}


function draw() {
  background("blue");
  ground.velocityX = -2;

 
  if (ground.x < 0){
  ground.x = ground.width/2;
  }

  drawSprites();
  }
  
