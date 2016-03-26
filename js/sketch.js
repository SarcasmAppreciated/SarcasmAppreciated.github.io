var sound, fft;

function preload() {
    sound = loadSound('../audio/v-09-11-3-8.wav');    
}

function setup() {
    fft = new p5.FFT();     
}

function draw() {  
  var spectrum = fft.analyze();
  console.log(spectrum);
}