var VI, HA, AN
var Vi, Ha, An
var stone, stone2, stoneImg
var create, createImg
var space, tell, tellImg, space2, space3
var story, storyImg
var portal, portalImg
var astro, astroImg
var button, buttonImg, goal, goalImg
var race, raceImg, ship, shipImg
var GameState = start;



function preload(){
Vi = loadImage("Vi.png")
Ha = loadImage("Ha.png")
An = loadImage("An.png")
stoneImg = loadImage("stone.png")
createImg = loadImage("create.png")
space = loadImage("space.png")
space2 = loadImage("space2.png")
space3 = loadImage("space3.png")
tellImg = loadImage("tell.png")
storyImg = loadImage("play.png")
portalImg = loadImage("portal2.png")
astroImg = loadImage("astro.png")
buttonImg = loadImage("button.png")
goalImg = loadImage("goal.png")
raceImg = loadImage("race.png")
shipImg = loadImage("ship.png")
}

function setup(){
createCanvas(displayWidth, displayHeight-200)   
   


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

stone = createSprite(-100, 400, 10, 10)
stone.addAnimation("stone", stoneImg)
stone.scale = 0.3
stone2 = createSprite(1435, 400, 10, 10)
stone2.addAnimation("stone", stoneImg)
stone2.scale = 0.3

create = createSprite(-30, 200, 10, 10)
create.addAnimation("create", createImg)
create.velocityX = 7


tell = createSprite(500, 100, 20, 20)
tell.addAnimation("intro", tellImg)

portal = createSprite(displayWidth/2, 1000, 50, 50)
portal.addAnimation("portal", portalImg)

story = createSprite(1600, 100, 50, 50)
story.addAnimation("story",storyImg)

astro = createSprite(-240, 500, 20, 20)
astro.addAnimation("astronaut", astroImg)
astro.scale = 0.5

button = createSprite(600, 250, 20, 20)
button.addAnimation("play", buttonImg)
button.visible = false

goal = createSprite(400, -200, 20,20)
goal.addAnimation("goal", goalImg)

race = createSprite(600, 200, 10, 10)
race.addAnimation("poster", raceImg)

ship = createSprite(600, 400, 10, 10)
ship.addAnimation("spaceship", shipImg)
}

function draw(){
   background(space) 
  

   VI.display()
   HA.display()
   AN.display()
   stone.display()
   stone2.display()
   create.display()
   tell.display()
   story.display()
   portal.display()
 
  

   if(VI.y>300){
   stone2.velocityX = -14
    stone.velocityX = 14
    stone.lifetime = 50
    stone2.lifetime = 50
    create.lifetime  = 200
   }

if(stone.isTouching(VI)){
    VI.velocityX = 5
    VI.velocityY = -6
    VI.lifetime = 50
}
if(stone.isTouching(HA)){
    HA.velocityX = 3
    HA.velocityY = -10
    HA.lifetime = 50

}
if(stone2.isTouching(AN)){
    AN.velocityX = 8
    AN.velocityY = -2
tell.velocityY = -5
AN.lifetime = 50
tell.lifetime = 30
}

if(create.x>displayWidth+50){
   story.velocityX = -4
   portal.velocityY = -3
   story.lifetime = 200
   portal.lifetime = 100
}
if(portal.isTouching(story)){
    story.visible = false
}
if(portal.y<= -10){
background(space2)
goal.display()
astro.velocityX = 6
astro.lifetime = 200
textSize(25)
text("YOU LAND AT A ROUGH SURFACE AND LOOK AROUND...IS THAT..JUPITER?", 10, 340)
text("YOU HELP YOUR FRIENDS UP AND SEE YOURSELF IN SPACE SUITS!AND THERE ARE SPACESHIPS TOO!!!", 10, 370)


}
if(astro.x>1400){
goal.velocityY = 5
 goal.lifetime = 100

text("A MESSAGE APPEARS IN FRONT OF YOU AND SAYS;'WELCOME TO THE SPACE RACE.'", 10, 400)
text("'BE THE SAVIOUR OF THE PLANETS!'", 10, 430)
//text("YOU AND YOUR FRIENDS ARE EXCITED TO SEE THIS AND THINK IT IS A GAME..", 10, 460)
//text("BUT LITTLE DO YOU KNOW THAT THIS IS NOT A GAME", 10, 490)
}


if(create.x>displayWidth+50){
 textSize(25)
    text("MARS, 2070...EARTH IS NO MORE A PLACE FOR LIVING. IT'S BECOME A PLACE ONLY FOR RESEARCH.", 10, 100)

}
if(goal.y>1350){
    background(space3)
 race.display()
 ship.display()
    }




astro.display()
button.display()



}

