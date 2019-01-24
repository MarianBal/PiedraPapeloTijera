// Ejercicio 5: Juego de piedra, papel y tijera.
// Crear dos variables para guardar
// las opciones elegidas por cada jugador.
// Dos usuarios deben ingresar su opcion elegida.
// ('Deben validar que el usuario ingrese
// piedra papel o tijera')
// Crear dos variables para guardar los
//  intentos ganados por cada jugador
// Cuando algun usuario, llegue a dos intentos ganados.
// Imprimir que jugador gano.

var jugadorUno;
var jugadosDos;

var ganadorUno = 0;
var jugadorDos = 0;

    while(ganadorUno < 2){

        jugadorUno = prompt('Piedra, papel o tijera');
        jugadorDos = prompt('Piedra, papel o tijera');
        

        console.log(jugadorUno);
        ganadorUno = ganadorUno + 1;
        console.log(ganadorUno);
        
    }


