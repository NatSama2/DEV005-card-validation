import validator from "./validator.js";

console.log(validator);

const valid = validator.isValid;
const maskify = validator.maskify;

//Guardar lo que diga en el input
let tarjetaVacia = " ";
let auxiliar = "";

document
  .getElementById("NumeroTarjeta")
  .addEventListener("input", function (e) {
    tarjetaVacia = e.target.value;
    const isValid = valid(tarjetaVacia);
    console.log("El número de tarjeta es válido: " + isValid);
  });

//ocultar ultimos 4 digitos
const input = document.getElementById("NumeroTarjeta");

input.addEventListener("input", (event) => {
  auxiliar = event.target.value;

  console.log("auxiliar", auxiliar);
});

//boton confirmar
document.getElementById("Confirmar").addEventListener("click", function (e) {
  const form = document.querySelector("form");
  if (form.checkValidity()) {
    e.preventDefault();
    input.value = maskify(auxiliar);
    if (valid(tarjetaVacia) === true) {
      document.getElementById("finalizado").style.display = "block";
      document.getElementById("formulario").style.display = "none";
    } else {
      alert("Número de Tarjeta Invalido");
    }
  }
});
