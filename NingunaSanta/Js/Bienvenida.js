const nombre = document.querySelector("#nombre");
const btnComenzar = document.querySelector("#comenzar");

btnComenzar.addEventListener("click",()=>{
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("puntaje-total",0);
    localStorage.removeItem("desafios-jugadas");

    location.href="";
})