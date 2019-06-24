function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10)
}

function draw() {
  background(random(20), random(20), random(20))
  strokeWeight(random(6));
  stroke(random(255), random(255), random(255))
  circle(width/2,height/2,random(width),random(height));
  triangle(width/2,height/2,random(width),random(height));
  ellipse(width/2,height/2,random(width),random(height));
}
