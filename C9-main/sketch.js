function setup() {
  
  background(51);
  box = createSprite(170,600,30,30);
  box.shapeColor = "black"

  wall = createSprite(-195,131,400,1400)

  ground = createSprite(125,740,250,180)

  ground2 = createSprite(525,690,50,50)

  ground3 = createSprite(725,670,50,50)

  ground4 = createSprite(2025,740,250,180)

  ground5 = createSprite(2500,680,250,10)
  ground5.shapeColor = "green"

  killblock = createSprite(2260,580,200,50)
  killblock.rotationSpeed=4
  killblock.shapeColor = "red"

  moving_platform = createSprite(800,655,80,20)
  moving_platform.shapeColor = "blue"
}



function draw() 
{
background("white")
box.velocityY = box.velocityY +2
camera.x=box.x
camera.y=box.y
text("jes is bald",170,600,400,400)  

  if (keyIsDown(LEFT_ARROW)) {
    box.velocityX = -8
  }

  if (keyWentUp(LEFT_ARROW)) {
    box.velocityX = 0
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    box.velocityX = +8
  }

  if (keyWentUp(RIGHT_ARROW)) {
    box.velocityX = 0
  }
  
  if(keyDown("space")&& box.y >= 580) {
    box.velocityY = -25;
  }

  if (box.y > 770) {
  box.y = 600
  box.x = 170
}
 
if (box.isTouching(moving_platform)) {
  moving_platform.velocityX = +5
  box.velocityX = +5 
  }

if (keyIsDown("space")) {
  box.velocityX = 0
  moving_platform.velocityX = 0
  moving_platform.x = 800
}
 
if (moving_platform.isTouching(ground4)) {
  
    moving_platform.velocityX = 0

  }

  if (box.collide(killblock)) {
    box.x = 2025
    box.y = 600
  }




console.log("jes is bald")

box.collide(ground)
box.collide(ground2)
box.collide(ground3)
box.collide(ground4)
box.collide(ground5)
box.collide(moving_platform)
box.collide(wall)
moving_platform.collide(ground4)
box.collide(killblock)
  drawSprites();
}



