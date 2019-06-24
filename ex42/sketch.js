// Radial Pattern 2 with Sound
// this example shows how to use the interval

var frames = 235
var num = 30; // try numbers up to 40
var theta = 0;
var wave;
var playing;
var frequency;
var musicLoop;
var envelope;
var attackTime = 0.001;
var decayTime = 0.2;
var susPercent = 0.2;
var releaseTime = 0.5;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    wave = new p5.Oscillator();
    wave.setType('square');

    // Instantiate the envelope
    envelope = new p5.Envelope();

    // set attackTime, decayTime, sustainRatio, releaseTime
    envelope.setADSR(attackTime, decayTime, susPercent, releaseTime);

    // set attackLevel, releaseLevel
    envelope.setRange(1, 0);

}

function togglePlay() {
	if (!playing) {
        loop();
        playing = true;
        // create an interval
        musicLoop = setInterval(makeNote, 1000);
        wave.amp(envelope);
        console.log("Start Loop");
	} else {
        noLoop();
        clearInterval(musicLoop);
		wave.amp(0, .25);
		playing = false;
        console.log("Stop Loop");

	}
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

          // change the frequency of synth
          wave.freq(px*3);
          var vol = map(x, 100,300,0,1)
          // console.log(vol)
          wave.amp(vol);

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

function mousePressed() {
    togglePlay();
}

function makeNote() {
    wave.start();
}