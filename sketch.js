var fixedRect,movingRect;




function setup() {
  createCanvas(800,400);
  movingRect=createSprite(200,10,50,80);
  fixedRect=  createSprite(200, 390, 50, 80);
  
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";

  movingRect.debug=true;
  fixedRect.debug=true;
  
  movingRect.velocityY=2;
  fixedRect.velocityY=-2;
}

function draw() {
  background(0);  


  
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

