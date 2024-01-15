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
        let size = random(50,50);
        let col = color(random(255), random(255), random(255), 100);

        drawShape(x, y, size, col);
      }
    }

    function drawShape(x, y, size, col) {
      
    
      fill(col, random(0,6));
      noStroke();
      let choice = floor(random(200));
      rect(x, y, size, size);
       
    }     
        
       
        
      
      

    
