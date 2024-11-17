let state = "start";

let gameState = true;

let packageY = 100;
let packageX = 100;

let velocityY = 0.2;
let acceleration = 0.2;

let slide = 10;

let bagX = random(width + -10);
let bagY = 370;

function setup() {
  createCanvas(600, 500);
}

function package(x, y, s) {
  let c = color(180, 30, 0);
  let d = color(150, 0, 0);

  fill(c);
  stroke(0, 0, 0);
  strokeWeight();

  // left side
  push();
  fill(0, 0, 0);
  stroke(0, 0, 0);
  strokeWeight(6 * s);
  strokeJoin(ROUND);
  quad(
    x - 11 * s,
    y,
    x - 70 * s,
    y - 33 * s,
    x - 70 * s,
    y - 53 * s,
    x - 11 * s,
    y - 23 * s
  );

  quad(
    x - 11 * s,
    y + 100 * s,
    x - 70 * s,
    y + 63 * s,
    x - 70 * s,
    y - 30 * s,
    x - 11 * s,
    y + 2 * s
  );
  pop();

  // small part
  quad(
    x - 11 * s,
    y,
    x - 70 * s,
    y - 33 * s,
    x - 70 * s,
    y - 53 * s,
    x - 11 * s,
    y - 23 * s
  );

  quad(
    x - 11 * s,
    y + 100 * s,
    x - 70 * s,
    y + 63 * s,
    x - 70 * s,
    y - 30 * s,
    x - 11 * s,
    y + 2 * s
  );

  // top
  push();
  fill(0, 0, 0);
  stroke(0, 0, 0);
  strokeWeight(6 * s);
  strokeJoin(ROUND);
  quad(
    x - 11 * s,
    y - 25 * s,
    x - 70 * s,
    y - 55 * s,
    x + 16 * s,
    y - 82 * s,
    x + 80 * s,
    y - 55 * s
  );

  pop();

  quad(
    x - 11 * s,
    y - 25 * s,
    x - 70 * s,
    y - 55 * s,
    x + 16 * s,
    y - 82 * s,
    x + 80 * s,
    y - 55 * s
  );

  //right side

  //small part

  push();
  fill(0, 0, 0);
  stroke(0, 0, 0);
  strokeWeight(6 * s);
  strokeJoin(ROUND);
  quad(
    x - 10 * s,
    y,
    x + 80 * s,
    y - 33 * s,
    x + 80 * s,
    y - 53 * s,
    x - 9 * s,
    y - 23 * s
  );

  quad(
    x - 10 * s,
    y + 100 * s,
    x + 80 * s,
    y + 63 * s,
    x + 80 * s,
    y - 30 * s,
    x - 9 * s,
    y + 2 * s
  );

  pop();
  quad(
    x - 9 * s,
    y,
    x + 80 * s,
    y - 33 * s,
    x + 80 * s,
    y - 53 * s,
    x - 9 * s,
    y - 23 * s
  );

  quad(
    x - 9 * s,
    y + 100 * s,
    x + 80 * s,
    y + 63 * s,
    x + 80 * s,
    y - 30 * s,
    x - 9 * s,
    y + 2 * s
  );

  // shadows

  fill(100, 0, 0, 80);
  noStroke();

  quad(
    x - 10 * s,
    y + 10 * s,
    x - 70 * s,
    y - 22 * s,
    x - 70 * s,
    y - 30 * s,
    x - 10 * s,
    y + 2 * s
  );

  quad(
    x - 10 * s,
    y + 10 * s,
    x + 80 * s,
    y - 22 * s,
    x + 80 * s,
    y - 30 * s,
    x - 10 * s,
    y + 2 * s
  );

  //parachute

  //parachute strings
  stroke(0, 0, 0);
  strokeWeight(3 * s);
  line(x, y - 50 * s, x - 100 * s, y - 190 * s);
  line(x, y - 50 * s, x - 40 * s, y - 190 * s);
  line(x, y - 50 * s, x + 100 * s, y - 190 * s);
  line(x, y - 50 * s, x + 40 * s, y - 190 * s);

  // balloon
  fill(180, 30, 0);
  beginShape();
  vertex(x - 100 * s, y - 190 * s);
  bezierVertex(
    x - 100 * s,
    y - 240 * s,
    x - 40 * s,
    y - 240 * s,
    x - 40 * s,
    y - 190 * s
  );
  bezierVertex(
    x - 40 * s,
    y - 240 * s,
    x + 40 * s,
    y - 240 * s,
    x + 40 * s,
    y - 190 * s
  );
  bezierVertex(
    x + 40 * s,
    y - 240 * s,
    x + 100 * s,
    y - 240 * s,
    x + 100 * s,
    y - 190 * s
  );
  bezierVertex(
    x + 100 * s,
    y - 450 * s,
    x - 100 * s,
    y - 450 * s,
    x - 100 * s,
    y - 190 * s
  );

  endShape();

  //balloon pattern
  push();
  fill(100, 0, 0, 90);
  noStroke();
  beginShape();
  vertex(x - 40 * s, y - 190 * s);
  bezierVertex(
    x - 40 * s,
    y - 240 * s,
    x + 40 * s,
    y - 240 * s,
    x + 40 * s,
    y - 190 * s
  );
  bezierVertex(
    x + 70 * s,
    y - 450 * s,
    x - 70 * s,
    y - 450 * s,
    x - 40 * s,
    y - 190 * s
  );

  endShape();
  pop();

  // left bow
  fill(180, 30, 0);
  beginShape();
  vertex(x, y - 55 * s);
  bezierVertex(
    x - 170 * s,
    y - 150 * s,
    x - 100 * s,
    y - 40 * s,
    x - 80 * s,
    y - 30 * s
  );
  bezierVertex(x - 90 * s, y - 20 * s, x - 100 * s, y + 130 * s, x, y - 55 * s);
  endShape();

  // right bow

  beginShape();
  vertex(x, y - 55 * s);
  bezierVertex(
    x + 140 * s,
    y - 220 * s,
    x + 100 * s,
    y - 70 * s,
    x + 80 * s,
    y - 65 * s
  );
  bezierVertex(x + 100 * s, y - 70 * s, x + 180 * s, y + 80 * s, x, y - 55 * s);
  endShape();

  //middle
  fill(150, 0, 0);
  ellipse(x, y - 55 * s, 30 * s);
}

function tree(x, y, s) {
  push();
  fill(124, 79, 49);
  noStroke();
  rect(x - 15 * s, y + 230 * s, 30 * s, 40 * s);
  pop();

  beginShape();

  noStroke();
  vertex(x - 100 * s, y + 250 * s);
  vertex(x + 100 * s, y + 250 * s);
  vertex(x + 50 * s, y + 175 * s);
  vertex(x + 75 * s, y + 175 * s);
  vertex(x + 25 * s, y + 100 * s);
  vertex(x + 50 * s, y + 100 * s);
  vertex(x, y + 20 * s);
  vertex(x - 50 * s, y + 100 * s);
  vertex(x - 25 * s, y + 100 * s);
  vertex(x - 75 * s, y + 175 * s);
  vertex(x - 50 * s, y + 175 * s);
  vertex(x - 100 * s, y + 250 * s);

  endShape();
}

function backdrop() {
  background(190, 210, 230);

  push();
  fill(0, 50, 0, 250);
  tree(300, -120, 1.8);
  pop();
  push();
  fill(0, 50, 30, 250);
  tree(160, -140, 1.6);
  tree(450, -140, 1.7);

  pop();
  push();
  fill(0, 70, 30, 250);
  tree(50, -140, 1.5);
  tree(560, -90, 1.4);
  tree(200, 100, 1);

  pop();
  push();
  fill(0, 50, 0, 250);
  tree(150, 10, 1.5);
  tree(450, 20, 1.6);
  pop();

  push();
  fill(0, 50, 30, 250);
  tree(0, -40, 2);
  tree(width, -40, 2);
  pop();
}

function bagBack(x, y, s) {
  // bag in the very back

  fill(155, 103, 60);
  stroke(0, 0, 0);
  strokeWeight(2);
  strokeJoin(ROUND);

  // bag shape
  ellipse(x + 50 * s, y - 3 * s, 153 * s, 30 * s);

  beginShape();
  vertex(x - 25 * s, y);
  bezierVertex(x + 20 * s, y + 50 * s, x - 75 * s, y + 100 * s, x, y + 150 * s);
  bezierVertex(
    x + 50 * s,
    y + 150 * s,
    x + 50 * s,
    y + 150 * s,
    x + 100 * s,
    y + 150 * s
  );
  bezierVertex(
    x + 175 * s,
    y + 100 * s,
    x + 80 * s,
    y + 50 * s,
    x + 125 * s,
    y
  );

  endShape();

  // bag opening
  fill(124, 79, 49);
  strokeWeight(1);

  ellipse(x + 50 * s, y - 3 * s, 140 * s, 20 * s);
}

function bagFront(x, y, s) {
  // following code was learned from ?

  // canvas setup
  cnv = createGraphics(width, height);

  cnv.fill(155, 103, 60);
  cnv.stroke(0, 0, 0);
  cnv.strokeWeight(2);
  cnv.strokeJoin(ROUND);

  // bag shape
  cnv.beginShape();
  cnv.vertex(x - 25 * s, y);
  cnv.bezierVertex(
    x + 20 * s,
    y + 50 * s,
    x - 75 * s,
    y + 100 * s,
    x,
    y + 150 * s
  );
  cnv.bezierVertex(
    x + 50 * s,
    y + 150 * s,
    x + 50 * s,
    y + 150 * s,
    x + 100 * s,
    y + 150 * s
  );
  cnv.bezierVertex(
    x + 175 * s,
    y + 100 * s,
    x + 80 * s,
    y + 50 * s,
    x + 125 * s,
    y
  );

  cnv.endShape();

  // removing opening
  cnv.strokeWeight();
  cnv.erase();
  cnv.ellipse(x + 50 * s, y - 2.5 * s, 140 * s, 20 * s);

  // transparent canvas
  image(cnv, 0, 0);

  // opening over object
  noFill();
  arc(x + 50 * s, y - 2.5 * s, 140 * s, 20 * s, 0, PI);
}

function startScreen() {
  backdrop();
  fill(0, 0, 0, 100);
  rect(0, 0, width, height);
  push();
  noStroke();
  fill(139, 0, 0);
  rect(200, 340, 200, 75, 10);
  textAlign(CENTER);
  textSize(30);
  fill(255);
  text("Start game", 300, 385);
  pop();
}

function gameScreen() {
  background(0, 255, 0);
  text("game", 100, 100);
  backdrop(100, 100);
  bagBack(bagX, bagY, 1);
  package(packageX + slide, packageY, 0.5);
  bagFront(bagX, bagY, 1);

  if (gameState === true) {
    // gravity logic
    packageY = packageY + velocityY;
    velocityY = velocityY + acceleration;

    if (keyIsDown(37)) {
      slide = slide - acceleration * 15;
    } else if (keyIsDown(39)) {
      slide = slide + acceleration * 15;
    }

    // decrease the velocity pressing up button
    if (keyIsDown(38)) {
      velocityY = velocityY - 0.5;
    }

    if (
      packageY > 700 &&
      packageX + slide > bagX &&
      packageX + slide < bagX + 75
    ) {
      gameState = false;
      console.log(" YOU WIN!");
    } else if (packageY > 700) {
      gameState = false;
      console.log("YOU LOOSE!");
    }
  }
}

function resultScreen() {
  backdrop();
  fill(0, 0, 0, 100);
  rect(0, 0, width, height);
  state = "result";
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "result") {
    resultScreen();
  }
}

function mouseClicked() {
  if (
    state === "start" &&
    mouseX > 200 &&
    mouseX < 400 &&
    mouseY > 340 &&
    mouseY < 415
  ) {
    state = "game";
  } else if (state === "game") {
    state = "result";
  } else if (state === "result") {
    state = "game";
  }
}
