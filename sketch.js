var bananaImage, bananaGroup, monkey, monkey_running, obstacleImage, obstacleGroup,stage, back_Image, score

function preload() {
  back_Image=loadImage("jungle.jpg")
  
  monkey_running=loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_0.10png")
  
  osbtacleImage("obstacle,png")
  bananaImage("banana.png")
} 
function setup() {
  createCanvas(400, 400);
  
  stage = createSprite(200,200,400,400)
  stage.addImage("stage",back_Image)
  stage.velocityX=-4
  stage.x = stage.width /2;
  
  ground = createSprite(400,360,800,10)
  ground.visible=false
  ground.velocityX=-4
  ground.x = ground.width /2;

  bananaGroup= new Group()
  obstacleGroup= new Group()
  
  monkey=createSprite(80,320,45,100)
  monkey.addAnimation(monkey_running)
}

function draw() {
  background("white");
  
  monkey.collide(ground)
  
  if (keyDown("space")&& (monkey.y===315.09)) {
    monkey.velocityY=-15
  }
    monkey.velocityY = monkey.velocityY + 0.9
  
  if (stage.x < 0){
    stage.x = stage.width/2;
}
  
  if (foodGroup.isTouching(monkey)){
      score=score+2
      monkey.scale=monkey.scale+0.2
      foodGroup.destroyEach()
}
  
  switch(score) {
    case 10: player.scale=0.12;
      break;
    case 10: player.scale=0.14
      break
    case 10: player.scale=0.16
      break;
    case 10: player.scale=0.18
      break;
    
      default:break;
}
  
  food()
  stone()
  
  drawSprites()
}

function food() {
  if (World.frameCount%80===0) {
    var banana=createSprite(400,random(120,200),20,50)
    banana.addAnimation("bananaImage")
    banana.velocityX=-6
    banana.scale=0.07
    banana.lifetime=70
    banana.add(bananaGroup)
  }
}

function stone() {
  if (World.frameCount%300===0) {
    var stone=createSprite(400,320,100,80)
    stone.setAnimation("Stone")
    stone.velocityX=-7
    stone.scale=0.23
    stone.lifetime=60
    stone.add(obstacleGroup)
  }
}
