const validator = {
  isValid: function (cardNumber) {  

    //revertir numero
    var str = cardNumber;
    var strReverse = str.split('').reverse().join('')

    //transformar string en array
    const cadena = strReverse;
    let array = cadena.split('');
    console.log('reversa', array);
    let multiplicacion;
    let sum;
    let sumaDeNumeros = 0;
    let impares;
    
    //multiplicar x2 numeros en posicion pares
    let pares = array.map ((num,pos) => {
      if ((pos + 1) % 2 ===0 ) {
      multiplicacion = num * 2 
        console.log ('multiplicacion', multiplicacion)
        //ver si numero multiplicado es mayor a 9
      if (multiplicacion > 9) {
        let numTexto = multiplicacion.toString ();
        //Sumar los digitos individuales
        sum = parseInt(numTexto[0]) + parseInt(numTexto[1]);
        
        console.log ('1er numero', numTexto [0])
        console.log ('2er numero', numTexto [1])
        console.log ('suma', sum)
        return sum
        }
        else {
          return multiplicacion;
        }


      }
      else {
        impares = array
      }
      //sumar todos los numeros
      sumaDeNumeros = array + sum + multiplicacion
      return sumaDeNumeros; 
      
    })
    console.log ('suma Total', sumaDeNumeros); 



  

        


  }
}; export default validator;
