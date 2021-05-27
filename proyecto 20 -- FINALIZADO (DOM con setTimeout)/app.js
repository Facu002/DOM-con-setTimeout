let btn1 = ()=> {
  let boton1 = setTimeout(function(){
  console.log("1 segundo")
}, 1000);
};

let btn4 = ()=> {
  let boton2 = setTimeout(function(){
  console.log("4 segundo")
}, 4000);
};

  
document.getElementById("btn1").onclick = btn1;
  
document.getElementById("btn4").onclick = btn4;
    