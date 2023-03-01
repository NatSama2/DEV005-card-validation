BIENVENIDO AL REPOSITORIO DEL PROYECTO card validation

Idea Creativa:
Se partió con la idea de hacer una página de compras, en donde el cliente deba ingresar una tarjeta de crédito válida para que sea aprobada su compra. 
Se asume que la compra ya fue confirmada anteriormente y para este proyecto solo irá incluida la validación de la tarjeta.

-index (html): Se parte creando el formato de la página con los inputs necesarios para rellenar el formulario y los botones: el botón para cofirmar la compra y poder ver si la tarjeta ingresada es válida y el botón para volver a realizar otra compra si es que el número de la tarjeta es válido.

-Estilo de la pagina (css): Se pensó en una idea algo psicodélica que quedará ad-hoc con lo que el usuario quería comprar. El logo de la tarjeta se creó para que no fuera igual a ninguna de las tarjetas convencionales. 

-Validator (js): Se ponen todas las funciones del algoritmo de Luhn para que se pueda validar el número ingresado en el input de la tarjeta. El número ingresado primero se debe revertir, luego se multiplica x2 a los números que ocupen las posiciones pares, se debe ver si el número multiplicado es mayor o menor que 9, si el resultado de la múltiplicación es mayor de 9 los números resultantes se suman entre si, y en caso de ser menor el número se mantiene. Se deben sumar todos los digitos resultantes y si este número final es múltiplo de 10 se asume que la tarjeta igresada es válida. 
Tambien se pone la función que logre enmascarar el número ingresado y solo muestre los ultimos 4 digitos. 

-index (js): Aquí se pone la función que guarde el número ingresado en el input de la tarjeta y se ponen las funcionalidades de los botones. 

Finalmente se hacen correr las pruebas unitarias con el comando npm test y se corrigen los errores.