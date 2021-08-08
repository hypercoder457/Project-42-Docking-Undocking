var issImg, spaceBgImg;
var sCraftImg1, sCraftImg2,  sCraftImg3, sCraftImg4;
var iss, spaceCraft, hasDocked = false;

function preload() {
  spaceBgImg = loadImage("images/spacebg.jpg");
  issImg = loadImage("images/iss.png");
  sCraftImg1 = loadImage("images/spacecraft1.png");
  sCraftImg2 = loadImage("images/spacecraft2.png");
  sCraftImg3 = loadImage("images/spacecraft3.png");
  sCraftImg4 = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(1350, 800);
  iss = createSprite(400, 400);
  iss.addImage(issImg);

  spaceCraft = createSprite(800, 300);
  spaceCraft.addImage(sCraftImg1);
  spaceCraft.scale = 0.25;
}

function draw() {
  background(spaceBgImg);

  if (!hasDocked) {
    spaceCraft.x += random(-1, 1);
    if (keyDown(UP_ARROW)) {
      spaceCraft.y -= 2;
    }

    if (keyDown(DOWN_ARROW)) {
      spaceCraft.addImage(sCraftImg2);
    }

    if (keyDown(LEFT_ARROW)) {
      spaceCraft.x -= 2;
      spaceCraft.addImage(sCraftImg3);
    }

    if (keyDown(RIGHT_ARROW)) {
      spaceCraft.addImage(sCraftImg4);
      spaceCraft.x += 2;
    }
  }

  drawSprites();
}
