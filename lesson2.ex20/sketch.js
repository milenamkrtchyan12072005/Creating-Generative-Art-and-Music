var r = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(random(0), random(0), random(255));
    smooth();
    noStroke();
}

function draw(){
    translate(width/2, height/2);
    fill(random(255), random(0), random(255));
    rotate(r);
    var circle_size = random(5, 80);
    ellipse(100 + r, 10, circle_size, circle_size);
    r = r + 0.3;
}