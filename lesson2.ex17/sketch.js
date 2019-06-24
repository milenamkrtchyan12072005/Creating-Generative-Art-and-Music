function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    colorMode(HSB);
    // smooth();
}

function draw(){
    noFill();
    strokeWeight(.25);
    stroke(255, 100);

    for (i = 0;i < 300; i+=10) {
      ellipse(100 + i*3, 200 + i*2, 100+i*3, 600-i);
      // ellipse(width/2 + i, height/2-i, 100+i*5, 100-i*5);
    }
}