
////play pause the audio 

// let audio= new Audio("songs/");
// var audio = "";
// function setaudio(newsong){
// audio=new Audio("songs/"+newsong)
// }


var playpause=document.getElementById('play');
var audio = document.createElement("audio");

// playpause.append(audiotag);
function setaudio(newsong){
    audio.setAttribute("src","songs/"+newsong);
    audio.play();
    playpause.classList.add("fa-pause");
    playpause.classList.remove("fa-play");
    timeduration();
}





playpause.addEventListener("click" ,function(){
    if(audio.paused || audio.ended ){
audio.play();
 this.classList.add("fa-pause");
 this.classList.remove("fa-play");
      timeduration()
    }
    else{
        audio.pause(); 
        this.classList.add("fa-play");
        this.classList.remove("fa-pause");  
      clearTimeout(clear)
    }

// alert(this.className)
});
 



///////////////reading all files in songs folder

function readallfiles(){
 xhr=new XMLHttpRequest();
 xhr.onload=function(){
    //  console.log(this.response)
    let filename=JSON.parse(this.response);
     for (let x in filename){
         if(x%2==0){
          document.getElementById("files").innerHTML+="<div class='title' onclick='setname(this.innerText);setaudio(this.innerText)'>"+filename[x]+"</div>";
        }
         else{
          document.getElementById("files").innerHTML+="<div class='title dark' onclick='setname(this.innerText);setaudio(this.innerText)'>"+filename[x]+"</div>";
        }
     }
    //  console.log(JSON.parse(this.response))
 }
 xhr.open("GET","js/readsong.php",true);
 xhr.send();
}




//////////time and duration
let time = document.getElementsByClassName("runing_time")[0];
let duration = document.getElementsByClassName("song_long")[0];
let slider=document.getElementById("slider");
function timeduration(){
 let Time=audio.currentTime;
 let min=Math.floor(Time/60);
 let sec=Math.floor(Time);

 sec=sec=60 ? sec%60 : sec;
 sec=sec<10 ? "0"+sec : sec;
//  for minutes
//  min=min<10 ? "0"+min : min;
   time.innerHTML=min+":"+sec;
    duration.innerHTML=((audio.duration-20)/60).toFixed(2);
    slider.setAttribute("value",min+"."+sec);
    slider.setAttribute("max", (((audio.duration-23) / 60).toFixed(2)));
    if(audio.ended){ audio.play(); }
    clear=setTimeout(timeduration,1000)
}
// update currentduration
// setInterval(timeduration,1000)
 

////////for slider drag 
function drag(current){
clearTimeout(clear);
audio.pause();
audio.currentTime=current*60;
audio.play();
timeduration()
}

//////forward song
document.getElementsByClassName("fa-fast-forward")[0].addEventListener("click",function(){
clearTimeout(clear);
audio.pause();
audio.currentTime = audio.currentTime+5;
audio.play();
timeduration()
});

//////replay or backward song
document.getElementsByClassName("fa-fast-backward")[0].addEventListener("click",function(){
clearTimeout(clear);
audio.pause();
audio.currentTime = audio.currentTime-5;
audio.play();
timeduration()
});


////////set play name
function setname(name){
    document.getElementById("name").innerText=(name.substr(0,15))+"...";
}



