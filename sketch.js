function setup() {
  createCanvas(400, 400);
  background(0);
  noLoop();
}

function draw() {
  generateArt();
}

function generateArt() {
  for (let i = 0; i < 500; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(40, 40);
    let col = color(random(255), random(255), random(255), 100);

    drawRandomShape(x, y, size, col);
  }
}

function drawRandomShape(x, y, size, col) {
  fill(col, random(0, 6));
  noStroke();
  let choice = floor(random(3));

  if (choice === 0) {
    rect(x, y, size, size);
  } 
  else if (choice === 1) 
  {
    
    let height = (sqrt(3) / 2) * size;
    triangle(x, y, x + size, y, x + size / 2, y - height);
  } 
  else
  {
    
    let startAngle = random(TWO_PI);
    
    let endAngle = startAngle + random(HALF_PI, TWO_PI);
    arc(x, y, size, size, startAngle, endAngle);
  }
}
        
      
      

    
