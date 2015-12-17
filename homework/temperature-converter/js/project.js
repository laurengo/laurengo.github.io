// Good job on this. Your logic and and syntax are correct! Few small formatting things.

document.getElementById('f').onclick = setCelsiusReadOnly;
document.getElementById('c').onclick = setFaReadOnly;

// maybe have function name to reflect is clearing celsius value
function setCelsiusReadOnly(){ 
  document.getElementById('c').value = ''; 
}

function setFaReadOnly(){ 
  // extra line space

  document.getElementById('f').value = ''; 
}
// extra line space


document.getElementById('convert').onclick = convert;
// line space here
function convert(){
  var C = document.getElementById('c').value;
  var F = document.getElementById('f').value;
  
  // good use of conditional
  if(C){
    var Fa = 9/5 * C + 32; 
    document.getElementById('f').value = Fa;  
  } else {
    var Ce = (F - 32) * 5/9;  
    document.getElementById('c').value = Ce;  

  }
  
  
} 