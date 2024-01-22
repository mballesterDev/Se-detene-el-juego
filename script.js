const botones = document.querySelectorAll('#btn'); 
const mensajes = document.querySelectorAll('.mensajes');
const reiniciar = document.querySelector('#reiniciar');

let contador = 0;
let juegoEnCurso = true; // Variable para controlar si el juego está en curso

botones.forEach(btn => {
    btn.addEventListener('click', () => {
        if (juegoEnCurso) {
            if (contador % 2 === 0) {
                btn.style.backgroundColor = 'red';
            } else {
                btn.style.backgroundColor = 'lightgreen';
            }
            contador++;
            checkWinner();
        }
    });
});

function checkWinner() {
    const winningPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningPositions.length; i++) {
        const [a, b, c] = winningPositions[i];
        if (botones[a].style.backgroundColor === 'red' && botones[b].style.backgroundColor === 'red' && botones[c].style.backgroundColor === 'red') {
            mostrarMensaje('HA GANADO EL ROJO !');
            juegoEnCurso = false; // Detener el juego
            
        } else if (botones[a].style.backgroundColor === 'lightgreen' && botones[b].style.backgroundColor === 'lightgreen' && botones[c].style.backgroundColor === 'lightgreen') {
            mostrarMensaje('HA GANADO EL VERDE !');
            juegoEnCurso = false; // Detener el juego
            
        }
    }
}

function mostrarMensaje(mensaje) {
    const mensajeGanador = document.createElement('h3');
    mensajeGanador.textContent = mensaje;
    mensajeGanador.classList.add("txtGanador");
    mensajes[0].appendChild(mensajeGanador);
}

reiniciar.addEventListener('click', function() {
    botones.forEach(btn => {
        btn.style.backgroundColor = 'white';
    });

    // Obtener todos los elementos con la clase 'txtGanador' y eliminarlos
    const mensajeGanador = document.querySelector('.txtGanador'); 
    mensajeGanador.remove();

    juegoEnCurso = true; // Reiniciar el juego
    contador = 0; // Reiniciar el contador
});
