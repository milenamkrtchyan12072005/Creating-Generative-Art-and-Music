// How to use setInterval(function, amount of time)

var pickFrames;
var x = 0;

function setup() {
    createCanvas(windowWidth, windowHeight-100);
    background(0);

    pickFrames = createP('pickFrames');
    setInterval(makeNote,500);
}

function draw() {
    background(20);
    fill(255, 30);
    stroke(255, 80);
    line(x, 0, x, height)
    x +=3;
    if (x > width) {
        x = 0;
    }
}

function mousePressed() {
 
}

function makeNote() {
    pickFrames.html(frameCount);
}