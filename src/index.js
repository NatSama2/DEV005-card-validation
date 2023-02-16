import validator from './validator.js';

console.log(validator);

/*
function muestraAlerta() {
    if (checked="none") {
        alert ("Por favor seleccione su compra")
    }
    else {
      
    }

}*/



/*
document.getElementById("Confirmar").addEventListener("click", function() {

}
 */

//Numero de tarjeta toma el valos del input
let tarjetaVacia = " " ;

document.getElementById("NumeroTarjeta").addEventListener("input", function (e) {
  tarjetaVacia = e.target.value;
});

document.getElementById("Confirmar").addEventListener("click", function() {
  document.getElementById("saludo").innerHTML =
    "¡Hola " + tarjetaVacia + ", para comenzar selecciona el nivel.";
});

