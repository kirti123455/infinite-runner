var harryPotter, harryPotterImg;

function preload(){
harryPotterImg= loadAnimation("hp1.png", "hp2.png","hp3.png", "hp4.png");
sceneImg= loadImage("quiditch.png");
ghostImage= loadImage("ghost.jpg");
obstacleImage= loadAnimation("bird-1.png.png", "bird-7.png.png", "bird-12.png.png", "bird-15.png.png", "bird-29.png.png");
obstacle1Image= loadAnimation("bird1-1.png.png", "bird1-4.png.png", "bird1-5.png.png","bird1-7.png.png")
}

function setup(){
createCanvas(windowWidth,windowHeight);

scene= createSprite(windowWidth/2,windowHeight/2,2500, windowHeight);
scene.addImage(sceneImg);
scene.velocityX= -2;
scene.scale= 3.5;

ground= createSprite(windowWidth/2,windowHeight-20, 3400, 10);
//ground.visible= false;

harryPotter= createSprite(150, 500, 50,50);
harryPotter.addAnimation("running", harryPotterImg);
harryPotter.scale= 0.4;

harryPotter.setCollider("circle", 0, 0, 100)
harryPotter.debug= true;
obstacleGroup= new Group();
obstacle1Group= new Group();
}

function draw(){
background("black");
if(scene.x<600){
  scene.x= 700
  //console.log(scene.width/2);
  //console.log(scene.x);

}
console.log("scene x"+ scene.x);

if(keyDown("space")){
  harryPotter.velocityY=-8;
}

harryPotter.velocityY= harryPotter.velocityY +0.5;

harryPotter.collide(ground);
spawnObstacle();
spawnObstacle1();
drawSprites();

}


function spawnObstacle() {
  //write code here to spawn the obstacle
  if (frameCount % 250 === 0) {
    var obstacle= createSprite(1500,500,40,10);
    obstacle.y = Math.round(random(40,750));
    obstacle.addAnimation("bird" ,obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
     obstacle.lifetime = 500;
    
    
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
  
}

function spawnObstacle1() {
  //write code here to spawn the obstacle
  if (frameCount % 150 === 0) {
    var obstacle1= createSprite(1500,500,40,10);
    obstacle1.y = Math.round(random(40,750));
    obstacle1.addAnimation("bird" ,obstacle1Image);
    obstacle1.scale = 0.4;
    obstacle1.velocityX = -3;
    
     //assign lifetime to the variable
     obstacle1.lifetime = 500;
    
    
    //add each obstacle to the group
    obstacle1Group.add(obstacle1);
  }
  
}

//or you can use the switch case to spawn obstacles.



