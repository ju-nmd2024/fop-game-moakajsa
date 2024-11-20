let state = "start";

let gameState = true;

let packageY = -100;
let packageX = 100;

let velocityY = 0.2;
let acceleration = 0.2;

let slide = 10;

let bagX = random(width + -50);
let bagY = 570;

function setup() {
  createCanvas(600, 700);
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
  tree(-30, -40, 2.8);
  tree(width - 60, -40, 2.5);
  pop();
}

function snowflake(x, y, s) {
  stroke(255);
  strokeWeight(10 * s);

  // right middle up

  push();
  translate(x, y);
  line(0, 150 * s, 0, -150 * s);
  line(0, -100 * s, 40 * s, -140 * s);
  line(0, -100 * s, -40 * s, -140 * s);
  line(0, -50 * s, -40 * s, -90 * s);
  line(0, -50 * s, 40 * s, -90 * s);
  pop();

  // pattern outside
  push();
  translate(x, y);
  rotate(0.9);
  line(0, -100 * s, 40 * s, -140 * s);
  line(0, -100 * s, -40 * s, -140 * s);
  rotate(0.7);
  line(0, -100 * s, +40 * s, -140 * s);
  line(0, -100 * s, -40 * s, -140 * s);
  rotate(0.7);
  line(0, -100 * s, +40 * s, -140 * s);
  line(0, -100 * s, -40 * s, -140 * s);
  rotate(0.85);
  line(0, -100 * s, +40 * s, -140 * s);
  line(0, -100 * s, -40 * s, -140 * s);
  rotate(0.85);
  line(0, -100 * s, +40 * s, -140 * s);
  line(0, -100 * s, -40 * s, -140 * s);
  rotate(0.7);
  line(0, -100 * s, +40 * s, -140 * s);
  line(0, -100 * s, -40 * s, -140 * s);
  rotate(0.7);
  line(0, -100 * s, +40 * s, -140 * s);
  line(0, -100 * s, -40 * s, -140 * s);
  pop();

  // pattern inside every other
  push();
  translate(x, y);
  rotate(1.6);
  line(0, -50 * s, +40 * s, -90 * s);
  line(0, -50 * s, -40 * s, -90 * s);
  rotate(1.55);
  line(0, -50 * s, +40 * s, -90 * s);
  line(0, -50 * s, -40 * s, -90 * s);
  rotate(1.55);
  line(0, -50 * s, +40 * s, -90 * s);
  line(0, -50 * s, -40 * s, -90 * s);

  pop();

  // base line structure
  push();
  translate(x, y);
  rotate(0.7);
  line(-150 * s, 0, 150 * s, 0);
  rotate(-0.7);
  line(-150 * s, 0, 150 * s, 0);
  rotate(-0.7);
  line(-150 * s, 0, 150 * s, 0);

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

  // decoration
  snowflake(x + 50, y + 70, 0.3);
}

function startScreen() {
  backdrop();
  fill(0, 0, 0, 100);
  rect(0, 0, width, height);
  push();
  noStroke();
  fill(139, 0, 0);
  rect(200, 515, 200, 75, 10);
  textAlign(CENTER);
  textSize(30);
  fill(255);
  text("Start game", 300, 563);
  pop();
}

function gameScreen() {
  state = "game";
  background(0, 255, 0);
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
      packageY > 900 &&
      packageX + slide > bagX &&
      packageX + slide < bagX + 75
    ) {
      gameState = false;
      resultScreenWin();
      console.log(" YOU WIN!");
    } else if (packageY > 900) {
      gameState = false;
      resultScreenLose();
      console.log("YOU LOOSE!");
    }
  }
}

function resultScreenWin() {
  backdrop();
  fill(0, 0, 0, 150);
  rect(-10, -10, width + 10, height + 10);
  state = "resultWin";
  stroke(255);
  fill(139, 0, 0);
  textAlign(CENTER);
  textSize(50);
  text(" YOU WON! ", width / 2, 250);

  push();
  noStroke();
  fill(139, 0, 0);
  rect(200, 515, 200, 75, 10);
  textAlign(CENTER);
  textSize(30);
  fill(255);
  text("Play again!", 300, 563);
  pop();
}

function resultScreenLose() {
  backdrop();
  noStroke();
  fill(0, 0, 0, 150);
  rect(0, 0, width + 10, height + 10);
  state = "resultLose";
  // noStroke();
  stroke(255);
  fill(139, 0, 0);
  textAlign(CENTER);
  textSize(50);
  text(" GAME OVER ", width / 2, 250);

  push();
  noStroke();
  fill(139, 0, 0);
  rect(200, 515, 200, 75, 10);
  textAlign(CENTER);
  textSize(30);
  fill(255);
  text("Try again!", 300, 563);
  pop();
}

function resetGame() {
  packageY = -100;
  packageX = 100;

  velocityY = 0.2;
  acceleration = 0.2;
  gameState = true;
}

function mouseClicked() {
  if (
    state === "start" &&
    mouseX > 200 &&
    mouseX < 400 &&
    mouseY > 520 &&
    mouseY < 590
  ) {
    state = "game";
  } else if (state === "game") {
    state = "result";
  } else if (
    state === "resultWin" &&
    mouseX > 200 &&
    mouseX < 400 &&
    mouseY > 520 &&
    mouseY < 590
  ) {
    resetGame();
    state = "game";
  } else if (
    state === "resultLose" &&
    mouseX > 200 &&
    mouseX < 400 &&
    mouseY > 520 &&
    mouseY < 590
  ) {
    resetGame();
    state = "game";
  }
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "resultWin") {
    resultScreenWin();
    // packageY = -100;
    // packageX = 100;

    // velocityY = 0.2;
    // acceleration = 0.2;
  } else if (state === "resultLose") {
    resultScreenLose();
    // packageY = -100;
    // packageX = 100;

    // velocityY = 0.2;
    // acceleration = 0.2;
  }
}
