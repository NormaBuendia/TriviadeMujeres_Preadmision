//es una etiqueta que se usa para identificar las distintas opciones como false al no estar clickeadas 
bandera = [false, false, false, false, false, false]
//          0       1      2      3      4      5

points = 0;

 // funcion de clickear la respuesta correcta sumando puntos 
function clickear(numeroPregunta) {
  // comparaci贸n entre la posici贸n en el arreglo bandera y el valor false
  if (bandera[numeroPregunta - 1] == false){
    //se asigna a la posici贸n de la bandera el valor true para saber si ya se respondio la pregunta
    bandera[numeroPregunta - 1] = true;
    //se suma 1 punto al puntaje
    points = points + 1;
  }
    
  alert("隆Muy bien! 馃構 Puntaje total= " + points)
}
 //funcion de clickear la pregunta incorrecta restando puntos
function clickear1(numeroPregunta) {
  // comparaci贸n entre la posici贸n en el arreglo bandera y el valor false
  if (bandera[numeroPregunta - 1] == false){
    //se asigna a la posici贸n de la bandera el valor true para saber si ya se respondio la pregunta
    bandera[numeroPregunta - 1] = true;
    //se resta 1 punto al puntaje
    points = points - 1;
  }
    
 alert("Pucha, te equivocaste 馃槶Puntaje total=" + points)
 
}

//funcion que cambia el color del bot贸n si la respuesta es correcta
function seleccionCorrecta(elemento) {
 elemento.style.background = '#51CB20';
}

//funcion que cambia el color del bot贸n si la respuesta es incorrectata
function seleccionIncorrecta(elemento) {
  elemento.style.background = '#F15152'
}
