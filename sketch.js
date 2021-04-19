
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, ObstacleGroup
var score
var ground
var obstacle 
var food


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)

  
 var survivaltime=0; 
  
  
  
monkey=createSprite(50,325,15,15)
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1
  
 ground=createSprite(52,350,450,10)
 ground.velocityX=-4

  
  foodGroup= new Group()
  obstacleGroup= new Group()
  
  score=0
  
}


function draw() {
background(255)
  

  if(keyDown("space")){
    monkey.velocityY=-12
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0
    
    monkey.velocityX=0
    
    obstacleGroup.setLifetimeEach(-1)
    
    foodGroup.setLifetimeEach(-1)
    
    obstacleGroup.setVelocityXEach(0)
    
    foodGroup.setVelocityXEach(0)
    
  }
  
  
  
  

  
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  monkey.collide(ground)
  spawnFood()
  
  spawnobstacles()
  
  drawSprites()

  
  stroke("black")
  textSize(20)
  fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival Time:  "+survivaltime,100,50)
  
}

function spawnobstacles(){
  
 if(frameCount%300===0) {
   obstacle=createSprite(500,320,10,40)
   obstacle.velocityX=-6
   
   obstacle.addImage(obstaceImage)
   
   obstacle.scale=0.15
   obstacleGroup.add(obstacle)
   obstacle.lifetime=300
 }
  
  
}



function spawnFood(){
  
if(frameCount% 80===0){
  banana=createSprite(600,250,40,10)
  banana.y = random(120,200)
  banana.velocityX= -5
  banana.addImage(bananaImage)
  banana.scale=0.05
    
  banana.lifetime=300
  monkey.depth=banana.depth+1
  
  
  foodGroup.add(banana)
  
}


  
  

  
  






 }




