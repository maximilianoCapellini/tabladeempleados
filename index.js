
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

  const productos = [
    {id:1, nombre : "fernet",precio: 1990 },
    {id:2, nombre: " vodka", precio:1130},
    {id:3, nombre: "campari",precio:990},
    {id:4, nombre:"cordero", precio:700},
  ]
  let nombre = prompt("ingrese el nombre del producto");  
  let producto = productos.find (item => item.nombre === nombre);
  let mensaje = `
  Id: ${producto.id}
  nombre: ${producto.nombre}
  precio: $${producto.precio}
  `;
  alert(mensaje); 
  
  
