const validator = {
  isValid: function (cardNumber) {  

    //revertir numero
    var str = cardNumber;
    var strReverse = str.split('').reverse().join('')

    //transformar string en array
    const cadena = strReverse;
    let array = cadena.split('');
    console.log('reversa', array);
    
    //multiplicar x2 numeros en posicion pares
    let pares = [0,0]
    for (let i = 0 ; array.length; i++) {
      if ((i+1) %2 ===0) {
        pares = pares*2
        console.log (pares)
      }
    }    


  }
}; export default validator;
