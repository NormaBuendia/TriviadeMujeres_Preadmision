1. Primero agregamos un body en html que contiene el texto del index, pusimos el header en h1 y el resto del párrafo en h4, le cambiamos el color mediante el tag font=color y en CSS le cambiamos el color de fondo mediante el tag background color y centramos el texto

2. Agregamos botones en html mediante el tag button, creamos una segunda página html que es a donde nos redirige el botón "empecemos"

3. Creamos distintas páginas para las preguntas, se puede avanzar entre ellas mediante el botón 'Siguiente pregunta'

4. No sabemos cómo hacer que la función "clickear1" de respuesta incorrecta presente puntaje cero o que reste un punto, en contraste con la funcion clickear que suma puntos: if/else

5. No sabemos cómo hacer que sólo se pueda clickear la respuesta una sola vez por cada pregunta: con una funcion if 

6. No sabemos cómo hacer que la función "clickear" vaya sumando puntaje en cada página de pregunta nueva: if/else

7. Cómo correr botones de lugar, cómo correr el texto que está dentro de los botones - trabajarlo con class

8. Resolvimos los problemas 4 y 6 aplicando una función de bandera, definiendo en primera instancia todos los valores como false, ya que las preguntas no han sido respondidas. Entonces, cuando se cumple la condición de que han sido respondidas, el valor cambia a true. Por otro lado, le añadimos un valor this en html y una función element en javascript para que al ser respondida la pregunta el botón cambie a verde si es la respuesta correcta y rojo si es la incorrecta.

9. Quitamos la forma de las distintas páginas y el botón 'siguiente pregunta' para que se pueda scrollear a través de la trivia dentro de una misma página.

10. El problema 7 fue resuelto transformando el padding del botón a 0px. 

11. Limpiamos el código, eliminando elementos sobrantes.

12. Traspasamos desde el html todo lo que en verdad correspondía en el CSS, mediante atributos class. 

13. 