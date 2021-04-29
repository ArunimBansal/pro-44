var bg,bg2,form,system,code,security;
var thief1
var score=0;

function preload() {
  bg = loadImage("BANK.png");
  bg2 = loadImage("bg2.png")
  thief1=loadImage("ENTRANCE THIEF.png")
  boximg=loadImage("box.png")
}

function setup() {
  createCanvas(1300,550);
  thief=createSprite(200,450)
  thief.scale=0.5
  thief.addImage(thief1)
  
  box=createSprite(320,350)
  box.addImage(boximg)
  box.scale=0.8
  system = new System()
  security = new Security()

}

function draw() {
  background(bg);
  fill("black")
  text("GUESS THE RIDDLES ",260,350)
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}