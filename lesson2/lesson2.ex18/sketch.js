function setup() {
    createCanvas(windowWidth, windowHeight);
    background("#6AA21E");
    colorMode(HSB);
    noLoop()
    // smooth();
}

function draw(){
    noFill();
    strokeWeight(.25);
    stroke(100);

    for (i = 0;i < 300; i+=3) {
        fill(random(255));
        rect(height/2,10,50, 5);

        fill(255, 0, 0);
        rect(height/2+50,10,10, 5);

        rotate(5);
      // ellipse(width/2 + i, height/2-i, 100+i*5, 100-i*5);
    }
}