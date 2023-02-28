const validator = {
  isValid: function (cardNumber) {
    //revertir numero
    const str = cardNumber;
    const strReverse = str.split("").reverse().join("");

    //transformar string en array
    const cadena = strReverse;
    const array = cadena.split("");
    console.log("reversa", array);

    //variables
    let multiplicacion;
    let sum;
    let sumaDeNumeros = 0;

    //multiplicar x2 numeros en posicion pares
    for (let i = 0; i < array.length; i++) {
      if ((i + 1) % 2 === 0) {
        multiplicacion = array[i] * 2;
        /* console.log ('multiplicacion', multiplicacion) */

        //ver si numero multiplicado es mayor a 9
        if (multiplicacion > 9) {
          const numTexto = multiplicacion.toString();
          //Sumar los digitos individuales
          sum = parseInt(numTexto[0]) + parseInt(numTexto[1]);
          array[i] = parseInt(sum);
          /*console.log ('1er numero', numTexto [0]);
          console.log ('2er numero', numTexto [1]);
          console.log ('suma', sum); */
        } else {
          array[i] = multiplicacion;
        }
      }
      console.log("nuevo array", parseInt(array[i]));
    }
    //sumar todos los numeros
    console.log("array a sumar", array);
    for (let i = 0; i < array.length; i++) {
      sumaDeNumeros += parseInt(array[i]);

      console.log("suma Total", sumaDeNumeros);
    }
    //validar que sea multiplo de 10
    if (sumaDeNumeros % 10 === 0) {
      console.log("TARJETA VALIDA (luhn)");
      return true;
    } else {
      console.log("TARJETA INVALIDA (luhn)");
      return false;
    }
  },
  maskify: function (value) {
    const visible = value.slice(-4); // Obtiene los últimos 4 caracteres
    const masked = value.slice(0, -4).replace(/./g, "#"); // Reemplaza todos los caracteres excepto los últimos 4 con "#"
    return masked + visible; // Combina la cadena enmascarada y la visible
  },
};
export default validator;
