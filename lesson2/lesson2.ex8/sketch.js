function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
}

function draw() {
  background(0);
  var lineX = random(width);
  // using a for loop to create multiple lines

for (i = 0; i <10; i++) {
  strokeWeight(random(400));
  stroke(random(200),random(50,150)); // two values in random creates a range
  line(lineX,0, lineX,height);
  }
}

function mousePressed() {
noLoop();
}

function mouseReleased() {
loop();
}