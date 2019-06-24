// Radial Pattern Basic

let k = 5 / 9.0;
let scaleIt = 200;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    colorMode(HSB);
    strokeWeight(random(20));
    smooth();
}

function draw() {
    translate(width / 2, height / 2);
    //scale(width/2, height/2);
    let t = frameCount / 20.0;
    let x = cos(k * t) * sin(t) * scaleIt;
    let y = cos(k * t) * cos(t) * scaleIt;
    stroke(random(255), random(255), random(255));
    line(0, 0, random(x, x + 100), random(y, y + 100));
}