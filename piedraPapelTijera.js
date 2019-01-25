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

var JugadorUno;
var JugadorDos;

var GanadorUno = 0;
var GanadorDos = 0;

jugadorUno = prompt('Piedra, papel o tijera');
jugadorDos = prompt('Piedra, papel o tijera');

while (GanadorUno< 2 && GanadorDos<2){

if ((jugadorUno ==='piedra' || jugadorUno ==='papel' || jugadorUno ==='tijera' )&& (jugadorDos ==='piedra' || jugadorDos ==='papel' || jugadorDos ==='tijera' )){

    if(jugadorUno ==='piedra' && jugadorDos ==='piedra'){

        console.log ('Empate');

    }else if(jugadorUno ==='papel' && jugadorDos ==='piedra'){

        ganadorUno = ganadorUno ++;

        console.log ('jugadorUno ' + GanadorUno);
        
    } else if(jugadorUno ==='tijera' && jugadorDos ==='piedra'){

        GanadorDos++;

        console.log ('jugadorDos ' + GanadorDos);

    } else if(jugadorUno ==='piedra' && jugadorDos ==='papel'){

        GanadorDos++;

        console.log ('jugadorDos ' + GanadorDos);

    }  else if(jugadorUno ==='papel' && jugadorDos ==='papel'){

        console.log ('Empate');

    } else if(jugadorUno ==='tijera' && jugadorDos ==='papel'){

        GanadorUno++;

        console.log ('jugadorUno ' + GanadorUno);

    } else if(jugadorUno ==='piedra' && jugadorDos ==='tijera'){

        GanadorUno++;

        console.log ('jugadorUno ' + GanadorUno);

    } else if(jugadorUno ==='papel' && jugadorDos ==='tijera'){

        GanadorDos++;

        console.log ('jugadorDos ' + GanadorDos);

    } else if(jugadorUno ==='tijera' && jugadorDos ==='tijera'){

        console.log ('empate');

    } 
    
} else {
    console.log('Haceme caso');
}
}



