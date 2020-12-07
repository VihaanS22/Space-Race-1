const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world

var VI, HA, AN
var Vi, Ha, An
var stone, stone2, stoneImg
var create, createImg
var space

function preload(){
Vi = loadImage("Vi.png")
Ha = loadImage("Ha.png")
An = loadImage("An.png")
stoneImg = loadImage("stone.png")
createImg = loadImage("create.png")
space = loadImage("space.png")
}

function setup(){
createCanvas(displayWidth, displayHeight-200)   
    
engine = Engine.create();
world  = engine.world;
fill("white")
VI = createSprite(displayWidth/2-200, -20, 50, 50)
VI.addAnimation("Vi", Vi)
VI.velocityY = 4
HA = createSprite(displayWidth/2-70, -20, 50, 50)
HA.addAnimation("Ha", Ha)
HA.velocityY = 4
AN = createSprite(740, -20, 50, 50)
AN.addAnimation("An", An)
AN.velocityY = 4

stone = createSprite(-65, 400, 10, 10)
stone.addAnimation("stone", stoneImg)
stone.scale = 0.3
stone2 = createSprite(1200, 400, 10, 10)
stone2.addAnimation("stone", stoneImg)
stone2.scale = 0.3

create = createSprite(-30, 200, 10, 10)
create.addAnimation("create", createImg)
create.velocityX = 7
}

function draw(){
   background(space) 
   Engine.update(engine);

   if(VI.y>300){
   stone2.velocityX = -14
    stone.velocityX = 14
   }

if(stone.isTouching(VI)){
    VI.velocityX = 5
    VI.velocityY = -6
}
if(stone.isTouching(HA)){
    HA.velocityX = 3
    HA.velocityY = -10

}
if(stone2.isTouching(AN)){
    AN.velocityX = 8
    AN.velocityY = -2
}

VI.display()
HA.display()
AN.display()
stone.display()
stone2.display()
create.display()
}
