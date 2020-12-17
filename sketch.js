var fixRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixRect=createSprite(600,400,50,50);
  fixRect.shapeColor = "green"
  fixRect.debug = true;
  movingRect=createSprite(400,200,80,30)
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX; 
  movingRect.y = mouseY; 
  console.log("distance using Width" , fixRect.width/2 + movingRect.width/2);
  console.log("distance using X = " ,movingRect.x - fixRect.x);

  if (movingRect.x - fixRect.x < fixRect.width/2 + movingRect.width/2
    && fixRect.x - movingRect.x < fixRect.width/2 + movingRect.width/2
    && movingRect.y - fixRect.y < fixRect.height/2 + movingRect.height/2
    && fixRect.y - movingRect.y < fixRect.height/2 + movingRect.height/2)
  {
    fixRect.shapeColor = "blue"
    movingRect.shapeColor = "blue"
  }
  else
  {
    fixRect.shapeColor = "green"
    movingRect.shapeColor = "green"
  }
  drawSprites();
}