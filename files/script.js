
document.getElementById("equal").addEventListener("click", function () {
    var e = document.getElementById("display");
    e.value = eval(e.value);
});

//// for ce
// document.getElementById("ce").addEventListener("click",function(){
//     document.getElementById("display").value="";
// });
// ///for 0
// document.getElementById("zero").addEventListener("click",function(){
//     document.getElementById("display").value+="0";
// });
// ///for 9
// document.getElementById("nine").addEventListener("click",function(){
//     document.getElementById("display").value+="9";
// });
// ///for 8
// document.getElementById("eight").addEventListener("click",function(){
//     document.getElementById("display").value+="8";
// });
///for 7
// document.getElementById("seven").addEventListener("click",function(){
//     document.getElementById("display").value+="7";
// });
///for 6
// document.getElementById("six").addEventListener("click",function(){
//     document.getElementById("display").value+="6";
// });
// ///for 5
// document.getElementById("five").addEventListener("click",function(){
//     document.getElementById("display").value+="5";
// });
// ///for 4
// document.getElementById("four").addEventListener("click",function(){
//     document.getElementById("display").value+="4";
// });
// ///for 3
// document.getElementById("three").addEventListener("click",function(){
//     document.getElementById("display").value+="3";
// });
// ///for 2
// document.getElementById("two").addEventListener("click",function(){
//     document.getElementById("display").value+="2";
// });
// ///for 1
// document.getElementById("one").addEventListener("click",function(){
//     document.getElementById("display").value+="1";
// });
// ///for +
// document.getElementById("add").addEventListener("click",function(){
//     document.getElementById("display").value+="+";
// });
// ///for -
// document.getElementById("min").addEventListener("click",function(){
//     document.getElementById("display").value+="-";
// });
// ///for *
// document.getElementById("mul").addEventListener("click",function(){
//     document.getElementById("display").value+="*";
// });
// ///for /
// document.getElementById("div").addEventListener("click",function(){
//     document.getElementById("display").value+="/";
// });
///for =
lenthh=()=>{
    // var abcd ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let str=document.getElementById("str").value;
document.getElementById("abcd").innerHTML ="character in A to z is =     "+str.length;
}
var slice="rohit,rajeev,guddu";
document.getElementById("slice").innerHTML="my friend name is:"+slice.slice(6,12);

document.getElementById("sub").innerHTML="my  name is:"+slice.substring(13,18);

document.getElementById("substr").innerHTML="my  name is:"+slice.substr(0,5);

concat=()=>{
    a="rakesh";
    b="sir";
    c=a.concat("",b);
    document.getElementById("concat").innerHTML= c;
}
// document.getElementById("upper").innerHTML=;
spli=()=>{
var split=document.getElementById("slin").value;
var splited=split.split("|");
let spout="";
for(let i=0;i<splited.length;i++){
    spout += splited[i] + "<br>";
}
    document.getElementById("split").innerHTML = spout;

}


var val = document.getElementById("user").value;

mat=()=>{
    // alert("ee")
var val=document.getElementById("user").value;
var re = new RegExp(val, 'gi');
var tex=document.getElementById("tex").innerHTML;
document.getElementById("match").innerHTML=tex.match(re);
}


bina=()=>{
    // alert("ee");
var fox=Number(document.getElementById("num").value);
    document.getElementById("numout").innerHTML = "binary= " +fox.toString(2) + "<br>"+"octal= "
     + fox.toString(8) + "<br>"+ "Decimal= " + fox.toString(10)+"<br>"+"Hexadecimal= "
      + fox.toString(16)+"<br>";
     
}



var x = 0;
var array = Array();

push=()=> {
    array[x] = document.getElementById("text1").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("text1").value = "";
}


 pop=()=> {
	 
	 var len = array.length;
	 var index=len-1;
     if (index == -1) {
         alert("no element in array ");
     }
	 //alert(index);
	 else{
    alert("Element: " + array[index] + " deleted at index " + (len-1));
	 array.pop();
     }
   
}

dis=()=> {
    var n = " ";
    for (var m = 0; m < array.length; m++) {
        n += "Element " + m + " = " + array[m] + "<br/>";
    }
    document.getElementById("air").innerHTML = n;
}



entered=()=>{
    var f=[document.getElementById("insort").value];
     document.getElementById("en").innerHTML=f;
}
// var k=0;
// var arr=Array();
// var arr = [];
// var f = document.getElementById("insort").value;
//  function sot(){
//     // var arr=[];
//     // alert(arr[f].sort());
//     // const p=arr.push(f);   /// output 1
//     //    var r = new RegExp(f);
//         arr.push(f);
//     // arr=r;
//     document.getElementById("sorted").innerHTML = arr.push(f);
// }

// var split = document.getElementById("slin").value;
// var splited = split.split("|");
// let spout = "";
// for (let i = 0; i < splited.length; i++) {
//     spout += splited[i] + "<br>";
// }
// document.getElementById("split").innerHTML = spout;

function sot(){
    let f = document.getElementById("insort").value;
    let a=f.split(",");
    a.sort();
    document.getElementById("sorted").innerHTML=a;
}
rev=()=>{
    let f = document.getElementById("insort").value;
    let a=f.split(",");
    a.sort();
    a.reverse();
    document.getElementById("sorted").innerHTML =a;
}
com=()=>{
    let f = document.getElementById("insort").value;
    let a=f.split(",");
    a.sort();
    a.reverse();
    document.getElementById("sorted").innerHTML =a;
}
rept=()=>{
    let f = document.getElementById("insort").value;
    // let a=f.split(",");
    let r = f.repeat(4);
    // a.repeat(4);
    // a.sort();
    // a.reverse();
    document.getElementById("sorted").innerHTML =r;
}
num=()=>{
    let f = document.getElementById("insort").value;
    let a=f.split(",");
    a.sort(function (a, b) { return a - b });
    document.getElementById("sorted").innerHTML =a;
}
max=()=>{
    let f = document.getElementById("insort").value;
    let a=f.split(",");
    let max=Math.max.apply(null,a);
    document.getElementById("sorted").innerHTML =max;
}
min=()=>{
    let f = document.getElementById("insort").value;
    let a=f.split(",");
    let max=Math.min.apply(null,a);
    document.getElementById("sorted").innerHTML =max;
}
// min=()=>{
//     let f = document.getElementById("insort").value;
//     let a=f.split(",");
//     a.sort(function (a, b) { return a - b });
//     document.getElementById("sorted").innerHTML =a;
// }





each=()=>{
    let f = document.getElementById("insort").value;
    let a = f.split(",");
    // var a=[1,2,3,4,5,6,7,8,9];
    var t="";
    a.forEach(fo);  /// this is like for loop but without condition
    function fo(v){
        t+=v+"<br>";
    }
    document.getElementById("doc").innerHTML=t;

}





map=()=>{
    let f = document.getElementById("reduc").value;
    let a = f.split(",");
    // var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var b=a.map(go);
    function go(v){
        return v*5;
    }
    document.getElementById("redu").innerHTML=b;
}
red=()=>{
    let f = document.getElementById("reduc").value;
    // var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let a = f.split(",");
    var b = a.reduce(go);
    function go(v,c){
        return v+c;
    }
    document.getElementById("redu").innerHTML = b;
}
fil=()=>{
    let f = document.getElementById("reduc").value;
    let a = f.split(",");
    var con = prompt("Please enter number you want to compare", "5");
    if (con != null) {
          var b=a.filter(go)
    function go(v){
        return v>con;
    }}  
    document.getElementById("redu").innerHTML = b;
}
ever=()=>{
    let f = document.getElementById("reduc").value;
    let a = f.split(",");
    var con = prompt("Please enter number you want to compare", "5");
    if (con != null) {
        var b = a.every(go)
        function go(v) {
            return v > con;
        }
    }
    document.getElementById("redu").innerHTML = b;
}
som=()=>{
    let f = document.getElementById("reduc").value;
    let a = f.split(",");
    var con = prompt("Please enter number you want to compare", "5");
    if (con != null) {
        var b = a.some(go)
        function go(v) {
            return v > con;
        }
    }
    document.getElementById("redu").innerHTML = b;
}
incl=()=>{
    let f = document.getElementById("reduc").value;
    let a = f.split(",");
    var con = prompt("Please enter number you want to compare", "5");
    if (con != null) {
        var b = a.includes(con);
    }
    document.getElementById("redu").innerHTML = b;
}
key=()=>{
    let f = document.getElementById("reduc").value;
    let a = f.split(",");
    var b=a.keys();
    let t = "";
    for (let v of b) {
        t += v + "<br>";
    }
    document.getElementById("redu").innerHTML = t;
}
fro=()=>{

    var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var b=Array.from(a);
    document.getElementById("redu").innerHTML = b;
}

rand=(l,g)=>{
  document.getElementById("ran").innerHTML=Math.floor(Math.random()*(1000));
//   document.getElementById("ran").innerHTML=Math.floor(Math.random()*(g-l))+l;
}






 repl=()=> {
    var find = document.getElementById("fi").value;
    var replace = document.getElementById("re").value;
    var str = document.getElementById("sent").innerHTML;
    var txt = str.replace(new RegExp(find, 'gi'), replace);
    var print=document.getElementById("sent");
     print.innerHTML = txt;
    //  if (print.filter(new RegExp(find, 'gi')!=undefined)) {
    //    alert("no element found");
    //  }
      
}



forin=()=>{
    var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let b="";
    for(let x in a){
        b+=a[x]+"<br>";
    }
    document.getElementById("for").innerHTML=b;
}

forof=()=>{
    var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let b="";
    for(let x of a){
        b+=x+"<br>";
    }
    document.getElementById("fof").innerHTML=b;
}


//document.getElementsByTagName("h5").style.color = "blue";     //  color changing by tag


tag=()=>{
  let para=document.getElementsByTagName("p");
    for(let i=0;i<para.length;i++){
        // alert("gudd");
        para[i].classList.toggle("text-danger");
        // para[i].style.color="red";
    }
}

let win;

ope=()=>{
  win=window.open("https://code50.w3spaces.com/","Guddu kumar","left=100,top=50,height=600,width=775");
}
clo=()=>{
    win.close();
}
res=()=>{
    win.resizeBy(375,500);
    win.focus();
}
mov=()=>{
    win.moveTo(500, 100);
    win.focus();
}











fet=()=>{
    fetch('https://ubahthebuilder.tech/posts/1')
        .then(data => {
            return data.json();
        })
        .then(post => {
            console.log(post.title);
        });
    // getText("/my.txt");

    // async function getText(file) {
    //     let x = await fetch(file);
    //     let y = await x.text();
    //     document.getElementById("demo").innerHTML = y;
    // }
}





//// language converter


