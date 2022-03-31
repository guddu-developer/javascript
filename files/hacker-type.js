

///////////drag drop code

function countframe(){
let frames=document.getElementsByClassName("frame");
for(let i=0;i<frames.length;i++){
    dragElement(frames[i]);
}}


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}




////////z--index and functions
let frame=document.getElementById("frame");
let index='"1"';
 function covid(){
     frame.innerHTML+='<div class="frame" onclick="this.style.zIndex='+index+'  style="top: 5%;left: 10%;"> <img src="images/covid.png" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
    countframe();
 }

 function virus(){
     frame.innerHTML+='<div class="frame" onclick="this.style.zIndex='+index+'  style="top: 5%;left: 10%;"><h2>Covid-Virus</h2> <img src="images/virus.gif" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
    countframe();
 }

 function dl_data(){
     frame.innerHTML+='<div class="frame" onclick="this.style.zIndex='+index+' style="top: 40%;left: 35%;"> <h2  >Downloading...</h2><p class="red">Critical Data</p> <img src="images/downloading.gif" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
    countframe();
 }

 function microscope(){
     frame.innerHTML+='<div class="frame" onclick="this.style.zIndex='+index+'   style="top: 5%;left: 10%;padding:20px"> <img src="images/micro.gif" width="400" height="400" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
    countframe();
 }

 function decryptor(){
     frame.innerHTML+='   <div class="frame" onclick="this.style.zIndex='+index+'  style="padding: 20px 50px;top: 30%;left: 35%;" ><h2>Password Decryptor</h2><p class="red mb-20">Calculate Hashes</p> <img src="images/hash.gif" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
    countframe();
 }


 function help(){
     frame.innerHTML+=' <div class="frame" onclick="this.style.zIndex='+index+'  style="padding: 20px 30px;top: 25%;left: 25%;"> <img src="images/keyboard.png" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div><p class="red mb-20 mt-20">Status And Achivements</p> </div>';
    countframe();
 }

 function allscript(){
     frame.innerHTML+='<div class="frame"  onclick="this.style.zIndex='+index+' style="padding: 20px 30px;top: 10%;left: 55%;">  <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div><div style="display: flex;"><div class="icon"  onclick="dl_data()"><img src="images/arrow.png" alt=""> <p class="white">DL Data</p></div><div class="icon" onclick="decryptor()"><img src="images/hash.png" alt=""> <p class="white">Hash</p></div><div class="icon" onclick="terminal()"><img src="images/terminal.png" alt=""> <p class="white">Terminak</p></div><div class="icon" onclick="encryptor()"><img src="images/decryptor.png" alt=""> <p class="white">Encryptor</p></div><div class="icon" onclick="map()"><img src="images/world.png" alt=""> <p class="white">map</p></div></div>    <div style="display: flex;"><div class="icon" onclick="scan()"><img src="images/satellite.png" alt=""> <p class="white">Scan 6</p></div><div class="icon" onclick="virus()"><img src="images/folder.png" alt=""> <p class="white">COV-19 virus</p></div><div class="icon" onclick="deploy()"><img src="images/folder.png" alt=""> <p class="white">Deploy</p></div><div class="icon" onclick="chat()"><img src="images/chat.png" alt=""> <p class="white">Chat</p></div><div class="icon" onclick="rna()"><img src="images/rna.png" alt=""> <p class="white">RNA</p></div></div><div style="display: flex;"><div class="icon" onclick="neuro()"><img src="images/neuro.png" alt=""> <p class="white">Neuro</p></div><div class="icon" onclick="infect()"><img src="images/rat.png" alt=""> <p class="white">Infect</p></div><div class="icon" onclick="root()"><img src="images/folder.png" alt=""> <p class="white">Root</p></div><div class="icon" onclick="siop()"><img src="images/world.png" alt=""> <p class="white">SIOP</p></div><div class="icon" onclick="sequence()"><img src="images/scan.png" alt=""> <p class="white">Sequence</p></div></div><div style="display: flex;"><div class="icon" onclick="microscope()"><img src="images/microscope.png" alt=""> <p class="white">Electron Microscope</p></div><div class="icon" onclick="stability()"><img src="images/folder.png" alt=""> <p class="white">Stability</p></div><div class="icon" onclick="fullscreen()"><img src="images/scan.png" alt=""> <p class="white">Fullscreen</p></div><div class="icon" onclick="dna()"><img src="images/rna.png" alt=""> <p class="white">DNA</p></div><div class="icon" onclick="radar()"><img src="images/satellite.png" alt=""><p class="white">Radar</p></div></div></div>';
    countframe();
 }

 function encryptor(){
     frame.innerHTML+='<div class="frame" onclick="this.style.zIndex= '+index+'  style="top: 15%;left: 25%;"> <h2  >Encrypting...</h2> <img src="images/encryptor.gif" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
     countframe();
 }


 function map(){
     frame.innerHTML+='<div class="frame" onclick="this.style.zIndex='+index+'  style="top: 15%;left: 25%;"> <h2 class="mb-20" >Tracing Contact</h2> <img src="images/map.gif" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
     countframe();
 }

 function terminal(){
     frame.innerHTML+=' <div class="frame" onclick="this.style.zIndex='+index+'  style="top: 15%;left: 25%;padding: 20px 30px;"> <p class="mt-20 mb-20 red" >Compiling Nodes</p> <img src="images/textrun.gif" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
     countframe();
 }


 function scan(){
     frame.innerHTML+=' <div class="frame" onclick="this.style.zIndex='+index+' style="padding: 20px 50px;top: 30%;left: 55%;" ><h2>satellite Uplink</h2><p class="red mb-20">Interfacing via stattgard</p> <img src="images/scan.gif" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
     countframe();
 }


 function deploy(){
     frame.innerHTML+=' <div class="frame" onclick="this.style.zIndex='+index+' style="padding: 20px 50px;top: 10%;left: 20%;" ><h2>Activating POT</h2><p class="red mb-20">Engage all foreign cells</p> <img src="images/pot.gif" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
     countframe();
 }



 function chat(){
     frame.innerHTML+='<div class="frame" onclick="this.style.zIndex='+index+' style="padding: 20px;top: 20%;left: 25%;" > <p class="red">CHATS</p> <img src="images/icr.gif" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
     countframe();
 }


 function rna(){
     frame.innerHTML+=' <div class="frame" onclick="this.style.zIndex='+index+' style="padding: 20px;top: 20%;left: 25%;" >   <img src="images/rna1.gif" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
     countframe();
 }

 function dna(){
     frame.innerHTML+='<div class="frame" onclick="this.style.zIndex='+index+' style="padding: 20px;top: 20%;left: 25%;" > <p class="red">DNA</p> <img src="images/dna.gif" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
     countframe();
 }


 function neuro(){
     frame.innerHTML+=' <div class="frame" onclick="this.style.zIndex='+index+' style="padding: 20px 50px;top: 15%;left: 25%;" ><h2>Flooding Facility</h2><p class="red mb-20">Preparing Neurotoxin Emitters</p> <img src="images/neurotox.gif" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
     countframe();
 }


 function root(){
     document.getElementById("denied").classList.add("access_denied");
 }


function siop(){
    frame.innerHTML+='<div class="frame" onclick="this.style.zIndex='+index+' style="padding: 10px;top: 10%;left: 5%;" ><h2>CDC PANDAMIC SCENARIO</h2><p class="red mb-20">Word Wide Spread</p> <img src="images/siop.gif" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
    countframe();
}

function sequence(){
    frame.innerHTML+='<div class="frame" onclick="this.style.zIndex='+index+' style="padding: 20px;top: 20%;left: 50%;" >  <img src="images/sequence.gif" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
    countframe();
}


function stability(){
    frame.innerHTML+='<div class="frame" onclick="this.style.zIndex='+index+' style="padding: 20px;top: 20%;left: 10%;" >  <img src="images/stability.gif" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
    countframe();
}


function radar(){
    frame.innerHTML+='<div class="frame" onclick="this.style.zIndex='+index+' style="padding: 20px;top: 20%;left: 10%;" >  <img src="images/radar.gif" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
    countframe();
}
 

function infect(){
    frame.innerHTML+=' <div class="frame" onclick="this.style.zIndex='+index+' style="padding: 20px;top: 10%;left: 9%;" >  <img src="images/rat.gif" width="100%" alt=""> <div class="close" onclick="this.parentElement.remove()"><img src="images/close.png" alt=""></div> </div>';
    countframe();
}
 





///////////full screen
var full = document.documentElement;
function fullscreen() {
  if (full.requestFullscreen) {
    full.requestFullscreen();
  }  else if (full.webkitRequestFullscreen) { /* Safari */
    full.webkitRequestFullscreen();
  } else if (full.msRequestFullscreen) { /* IE11 */
    full.msRequestFullscreen();
  }
}



///////key codes

document.addEventListener("keydown",myKeyPress);
    // when we press enter access denied show when we press shift access granted show 
    function myKeyPress(e){
  if(e.keyCode==16) {
    // alert("shift");
     document.getElementById("grant").classList.add("access_grant");
  }
  if(e.keyCode==13) {
    // alert("enter");
     document.getElementById("denied").classList.add("access_denied");
  }
}
