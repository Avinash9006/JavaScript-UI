window.onload = function (params) {
var i =0
function progress(){
  if(i==0){
    i=1;
    var ele = document.getElementById("Bar")
    var w = 0
    var id = setInterval(function(){
      if(w >= 100){
        clearInterval(id)
        i=0;
      }
      else{
        w++
        ele.style.width = w + '%'
      }
    },30)
  }
}
progress()
    };


