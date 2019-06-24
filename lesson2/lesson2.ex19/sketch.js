var r = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(10);
    smooth();
    noStroke();
}

function draw(){
    fill(255);
    rotate(r);
    var circle_size = random(5, 15);
    ellipse(100 + r, 10, circle_size, circle_size);
    r = r + 0.5;
}