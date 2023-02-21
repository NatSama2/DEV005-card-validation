import validator from './validator.js';

console.log(validator);

//Guardar lo que diga en el input
let tarjetaVacia = " ";

document.getElementById('NumeroTarjeta')
  .addEventListener('input', function (e) {
    tarjetaVacia = e.target.value;
    validator.isValid (tarjetaVacia);
  });

  


/*
function muestraAlerta() {
    if (checked="none") {
        alert ("Por favor seleccione su compra")
    }
    else {
      
    }

}*/