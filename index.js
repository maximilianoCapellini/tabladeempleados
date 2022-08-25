
let usuario = prompt("ingrese su condicion");

while (usuario != "empleado") {
    alert("no se permite el ingreso a personas ajenas")
    usuario =prompt("ingrese su condicion")
}



function filtro(){
   
    let valor = document.getElementById("searchInput").value.toUpperCase();
    let nombres = document.getElementById("names");
    let filas = nombres.getElementsByTagName("tr");
  
   
    for(let i = 0; i < filas.length; i++){
      
      let columnaLenguaje = filas[i].getElementsByTagName("td")[2];
      
      let lenguaje = columnaLenguaje.textContent;
      
      filas[i].style.display = lenguaje.toUpperCase().indexOf(valor) > -1 ? "" : "none";
    }
}

  document.getElementById("searchInput").addEventListener("keyup", filtro);
