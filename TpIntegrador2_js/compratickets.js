function compratickets(){
    const valorentrada = 200;
    let cantidad =  document.getElementById("cant_tickets").value;
    let categoria = document.getElementById("tipo_estudiante");
    let opciones = categoria.options[categoria.selectedIndex].text;
    let valor = 0;
    let cant_entradas = parseInt(cantidad);
    
    if (isNaN(cant_entradas)){
        alert("Ingrese cantidad de tickets para continuar");
    } else {
        switch (opciones){
               case "Seleccionar":
                    alert("Elija una opcion de las sugeridas")
                    break;
               case "Estudiante":
                    valor= parseInt(cantidad) * valorentrada * 0.2 ;
                    document.getElementById("total").innerHTML="Total a Pagar: $" + valor;
                    break;
              case "Trainee":
                   valor = parseInt(cantidad) * valorentrada * 0.5; 
                   document.getElementById("total").innerHTML="Total a Pagar: $" + valor;
                   break;
             case "Junior":
                   valor = parseInt(cantidad) * valorentrada * 0.85; 
                   document.getElementById("total").innerHTML="Total a Pagar: $" + valor;
                   break;
             default:
                   break;
        }
   }
  }
  