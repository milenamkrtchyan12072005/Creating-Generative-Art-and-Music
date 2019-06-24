var step = 10;
var lastX = -10;
var radius = 50;
let lastY;
let middle;
let y;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(208);
    // smooth();
    noLoop();
    noFill();
    strokeWeight(5);
}

function draw() {
    stroke(random(20), random(50), random(70));
    centX = width / 2;
    centY = height / 2;
    stroke(0, random(255));
    noFill();
    ellipse(centX, centY, radius * 2, radius * 2);

    stroke(random(255), random(0), random(255));
    for (ang = 0; ang <= 4000; ang += 4) {
        radius += 0.5;
        var rad = radians(ang);
        x = centX + (radius * cos(rad));
        y = centY + (radius * sin(rad));
        point(x, y);
    }
}