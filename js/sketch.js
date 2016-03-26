var sound, fft;

function preload() {
    sound = loadSound('../audio/v-09-11-3-8.wav');    
}

function draw(){
  console.log("Loaded!");
  fft = new p5.FFT();
  
  var spectrum = fft.analyze();
  console.log(spectrum);
}