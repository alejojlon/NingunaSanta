const contenedorJugadores = document.querySelector("#contenedor-jugadores");
const btnAgregarJugador = document.getElementById('agregar-jugador');
const btnComenzar = document.querySelector("#comenzar");
let jugadores = [];

btnAgregarJugador.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Ingrese el nombre del jugador';
    contenedorNombres.appendChild(input);
  });

btnComenzar.addEventListener("click", () => {
    const jugadores = [];
    const inputs = contenedorJugadores.querySelectorAll('input');

    inputs.forEach(input => {
        const nombre = input.value;
        if (nombre) {
            const jugador = {
                nombre,
                puntaje: 0,
                imagen: "ImageSs/Jugador1.png, Jugador2.png"
            };
            jugadores.push(jugador);
        }
    });
    

    localStorage.setItem("jugadores", JSON.stringify(jugadores));
    localStorage.removeItem("desafios-jugados");

    location.href = "menu.html";
});
