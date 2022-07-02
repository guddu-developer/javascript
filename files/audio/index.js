document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('dragstart', event => event.preventDefault());
document.addEventListener('mousedown', event => event.preventDefault());
document.addEventListener("keydown", disablef12);

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


/////////// if this is uncomment we cant access index file in localhost by hiting url
   //////// forward and backward block
    // if(  window.history.back()==true){
    //     window.history.forward();            
    
    // }
    // if( window.history.forward()==true){
    //        window.history.back();
    // }










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
    document.getElementById("submit").disabled = true;
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
                 myblob=e.data;
                 url = URL.createObjectURL(e.data);
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
    document.getElementById("submit").disabled = false;

    $("#audio-playback").removeClass("hidden");

    $("#downloadContainer").removeClass("hidden");
}

function downloadRecording(){
    var name = new Date();
    var res = name.toISOString().slice(0,10)
    downloadAudio.download = res + '.mp3';
}







/////////////////save  audio////////////////////////////
function save(e)
{    e.preventDefault();
    xhr=new XMLHttpRequest();
    let formdata=new FormData();
    let d=new Date();

  ///set file name date and time
    var newaudiofile = new File([myblob], `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}=${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}.mp3`, {
        type: "audio/webm;codecs=opus",
    });
    formdata.append("aud",newaudiofile);
    xhr.onload=function(){ 
        if(this.responseText=="success"){
        alert("AUDIO UPLOADED \nTHANKS");  } else{ alert("SORRY TRY AGAIN"); }
    }
xhr.open("POST","upload.php");
xhr.send(formdata);  
}
