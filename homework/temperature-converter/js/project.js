document.getElementById('f').onclick = setCelsiusReadOnly;
document.getElementById('c').onclick = setFaReadOnly;

function setCelsiusReadOnly(){ 
  document.getElementById('c').value = ''; 
}

function setFaReadOnly(){ 

  document.getElementById('f').value = ''; 
}


document.getElementById('convert').onclick = convert;
function convert(){
  var C = document.getElementById('c').value;
  var F = document.getElementById('f').value;
  
  
  if(C){
    var Fa = 9/5 * C + 32; 
    document.getElementById('f').value = Fa;  
  } else {
    var Ce = (F - 32) * 5/9;  
    document.getElementById('c').value = Ce;  

  }
  
  
} 