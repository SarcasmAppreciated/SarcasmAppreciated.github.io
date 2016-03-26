var mySound;

function preload() {
    mySound = loadSound('../audio/test.mp3');
}

function draw() {
    mySound.setVolume(0.1);
    mySound.play();
}