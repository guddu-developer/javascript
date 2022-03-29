  document.getElementById("save").addEventListener("click",addcontact);
  let i=1;
  function addcontact(){
      let fn=document.getElementById("fname");
      let ln=document.getElementById("lname");
      let m=document.getElementById("mobile");
    //   alert(fn+ln+m);
      let item=document.getElementById("accordion");
      let a="'collapse";
      let b="'";
      item.innerHTML+='<div class="card"><div class="card-header"><a class="collapsed card-link" data-toggle="collapse" href="#collapse'+i+'"><i class="fas fa-mobile mr-5 fa-2x"></i> <span style="color: orange;font-size: 20px;align-self: center;" class=" font-weight-bold">'+fn.value+' '+ln.value +'</span>  </a></div><div id="collapse'+i+'" class="collapse" data-parent="#accordion"><div class="card-body"><div class="card" style="width:100%"><div class="circle" > <h2><span>'+fn.value.slice(0,1)+'</span> <span>'+ln.value.slice(0,1)+'</span></h2></div><div class="card-body"><h4 class="card-title text-center">'+fn.value+' '+ln.value+'</h4><p class="card-text text-center">'+m.value+'</p><div class="row justify-content-center"><a href="tel:'+m.value+'" class="btn btn-success m-3"><i class="fas fa-phone-alt"></i></a><a  onclick="document.getElementById('+a+i+b+').parentElement.remove()" class="btn btn-danger m-3"><i class="fas fa-trash-alt"></i></i></a></div></div></div></div></div></div>';
      fn.value=ln.value=m.value="";
      i++;
  }
