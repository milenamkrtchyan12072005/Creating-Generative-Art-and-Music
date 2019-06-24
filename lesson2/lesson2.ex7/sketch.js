// creating random horizontal lines

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
}

function draw() {
  background(0);
  var lineY = random(height);
  // using a for loop to create multiple lines

for (i = 0; i <10; i++) {
  strokeWeight(random(400));
  stroke(random(200),random(50,150));
  line(0,lineY, width,lineY);
  }
}

function mousePressed() {
noLoop();
}

function mouseReleased() {
loop();
}