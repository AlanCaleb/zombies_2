var background,backgroundImg;
var cazador,cazadorImg;
var cazadorDispara;
var zombiesImg;
var zombiesScore = 0;
var cazadorScore = 3;
var balas = 30;
var zombiesGroup;
var life_1,life_2,life_3;
var life1,life2,life3;

function preload() {
  backgroundImg = loadImage("assets/bg.jpeg");
  cazadorImg = loadImage("assets/cazador_1.png");
  cazadorDispara = loadImage("assets/shooter_3.png");
  zombiesImg = loadImage("assets/zombie.png");
  life_1 = loadImage("assets/heart_1.png");
  life_2 = loadImage("assets/heart_2.png");
  life_3 = loadImage("assets/heart_3.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  background = createSprite(displayWidth/2+10,displayHeight/2);
  background.addImage(backgroundImg);
  background.scale = 1.1;

  cazador = createSprite(displayWidth-1150,displayHeight-300);
  cazador.addImage(cazadorImg);
  cazador.scale = 0.5;

  life1 = createSprite(displayWidth-50,40);
  life1.addImage(life_1);
  life1.scale = 0.5;
  
  life2 = createSprite(displayWidth-100,40);
  life2.addImage(life_2);
  life2.scale = 0.5;

  life3 = createSprite(displayWidth-150,40);
  life3.addImage(life_3);
  life3.scale = 0.5;

  zombiesGroup = new Group()
  
}

function draw() {
  if(keyDown(UP_ARROW)||touches.length > 0) {
    cazador.y = cazador.y-30;
  }

  if(keyDown(DOWN_ARROW)||touches.length > 0) {
    cazador.y = cazador.y+30;
  }

  if(keyWentDown("space")) {
    cazador.addImage(cazadorImg);
  }

  else if(keyWentUp("space")) {
    cazador.addImage(cazadorDispara);
  }

  if(zombiesGroup.isTouching(cazador)) {
   cazadorScore = cazadorScore -1;
  }
  fill("white");
  textSize(20);
  text("Vidas"+cazadorScore,displayWidth/2,displayHeight/2);
  enemies();
  drawSprites();
}

function enemies() {
  if(frameCount % 60 === 0) {
    var zombies = createSprite(random(displayWidth+10,1000),random(100,500));
    zombies.addImage(zombiesImg);
    zombies.velocityX = -5;
    zombies.scale = 0.2;
    zombies.lifetime = 280;
    zombiesGroup.add(zombies);
  }
}