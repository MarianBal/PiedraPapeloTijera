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


//PRUEBA 2: SWITCH!

var jugadorUno;
var jugadosDos;

var ganadorUno = 0;
var ganadorDos = 0;

 while(ganadorUno < 2 && ganadorDos < 2){

        jugadorUno = prompt('jugador Uno: piedra, papel o tijera');
        jugadorDos = prompt('jugador Dos: Piedra, papel o tijera');

        jugadorUno = jugadorUno.toLowerCase();
        jugadosDos = jugadorDos.toLowerCase();

        switch (true){

            case (jugadorUno ==='piedra') && (jugadorDos ==='piedra'):

                console.log ('Empate'); 

            break;

            case (jugadorUno ==='papel') && (jugadorDos ==='papel'):

                console.log ('Empate'); 

            break;

            case (jugadorUno ==='tijera') && (jugadorDos ==='tijera'):

                console.log ('Empate'); 

            break;

            case (jugadorUno ==='piedra') && (jugadorDos ==='papel'):

                ganadorDos = ganadorDos + 1;
        
                console.log ('jugador Uno: '+ jugadorUno +' jugador Dos: ' + jugadorDos);
                console.log ('Ganador partida: jugador Dos');

            break;

            case (jugadorUno ==='piedra') && (jugadorDos ==='tijera'):

                ganadorUno = ganadorUno + 1;
        
                console.log ('jugador Uno: '+ jugadorUno +' jugador Dos: ' + jugadorDos);
                console.log ('Ganador partida: jugador Uno');

            break;

            case (jugadorUno ==='tijera') && (jugadorDos ==='piedra'):

                ganadorDos = ganadorDos + 1;
        
                console.log ('jugador Uno: '+ jugadorUno +' jugador Dos: '  + jugadorDos);
                console.log ('Ganador partida: jugador Dos');

            break;

            case (jugadorUno ==='tijera') && (jugadorDos ==='papel'):

                ganadorUno = ganadorUno + 1;
        
                console.log ('jugador Uno: '+ jugadorUno +' jugador Dos: '  + jugadorDos);
                console.log ('Ganador partida: jugador Uno');

            break;

            case (jugadorUno ==='papel') && (jugadorDos ==='piedra'):

                ganadorDos = ganadorUno + 1;
        
                console.log ('jugador Uno: '+ jugadorUno +' jugador Dos: '  + jugadorDos);
                console.log ('Ganador partida: jugador Uno');

            break;

            case (jugadorUno ==='papel') && (jugadorDos ==='tijera'):

                ganadorDos = ganadorUno + 1;
        
                console.log ('jugador Uno: '+ jugadorUno +' jugador Dos: '  + jugadorDos);
                console.log ('Ganador partida: jugador Uno');

            break;

            default:

                console.log('Haceme caso! Dale F5 y arrancá de nuevo.');

                ganadorUno = 666;

            break;

        }
           
}

switch (true){

    case (jugadorUno == 2):

        console.log ('Ganador jugador Uno'); 

    break;

    case (jugadorDos == 2):

        console.log ('Ganador jugador Dos'); 

    break;

    }
        



/*
        $case=($a=1 and $b=1)?0:(($a=1 and $b=0)?1:(($a=0 and $b=1)?2:3));*/