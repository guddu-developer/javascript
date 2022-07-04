/////gettting all selected file
function getseletedfiles(){
    image=document.getElementById("image").files;
       for(let i=0;i<image.length;i++){
           let reader = new FileReader();
           reader.readAsDataURL(image[i]);
           reader.addEventListener("loadend", function () {
               dataurl = reader.result;
               sessionStorage.setItem(`page${i}`, dataurl);
           });
       } 
    // mypdf();
    }


/////////if any session will not deleted
if(sessionStorage.length!==0){
sessionStorage.clear();
}


///////download pdf
function downloadpdf(){
window.location.href="print.html";
}


//////trigger events button to input
document.getElementById("selectfile").addEventListener("click",function(){
    document.getElementById("image").click();
    document.getElementById("download").disabled=false;
});

    ////////cheking session is working or not
    //  console.log(sessionStorage.getItem("page0"));
    //    console.log(sessionStorage.getItem("page1"));
    //    console.log(sessionStorage.getItem("page2"));
    //    console.log(sessionStorage.length);
