document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('dragstart', event => event.preventDefault());
document.addEventListener('mousedown', event => event.preventDefault());
document.addEventListener("keydown", disablef12);
let video=document.getElementById("video");
let volume=document.getElementById("volume");

function get_video(){
  video.setAttribute("src","ferrari.mp4");
}


function disablef12(e) {
    if(e.keyCode==123 ){
    // alert("f12 NOT ALLOWED");
    window.location.reload();
}
}

function rightclick(){
     
   if( event.which==3){
      //  alert("right click not allowed");
         window.location.reload();
       return false;
        }

        else if(event.button==2){
        // alert("right click not allowed");
           window.location.reload();
        return false;
    }    
    }
//
   //////// forward and backward block
    if(  window.history.back()){
        // alert("back");
        window.preventDefault();
    }
    if( window.history.forward()){
        window.preventDefault();
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


