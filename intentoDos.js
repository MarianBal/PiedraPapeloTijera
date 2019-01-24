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
var ganadorDos = 0;

    while(ganadorUno < 2 && ganadorDos < 2){

        jugadorUno = prompt('Piedra, papel o tijera');
        jugadorDos = prompt('Piedra, papel o tijera');

        if ((jugadorUno ==='piedra' || jugadorUno ==='papel' || jugadorUno ==='tijera' )&& (jugadorDos ==='piedra' || jugadorDos ==='papel' || jugadorDos ==='tijera' )){

            if(jugadorUno ==='piedra' && jugadorDos ==='piedra'){

                console.log ('Empate'); 
            }

        

        
        ganadorUno = ganadorUno + 1;
        console.log(ganadorUno);

        } else{
            console.log('Haceme caso!');

            ganadorUno = 666;
        }
        
    }


