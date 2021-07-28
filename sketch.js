var ship , ship_moving , edges
var sea , seaImg;

function preload(){
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  // creating a sea sprite
  sea = createSprite(0,0,400,400);
  sea.addImage(seaImg);
  sea.scale = 0.5;

 // creating a ship sprite
  ship = createSprite(100,200,40,40);
  ship.addAnimation("moving" , ship_moving);
  edges = createEdgeSprites();

  //giving scale and position to the ship
  ship.scale = 0.2;
  ship.x = 50
}

function draw() {
  background("blue");
 
if(sea.x < 0){
  sea.x = sea.width/2;
}

drawSprites();
}

