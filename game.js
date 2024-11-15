function setup() {
  createCanvas(800, 600);
}

let speed = 5;
let down = -100;
let slide = 100;

function package(x, y, s) {
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

function draw() {
  package(slide + 100, down, 1);

  if (keyIsDown(39)) {
    slide = slide + speed;
  } else if (keyIsDown(37)) {
    slide = slide - speed;
  }
  if (down < 400) down = down + 2;
}
