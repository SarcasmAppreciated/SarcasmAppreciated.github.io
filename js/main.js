$(document).ready(function(){
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    var audio = document.getElementById("myAudio");
    var source = audioCtx.createMediaElementSource(audio);    
    var analyser = audioCtx.createAnalyser();
    
    source.connect(analyser);
    source.connect(audioCtx.destination);
    var frequencyData = new Float32Array(analyser.frequencyBinCount);
    var timeData = frequencyData;
    
    function renderFrame() {
        analyser.getFloatFrequencyData(frequencyData);
        $("#frequency").val(frequencyData);
        console.log(frequencyData);
        
        analyser.getFloatTimeDomainData(timeData);
        $("#time").val(timeData);
    }
    
    var samples = $("#samples").val();
    var isPlaying = true;        
    audio.onplay = function() {        
        setInterval(function(){
            if (isPlaying)
                renderFrame();                
        }, samples);               
    };
    
    audio.addEventListener('ended', changeState, false);
    
    function changeState(){
        isPlaying = false;        
    }
    
    // analyzer.fftSize = 2048;
    // var bufferLength = analyzer.frequencyBinCount;
    // var dataArray = new Uint8Array(bufferLegnth);
    // anaylzer.getByteTimeDomainData(dataArray);
   
    /*
    var load = function(event) {
        source = audioCtx.createBufferSource();
        var input = event.target;       
        var reader = new FileReader();
        reader.onload = function(){
            var arrayBuffer = reader.result;
            audioContext.decodeAudioData(arrayBuffer, function(buffer) {
                source.buffer = buffer;
                // source.connect(audioCtx.destination);
                
            });
        }
        reader.readAsArrayBuffer(input.files[0]);
    }
    */
    
});