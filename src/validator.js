const validator = {
  isValid: function (cardNumber) {  

    //revertir numero
    var str = cardNumber;
    var strReverse = str.split('').reverse().join('')

    //transformar string en array
    const cadena = strReverse;
    let array = cadena.split('');
    console.log('reversa', array);

    //variables
    let multiplicacion;
    let sum;
    let sumaDeNumeros = 0;
    
    //multiplicar x2 numeros en posicion pares
    for(let i = 0; i< array.length; i++) {
      if ((i + 1) % 2 ===0 ) {
      multiplicacion = array[i] * 2 
        console.log ('multiplicacion', multiplicacion)
        //ver si numero multiplicado es mayor a 9
      if (multiplicacion > 9) {
        let numTexto = multiplicacion.toString ();
        //Sumar los digitos individuales
        sum = parseInt(numTexto[0]) + parseInt(numTexto[1])
          array[i] = sum
          console.log ('1er numero', numTexto [0])
          console.log ('2er numero', numTexto [1])
          console.log ('suma', sum)
        }
       
      }
      console.log ('nuevo array',array)      
    }
     //sumar todos los numeros
    for(let i = 0; i< array.length; i++) {
      sumaDeNumeros += parseInt(array[i])

     //validar que sea multiplo de 10
    if (sumaDeNumeros % 10 == 0) {
      console.log('TARJETA VALIDA (luhn)');
      return true;
  } else {
      console.log('TARJETA INVALIDA (luhn)');
      return false;
  }
    }
    console.log ('suma Total', sumaDeNumeros); 
    return sumaDeNumeros; 


  }
}; export default validator;
