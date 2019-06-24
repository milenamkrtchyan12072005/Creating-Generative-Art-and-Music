// Radial Pattern 2

var frames = 200
var num = 8; // try numbers up to 40
let theta = 0;
let isLooping;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    background(20);
    fill(255, 30);
    stroke(255, 50);
    translate(width / 2, height / 2);
    for (i = 0; i < num; i++) {
        push();
        let offSet = TWO_PI / num * i;
        rotate(offSet);
        sz = map(sin(theta), -1, 1, width*.15, width*.2);
        x = map(sin(theta), -1, 1, sz, width * .2);
        translate(x, 0);
        push();
        rotate(theta);
        stroke(200);

        if (i%2==0) {
          ellipse(0, 0, sz, sz*2);
          px = cos(theta)*sz/2;
          py = sin(theta)*sz;
          sz2 = 20;
          strokeWeight(2);
          ellipse(px, py, sz2, sz2);
          strokeWeight(1);
        } else {
            fill(255,20);
            noStroke();
            ellipse(0, 0, sz*.7, sz*2*.7);
            px = cos(theta+PI)*sz*.35;
            py = sin(theta+PI)*sz*.7;
            sz2 = 5;
            fill(255);
            ellipse(px, py, sz2, sz2);
            noFill();
        }
        pop();
        pop();
    }
    theta += TWO_PI / frames;
}

function togglePlay() {
    if (isLooping === false) {
        loop();
        isLooping=true;
        console.log("Start Loop");
    } else {
        noLoop();
        isLooping=false;
        console.log("Stop Loop");
    }
}

function mousePressed() {
    togglePlay();
}