import validator from './validator.js';

console.log(validator);

let valid= validator.isValid;

//Guardar lo que diga en el input
let tarjetaVacia = " ";

document.getElementById('NumeroTarjeta')
  .addEventListener('input', function (e) {
    tarjetaVacia = e.target.value;
    let isValid = valid(tarjetaVacia);
    console.log("El número de tarjeta es válido: " + isValid);
  });

  //ocultar ultimos 4 digitos
const input = document.getElementById("NumeroTarjeta");
const maskify = (value) => {
  const visible = value.slice(-4); // Obtiene los últimos 4 caracteres
  const masked = value.slice(0, -4).replace(/./g, "#"); // Reemplaza todos los caracteres excepto los últimos 4 con "#"
  return masked + visible; // Combina la cadena enmascarada y la visible
};
input.addEventListener("input", (event) => {
  event.target.value = maskify(event.target.value);
});

  //boton confirmar
  document.getElementById('Confirmar').addEventListener('click', function(e) {
    e.preventDefault();
    if (
      valid == true) {
        document.getElementById('finalizado').style.display = 'block';
        document.getElementById('formulario').style.display = 'none';

      }

    else{
      alert('Número de Tarjeta Invalido');
    }
  })