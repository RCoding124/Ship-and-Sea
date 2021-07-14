var ship, ship_moving
var sea , seaImage

function preload () {

  sea= loadImage("sea.png")
  ship_moving= loadAnimation("ship-1.png", "ship-2.png","ship-3.png","ship-4.png")
}
function setup () {
  createCanvas(600,200);
// create a ship sprite
ship = createSprite(50,160,20,50)
ship.addAnimation( "moving",ship_moving)


    //create a sea sprite
    sea = createSprite(200,180,400,20);
    sea.addImage("sea",seaImage);
    sea.x = sea.width /2;
    sea.velocityX = -4;
}

function draw(){
background(220)