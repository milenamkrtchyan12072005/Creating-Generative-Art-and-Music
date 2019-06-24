var wave;
var playing;
var frequency;

function setup() {
    createCanvas(windowWidth, windowHeight-100);
    background(0);

	wave = new p5.Oscillator();
	wave.setType('sine');
	button = createButton("Play");
	button.mousePressed(playPause);
	slider = createSlider(100,1200,440);
}

function playPause() {
	if (!playing) {
		wave.start();
		wave.amp(1, .25);
		// second number fades in the amplitude by the duration specified
		wave.freq(440);
		playing = true;
	} else {
		wave.amp(0, .25);
		playing = false;
	}
}

function draw(){
	wave.freq(slider.value());

	if (playing) {
		background(255,0,245);
	} else {
		background(51);
	}
}