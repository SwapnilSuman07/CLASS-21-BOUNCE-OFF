var movingRect, fixedRect;
var gameobject1,gameobject2;


function setup() {

  createCanvas(800,400);
  movingRect = createSprite(400, 200, 80, 30);
  fixedRect = createSprite(400, 400, 50, 80);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  movingRect.velocityY=4;
  fixedRect.velocityY=-4;
  gameobject1=createSprite(200,50,50,50);
  gameobject2=createSprite(200,350,50,50);
  gameobject1.velocityY=4;
  gameobject2.velocityY=-4;
}

function draw() {
  background("yellow"); 
  
 /* movingRect.x = mouseX;
  movingRect.y = mouseY;*/

  bounceOff(gameobject1,gameobject2);
  bounceOff(movingRect,fixedRect);

  console.log(movingRect.x - fixedRect.x);

  

  drawSprites();
}

function bounceOff(object1,object2){
  if(object1.x - object2.x < object1.width/2+object2.width/2
    && object2.x - object1.x < object1.width/2+object2.width/2) {
    /*movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";*/
  object1.velocityX=object1.velocityX*-1;
  object2.velocityX=object2.velocityX*-1;
  }
  if( object1.y-object2.y < object1.height/2+object2.height/2
    && object2.y-object1.y < object1.height/2+object2.height/2 ){
      object1.velocityY=object1.velocityY*-1;
      object2.velocityY=object2.velocityY*-1;
  }
}