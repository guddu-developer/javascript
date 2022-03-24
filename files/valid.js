document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('dragstart', event => event.preventDefault());
document.addEventListener('mousedown', event => event.preventDefault());
document.addEventListener("keydown", disablef12);
    
function get_video(){
  document.getElementById("video").setAttribute("src","ferrari.mp4");
}


function disablef12(e) {
    if(e.keyCode==123 ){
    alert("f12 NOT ALLOWED");
}
}

function rightclick(){
     
   if( event.which==3){
       alert("right click not allowed");
       return false;
        }

        else if(event.button==2){
        alert("right click not allowed");
        return false;
    }    
    }

   //////// forward and backward block
    if(  window.history.back()){
        alert("back");
        window.preventDefault();
    }
    if( window.history.forward()){
      alert("forward");
        window.preventDefault();
    }

//

// ============================custum controls js
let video=document.getElementById("video");
let volume=document.getElementById("volume");

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




////////////////////////youtbe video api 
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtubevideo', {
          height: '390',
          width: '640',
          videoId: '0P7iE-jQFdw?controls=0',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      function onPlayerReady(event) {
        event.target.playVideo();
      }
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
