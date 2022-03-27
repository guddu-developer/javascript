document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('dragstart', event => event.preventDefault());
document.addEventListener('mousedown', event => event.preventDefault());
document.addEventListener("keydown", disablef12);
let video=document.getElementById("video");
let vid=document.getElementsByClassName("vid");
let volume=document.getElementById("volume");

function get_video(){
    for(i=0;i<vid.length;i++){
  vid[i].setAttribute("src","ferrari.mp4");
}
}


function disablef12(e) {
    if(e.keyCode==123 ){
        return false;
}
}

function rightclick(){
     
   if( event.which==3){
       return false;
        }

        else if(event.button==2){
        return false;
    }    
    }

   //////// forward and backward block
    if(  window.history.back()==true){
        window.history.forward();
    }
    if( window.history.forward()==true){
           window.history.back();
    }



// ============================custum controls js


 function play_pause(){
// if(type=="playpause")
// if(video.pause=="true"){
//     video.play();
// }
// else{
//     video.pause();
// }
 if (video.paused || video.ended) {
  video.play();  } 
else {
  video.pause();
   }                     
 }

 function stop(){
    video.pause();
     video.currentTime=0;                               
 }

 function speed(a){
     video.playbackRate=a;
     alert("YOU ARE PLAYING SPEED "+a);
 }
 function backward(){
 if (video.currentTime <= 3) {
    video.pause();
} 
else {
    video.currentTime -= 3;
}
}
function forward(){
 if (video.currentTime >= video.duration - 4) {
     video.pause();
  } else {
     video.currentTime += 3;
 }
}
function volumebut(){
    video.volume=volumerange.value;
}


/////////////////audio record  


// audio recorder
let recorder, audio_stream;
const recordButton = document.getElementById("recordButton");
recordButton.addEventListener("click", startRecording);

// stop recording
const stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopRecording);
stopButton.disabled = true;

// set preview
const preview = document.getElementById("audio-playback");

// set download button event
const downloadAudio = document.getElementById("downloadButton");
downloadAudio.addEventListener("click", downloadRecording);

function startRecording() {
    // button settings
    recordButton.disabled = true;
    recordButton.innerText = "Recording..."
    $("#recordButton").addClass("button-animate");

    $("#stopButton").removeClass("inactive");
    stopButton.disabled = false;


    if (!$("#audio-playback").hasClass("hidden")) {
        $("#audio-playback").addClass("hidden")
    };

    if (!$("#downloadContainer").hasClass("hidden")) {
        $("#downloadContainer").addClass("hidden")
    };

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
            audio_stream = stream;
            recorder = new MediaRecorder(stream);

            // when there is data, compile into object for preview src
            recorder.ondataavailable = function (e) {
                const url = URL.createObjectURL(e.data);
                preview.src = url;

                // set link href as blob url, replaced instantly if re-recorded
                downloadAudio.href = url;
            };
            recorder.start();

            timeout_status = setTimeout(function () {
                alert("5 minutes timeout");
                console.log("5 min timeout");
                stopRecording();
            }, 300000);
        });
}

function stopRecording() {
    recorder.stop();
    audio_stream.getAudioTracks()[0].stop();

    // buttons reset
    recordButton.disabled = false;
    recordButton.innerText = "Redo Recording"
    $("#recordButton").removeClass("button-animate");

    $("#stopButton").addClass("inactive");
    stopButton.disabled = true;

    $("#audio-playback").removeClass("hidden");

    $("#downloadContainer").removeClass("hidden");
}

function downloadRecording(){
    var name = new Date();
    var res = name.toISOString().slice(0,10)
    downloadAudio.download = res + '.wav';
}
