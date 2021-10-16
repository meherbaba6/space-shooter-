var spaceship , background , laser;
var spaceship_img , background_img , laser_img;
var explosionSound , laserSound;
var canvas;


function preload(){
  background_img = loadImage("background.png");
  spaceship_img = loadImage("spaceship.png");
  laser_img = loadImage("laser.png");
  explosionSound = loadSound("explosion.mp3");
  laserSound = loadSound("laser.mp3");
}

function setup(){
    canvas = createCanvas(displayWidth , displayHeight);
  background = createSprite(650,200,30,20);
  background.addImage("background",background_img);
  background.velocityY = +4 
  if (background.y < 0){
      background.y = background.height/2;
    }

  spaceship = createSprite(550,650);
  spaceship.addImage(spaceship_img);
  spaceship.scale = 0.5;

}

function draw(){
  spaceship.x = World.mouseX

if(keyDown("space")){
  laserSound.play();
  createLaser();
}

drawSprites()
}

function createLaser() {
   laser= createSprite(500, 600, 60, 10);
  laser.addImage("laser",laser_img);
  laser.x=spaceship.x;
  laser.velocityY = -4;
  laser.scale = 0.5;
}
