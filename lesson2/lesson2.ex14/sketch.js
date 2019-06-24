var mic;
var smoothMicLevel=0;

function setup() {
	createCanvas(windowWidth, windowHeight-100);
    background(0);

	mic = new p5.AudioIn()
    mic.start();

}
function draw(){
	background(0);
    micLevel = mic.getLevel();

	// console.log(micLevel);

	//Lerp smooths out jumpy values
	smoothMicLevel = lerp(smoothMicLevel, micLevel,0.2);
	fill(255);
	ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);
}