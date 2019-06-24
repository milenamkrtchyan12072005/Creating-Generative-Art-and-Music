// Exercise 54
// we will use setInverval(function, amount of time) to achieve it.


var pickFrames;
var x = 0;
var isPlaying = false;

function setup() {
    createCanvas(windowWidth, windowHeight-100);
    background(0);

    pickFrames = createP('pickFrames');
    
    button = createButton('Play');
    button.mousePressed(togglePlay);
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

function togglePlay() {
    if (isPlaying) {
        clearInterval(interval);
        isPlaying = false;
    }
    else {
        interval = setInterval(makeNote, 500)
        isPlaying = true;
    }
}


function makeNote() {
    pickFrames.html(frameCount);
}