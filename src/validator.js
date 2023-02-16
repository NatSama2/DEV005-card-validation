const validator = {
  isValid: function (cardNumber) {
    //Numero de tarjeta toma el valos del input
    let tarjetaVacia = " ";

    document
      .getElementById("NumeroTarjeta")
      .addEventListener("input", function (e) {
        tarjetaVacia = e.target.value;
      });

    //Trasformar número en array
    const myArr = String(tarjetaVacia)
      .split("")
      .map((tarjetaVacia) => {
        return Number(tarjetaVacia);
      });

    
  }, 
};

document.getElementById("Confirmar").addEventListener("click", function () {
  document.getElementById("saludo").innerHTML =
    "¡Hola " + tarjetaVacia + ", para comenzar selecciona el nivel.";
});



export default validator;
