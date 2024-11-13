function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255, 255, 255);
  package(300, 450);
}

function package(x, y) {
  background(255, 255, 255);

  let c = color(180, 30, 0);
  let d = color(150, 0, 0);

  fill(c);
  stroke(0, 0, 0);
  strokeWeight();

  // left side
  push();
  fill(0, 0, 0);
  stroke(0, 0, 0);
  strokeWeight(6);
  strokeJoin(ROUND);
  quad(x - 11, y, x - 70, y - 33, x - 70, y - 53, x - 11, y - 23);

  quad(x - 11, y + 100, x - 70, y + 63, x - 70, y - 30, x - 11, y + 2);
  pop();

  // small part
  quad(x - 11, y, x - 70, y - 33, x - 70, y - 53, x - 11, y - 23);

  quad(x - 11, y + 100, x - 70, y + 63, x - 70, y - 30, x - 11, y + 2);

  // top
  push();
  fill(0, 0, 0);
  stroke(0, 0, 0);
  strokeWeight(6);
  strokeJoin(ROUND);
  quad(x - 11, y - 25, x - 70, y - 55, x + 16, y - 82, x + 80, y - 55);

  pop();

  quad(x - 11, y - 25, x - 70, y - 55, x + 16, y - 82, x + 80, y - 55);

  //right side

  //small part

  push();
  fill(0, 0, 0);
  stroke(0, 0, 0);
  strokeWeight(6);
  strokeJoin(ROUND);
  quad(x - 10, y, x + 80, y - 33, x + 80, y - 53, x - 9, y - 23);

  quad(x - 10, y + 100, x + 80, y + 63, x + 80, y - 30, x - 9, y + 2);

  pop();
  quad(x - 9, y, x + 80, y - 33, x + 80, y - 53, x - 9, y - 23);

  quad(x - 9, y + 100, x + 80, y + 63, x + 80, y - 30, x - 9, y + 2);

  // shadows

  fill(160, 0, 0);
  noStroke();

  quad(x - 12, y + 10, x - 69, y + -22, x - 70, y - 30, x - 12, y + 2);

  quad(x - 8, y + 10, x + 80, y - 22, x + 80, y - 30, x - 8, y + 2);

  //parachute

  //parachute strings
  stroke(0, 0, 0);
  strokeWeight(3);
  line(x, y - 50, x - 100, y - 190);
  line(x, y - 50, x - 40, y - 190);
  line(x, y - 50, x + 100, y - 190);
  line(x, y - 50, x + 40, y - 190);

  // balloon
  fill(c);
  beginShape();
  vertex(x - 100, y - 190);
  bezierVertex(x - 100, y - 240, x - 40, y - 240, x - 40, y - 190);
  bezierVertex(x - 40, y - 240, x + 40, y - 240, x + 40, y - 190);
  bezierVertex(x + 40, y - 240, x + 100, y - 240, x + 100, y - 190);
  bezierVertex(x + 100, y - 450, x - 100, y - 450, x - 100, y - 190);

  endShape();

  //balloon pattern
  push();
  fill(d);
  noStroke();
  beginShape();
  vertex(x - 40, y - 190);
  bezierVertex(x - 40, y - 240, x + 40, y - 240, x + 40, y - 190);
  bezierVertex(x + 70, y - 450, x - 70, y - 450, x - 40, y - 190);

  endShape();
  pop();

  // left bow
  fill(c);
  beginShape();
  vertex(x, y - 55);
  bezierVertex(x - 170, y - 150, x - 100, y - 40, x - 80, y - 30);
  bezierVertex(x - 90, y - 20, x - 100, y + 130, x, y - 55);
  endShape();

  // right bow

  beginShape();
  vertex(x, y - 55);
  bezierVertex(x + 140, y - 220, x + 100, y - 70, x + 80, y - 65);
  bezierVertex(x + 100, y - 70, x + 180, y + 80, x, y - 55);
  endShape();

  //middle
  fill(d);
  ellipse(x, y - 55, 30);
}

let speed = 5;
let down = -100;
let slide = 100;

function draw() {
  package(slide + 100, down);

  if (keyIsDown(39)) {
    slide = slide + speed;
  } else if (keyIsDown(37)) {
    slide = slide - speed;
  }

  if (down <= 400) {
    down = down + 2;
  }
}
