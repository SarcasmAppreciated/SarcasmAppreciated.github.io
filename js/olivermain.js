$(document).ready(function(){
    var y, Fs;

    $('#audio_file').change(function (e) {
        
        var file = e.currentTarget.files[0];

        console.log("Name: " + file.name);
        console.log("Type: " + file.type);
        console.log("Size: " + file.size);

        var audioCtx = new (window.AudioContext || window.webkitAudioContext)();        
        
        var filereader = new FileReader();

        filereader.onload = function(e) {            
            console.log("READ FILE");
            var data = filereader.result;
            audioCtx.decodeAudioData(data, function(audioBuffer) {
                console.log(audioBuffer);
                Fs = audioBuffer.sampleRate;
                console.log("Duration: "+ audioBuffer.duration);
                
                var audioData = audioBuffer.getChannelData(0); //channel 0
                
                y = new Float32Array(audioData.length);                
                y = Float32Array.from(audioData);

                parseData();
            });
        };

        filereader.readAsArrayBuffer(file);

    });

    function parseData (){
        
        var frame_duration = 0.025;
        var frame_length = frame_duration * Fs;
        var Nsamps = y.length;
        var step_percent = 0.025;
        var step_size = Math.ceil(Fs * step_percent);
        var num_frames = Math.floor((Nsamps - frame_length) / step_size);
        
        var t = []; // t = (1/Fs) * (1 : Nsamps);        
        for (var i = 1; i <= Nsamps; i++) {
           t.push(i * 1 / Fs);
        }

        var f = []; // f = Fs * (0 : frame_length / 2 - 1) / frame_length;
        for (var i = 1; i <= frame_length; i++) { // REMOVED THE DIVISOR
           f.push(i * Fs / frame_length);
        }
        
        var xmax_fft = [];
        var ymax  = [];
        
        for (var i = 1; i <= num_frames; i++) {
            xmax_fft.push(-1);
            ymax.push(-1);
        }
        
        for (var k = 0; k < num_frames; k++) { // for k = 1 : num_frames
            var frame = y.slice(k * step_size, frame_length + k * step_size); // frame = y((k - 1) * step_size + 1: frame_length + (k - 1) * step_size ); 
            
            var indexMax = frame.indexOf(Math.max.apply(null, frame)); // indexMax = find(max(frame) == frame);
            ymax[k] = Math.abs(frame[indexMax]); // ymax(k) = abs(unique(frame(indexMax)));
                        
            var y_fft = fft(frame.length, frame);
            for (var i = 0; i < frame.length; i++) {
                y_fft[i] = Math.abs(y_fft[i]);                
            }
                        
            //  y_fft = y_fft.splice(0, frame_length / 2); // Discard Half of Points
            
            var indexMax_fft = y_fft.indexOf(Math.max.apply(null, y_fft)); // indexMax_fft = find(max(y_fft) == y_fft);
            xmax_fft[k] = f[indexMax_fft];
        }
        
        var t_max = [];
        var t_split = Math.floor(Nsamps / num_frames);
        for (var i = 1; i <= num_frames; i++) {
            t_max.push(t[t_split * i]);    
        }
            
        // console.log(ymax);
        // console.log(xmax_fft);
        // console.log(t_max);
        
        createJSON(ymax, xmax_fft, t_max);
    }
    
    
    function fft(len, data){
        var real = [];
        var imag = []; 
        
        for (var i  = 0; i < len; i++){ 
            real[i] = data[i];
            imag[i] = 0.0;
        }
        
        transform(real, imag);
        return real;
    }
    
    var signalJSON;
    function createJSON (ymax, xmax_fft, t_max){
        var ampsTest = createDataArray(ymax);
        var freqTest = createDataArray(xmax_fft);
        
        var ampsTimeTest = createDataArray(ymax, t_max);
        var freqTimeTest = createDataArray(xmax_fft, t_max);
        
        var time = t_max[t_max.length - 1];
        // var time = t_max.length;

        var amplitudeTest = new Amplitude([0, 1], ampsTimeTest);
        var frequencyTest = new Frequency([50, 500], freqTimeTest);
        var parametersTest = new Parameters(amplitudeTest, frequencyTest);
        var selectedTimeRangeTest = new SelectedTimeRange(false, 0, 0);
        var signalTest = new Signal(time, true, selectedTimeRangeTest, parametersTest);
                
        
        console.log(signalTest);
        signalJSON = JSON.stringify(signalTest);
        $('#create').attr('disabled', false); 
    }
    
    var arbitID = 0;    
    function createDataArray(arr, time) {
        console.log("arbitID: " + arbitID);
        
        var tempArr = arr;
        var tempTime = time;
        var returnArr = [];
        
        if(tempTime != null) {
            for (var i = 0; i < tempArr.length; i++) {
                var tempOB = new Data(arbitID, tempTime[i], tempArr[i], false);
                returnArr.push(tempOB);
                arbitID++;
            }
        }
        else {
            for (var i = 0; i < tempArr.length; i++) {
                var tempOB = new Data(arbitID, i, tempArr[i], false);
                returnArr.push(tempOB);
                arbitID++;
            }            
        }
        
        return returnArr;
    }
    
    function Signal(duration, selected, selectedTimeRange, parameters) {
        this.duration = duration;
        this.selected = selected;
        this.selectedTimeRange = selectedTimeRange;
        this.parameters = parameters;        
    }
    
    function SelectedTimeRange(active, time1, time2) {
        this.active = active;
        this.time1 = time1;
        this.time2 = time2;        
    }
    
    function Parameters(amplitude, frequency) {
        this.amplitude = amplitude;
        this.frequency = frequency;
    }
    
    function Amplitude(valueScale, data) {
        this.valueScale = valueScale;
        this.data = data;
    }
    
    function Frequency(valueScale, data) {
        this.valueScale = valueScale;
        this.data = data;
    }
    
    function Data(id, t, value, selected){
        this.id = id;
        this.t = t;
        this.value = value;
        this.selected = selected;        
    }
    
    (function () {
    var textFile = null,
      makeTextFile = function (text) {
        var data = new Blob([text], {type: 'text/plain'});

        // If we are replacing a previously generated file we need to
        // manually revoke the object URL to avoid memory leaks.
        if (textFile !== null) {
          window.URL.revokeObjectURL(textFile);
        }

        textFile = window.URL.createObjectURL(data);

        return textFile;
      };


      var create = document.getElementById('create'),
        textbox = document.getElementById('textbox');

      create.addEventListener('click', function () {
        var link = document.getElementById('downloadlink');
        link.href = makeTextFile(signalJSON);
        link.style.display = 'block';
      }, false);
    })();    
});