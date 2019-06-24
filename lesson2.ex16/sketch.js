var song;
var button;
var amp;

var ampHistory = [];

function preload() {
  song = loadSound("../audio/myBeat.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight-100);
    background(0);

	slider = createSlider(0,1,0.5,0.01);
    button = createButton("Play");
    button.mousePressed(togglePlay);
	// song.loop();
    amp = new p5.Amplitude();
}

function togglePlay() {
    if (!song.isPlaying()){
        song.loop();
        button.html("Pause");
    } else {
        song.stop();
        button.html("Play");
    }
}

function draw(){
    background(0);
    song.setVolume(slider.value());

    var vol = amp.getLevel();
	ampHistory.push(vol);
    var diam = map(vol, 0, 1, 10, 100);
	beginShape();
	stroke(250,150);
	noFill();
	for (var i = 0; i < ampHistory.length; i++) {
		var y = map(ampHistory[i], 0, 1, height, 0);
		vertex(i,y-height/2);
	}
	endShape();
	if (ampHistory.length > width) {
	    ampHistory.splice(0, 1);
	}
	// stroke(255, 0, 0);
	// line(ampHistory.length, 0, ampHistory.length, height);
}