// Radial Pattern 4
var num=10;
var sw=8;
var fc;
var r = 0;
var rs;
var isLooping;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noFill();
    rs = random(200);
    strokeWeight(sw);
    strokeCap(SQUARE);
}

function draw() {
    randomSeed(rs);
    background(random(255), random(0), random(255));
    for (i=0; i < 5; i++) {
      arcs(width/2, height/2);
    }
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

function arcs(x, y) {
  push();
  translate(x, y);
  rotate(r);
  for (i=0; i < num; i++) {
    //stroke(360.0/num*i, 100, 100, 120);
    lerpAmount = 1.0/num*i;
    // color col = lerpColor('#9E023B', '#FFC675', lerpAmount);
    // stroke(200, 220);
    stroke(360.0/num*i, 100, 100, 120);
    start = random(TWO_PI);
    console.log();
    end = start + random(PI/5, PI/3);
    scal = map(sin(r+TWO_PI/num*i), -1, 1, .5, 1.5);
    arc(0, 0, height*.7-i*4*sw, height*.7-i*4*sw, start, end*scal);
  }
  r += .05;
//   pop();
}