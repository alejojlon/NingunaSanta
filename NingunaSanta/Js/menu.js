const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
const nombreJugador = document.querySelector("#nombre-jugador");

nombre.innerHTML = localStorage.getItem("nombre");
nombreJugador.innerHTML = localStorage.getItem("nombre");

let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

let desafiosJugados;

const desafiosJugadosLS = JSON.parse(localStorage.getItem("desafios-jugados"));
if(desafiosJugadosLS){
    desafiosJugados = desafiosJugadosLS;
}else{//comienzo un arreglo vacío, todavía no hay ninguna categoría
    desafiosJugados = [];
}
console.log(desafiosJugados);

function agregarEventListenerOpciones(){
    const desafios = document.querySelectorAll(".desafio");
    desafios.forEach(desafio=>{
        desafio.addEventListener("click", (e)=>{
            console.log(e.currentTarget.id);
            //almaceno la categorìa que se eligiò en el Local Storage
            localStorage.setItem("desafio-actual", e.currentTarget.id);
            //Agrego al arreglo la categoría
            desafiosJugados.push(e.currentTarget.id);
            localStorage.setItem("desafios-jugados", JSON.stringify(desafiosJugados));
            console.log(desafiosJugados);
            //re dirijo a la pàgina del juego
            location.href = "juego.html";
        });
    });

    desafios.forEach(desafio =>{
        if(desafiosJugadosJugados.includes(desafio.id)){
            desafio.classList.add("desabilitada");
            desafio.classList.add("no-events");
        }
    })

agregarEventListenerOpciones();
}