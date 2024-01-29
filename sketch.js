function setup() {
  createCanvas(400, 400);
}

function draw() {
  blendMode(BLEND);
  createGradientBackground();
  blendMode(ADD);

  generateArt();
}

function createGradientBackground() {
  let color1 = color(20,20,20);
  let color2 = color(100, 125, 200);

  for (let i = 0; i <= height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(color1, color2, inter);
    stroke(c);
    line(0, i, width, i);
  }
}

function generateArt() {
  for (let i = 0; i < 500; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(40, 80);
    //reduce white spaces created from blending high rgb values
    let col = color(random(130), 0 , random(100), 50);

    drawRandomShape(x, y, size, col);
  }
}

function drawRandomShape(x, y, size, col) {
  fill(col);
  noStroke()
  let choice = floor(random(3));

  if (choice === 0) {
    rect(x, y, size, size);
  } else if (choice === 1) {
    let height = (sqrt(3) / 2) * size;
    triangle(x, y, x + size, y, x + size / 2, y - height);
  } else {
    let startAngle = random(TWO_PI);
    let endAngle = startAngle + random(HALF_PI, TWO_PI);
    arc(x, y, size, size, startAngle, endAngle);
  }
}

function setup() {
  createCanvas(400, 400);
  frameRate(1); 
}
