let url = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.min.js";
let script=document.createElement("script");
script.setAttribute("src",url);
// script.setAttribute("defer","");
document.getElementById("i").append(script);

////geting file name
function getfile(){
    image=document.getElementById("image").files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
       dataurl=reader.result;
     downloadpdf(dataurl);
    };
   reader.readAsDataURL(image);
    // console.log(image); 
}


//////trigger events button to input
document.getElementById("selectfile").addEventListener("click", function () {
    document.getElementById("image").click();
    document.getElementById("download").disabled = false;
});


/////////download pdf
function downloadpdf(image){

    var doc = new jsPDF("p", "mm", "a4");

    var width = Math.round(doc.internal.pageSize.width);
    
    var height = Math.round(doc.internal.pageSize.height);

    doc.text(70, 10, 'Guddu IMAGE TO PDF SITE!');

    doc.addImage(image, 'JPEG', 10, 10, width, height);

    doc.save('single.pdf');

}
