var bananana,monkeyi,obs;
var monkey , monkey_running
var banana ,bananaimg, obstacle, obstacleImage,ground
var score=0,bananacount=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaimg = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,250)
  bananana = new Group ()
  obs = new Group ()
  monkeyi = new Group ()
  monkey = createSprite(100,180,10,10)
  ground = createSprite(100,220,1000,10)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.15
 // monkey.debug = true
  monkeyi.add (monkey)
  ground.shapeColor = ("lightgreen")
}


function draw() {
  background("white")
 
  if (keyDown("space")&&monkey.y>180){
  monkey.velocityY = -12
  }
   monkey.velocityY = monkey.velocityY+0.8
  monkey.collide (ground)
  
  
if (frameCount % 80===0)  {
  banananaa()
}
if (frameCount % 300===0)  {
  rocks()
}
    if (monkeyi.isTouching(bananana)){
  bananacount = bananacount+1  
  } 
  
drawSprites()
  text ("survival time: "+score,500,30)
  score = score+1
  text (" normal bananas collected : "+bananacount,330,30)
 
}
 function rocks(){
   
   obstacle = createSprite(Math.round(random(630,680)),185,10,10)
   obstacle.velocityX = -6
   obstacle.lifetime = 300
   obstacle.addImage(obstacleImage)
   obstacle.scale = 0.12
  // obstacle.debug = true
 }

function banananaa(){
  banana = createSprite(Math.round(random(620,750)),Math.round(random(50,100)),10,10)
  banana.addImage("bananaa",bananaimg)
  banana.scale = 0.1
  banana.lifetime = 300
  banana.velocityX = -6
 // banana.debug = true
  bananana.add (banana)

  
  
  
  

}



