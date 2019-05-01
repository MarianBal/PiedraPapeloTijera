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

        jugadorUno = prompt('jugador Uno: piedra, papel o tijera');
        jugadorDos = prompt('jugador Dos: Piedra, papel o tijera');

        

        if ((jugadorUno ==='piedra' || jugadorUno ==='papel' || jugadorUno ==='tijera' )&& (jugadorDos ==='piedra' || jugadorDos ==='papel' || jugadorDos ==='tijera' )){

            if(jugadorUno ==='piedra' && jugadorDos ==='piedra'){

                console.log ('Empate'); 

            } else if(jugadorUno ==='papel' && jugadorDos ==='papel'){

                console.log ('Empate'); 

            } else if(jugadorUno ==='tijera' && jugadorDos ==='tijera'){

                console.log ('Empate'); 

            } else if(jugadorUno ==='piedra' && jugadorDos ==='tijera'){

                ganadorUno = ganadorUno + 1;
        
                console.log ('jugador Uno: '+ jugadorUno +' jugador Dos: '  + jugadorDos);
                console.log ('Ganador partida: jugador Uno');

            } else if(jugadorUno ==='piedra' && jugadorDos ==='papel'){

                ganadorDos = ganadorDos + 1;
        
                console.log ('jugador Uno: '+ jugadorUno +' jugador Dos: '  + jugadorDos);
                console.log ('Ganador partida: jugador Dos');

            } else if(jugadorUno ==='tijera' && jugadorDos ==='piedra'){

                ganadorDos = ganadorDos + 1;
        
                console.log ('jugador Uno: '+ jugadorUno +' jugador Dos: '  + jugadorDos);
                console.log ('Ganador partida: jugador Dos');

            } else if(jugadorUno ==='tijera' && jugadorDos ==='papel'){

                ganadorUno = ganadorUno + 1;
        
                console.log ('jugador Uno: '+ jugadorUno +' jugador Dos: '  + jugadorDos);
                console.log ('Ganador partida: jugador Uno');

            } else if(jugadorUno ==='papel' && jugadorDos ==='piedra'){

                ganadorDos = ganadorUno + 1;
        
                console.log ('jugador Uno: '+ jugadorUno +' jugador Dos: '  + jugadorDos);
                console.log ('Ganador partida: jugador Uno');

            } else if(jugadorUno ==='papel' && jugadorDos ==='tijera'){

                ganadorDos = ganadorDos + 1;
        
                console.log ('jugador Uno: '+ jugadorUno +' jugador Dos: '  + jugadorDos);
                console.log ('Ganador partida: jugador Dos');
            }


        } else{
            console.log('Haceme caso! Dale F5 y arrancá de nuevo.');

            ganadorUno = 666;
        }
        
    }

    if(ganadorUno == 2){

        Console.log('Ganador jugador Uno');

    } else if(ganadorDos == 2){

        console.log('Ganador jugador Dos');

    }


