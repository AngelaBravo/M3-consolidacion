// Instrucciones para agregar al chat
const parrafoIzquierdo= [
    "Aleatorio 1",
    "aleatorio 2",
    "Aleatorio 3",
    "Aleatorio 4",
    "Aleatorio 5",
    "Aleatorio 6",
    "Aleatorio 7",
    "Aleatorio 8",
    "Aleatorio 9",
    "Aleatorio 10",
]
const form = document.querySelector(".mensaje");
form.addEventListener("submit", escucharInput);

function escucharInput(e) {
    e.preventDefault();
    const mensajeValue = e.target.texto.value;
    console.log(mensajeValue);
    e.target.reset();
    subirAlChat(mensajeValue);
    respuestaAlChat();
    document.querySelector(".respuesta").scrollTo({
        top: document.querySelector(".respuesta").scrollHeight, 
        behavior: "smooth"
    })
}


function subirAlChat(mensajeValue) {
    const chat = document.querySelector(".respuesta");
    const parrafo = document.createElement("p");
    parrafo.textContent = mensajeValue;
    parrafo.classList.add("derecha");
    chat.appendChild(parrafo);
}

// respuesta automatica del otro lado del chat
function respuestaAlChat ( ){
    const aleatorio = Math.floor(Math.random()*parrafoIzquierdo.length)
    const parrafoRespuesta = document.createElement("p");
    parrafoRespuesta.textContent = parrafoIzquierdo[aleatorio];
    console.log(parrafoRespuesta)
    parrafoRespuesta.classList.add("izquierda");
    document.querySelector(".respuesta").appendChild(parrafoRespuesta);
}

/* instrucciones para quitar negrita en contactos ( solo sirve para el priemro)
const negrita= document.querySelector(".negrita");
negrita.addEventListener("click", quitarNegrita);

function quitarNegrita(){
    negrita.style=" ";
}
const cambiaNegrita =document.querySelector(".negrita");
cambiaNegrita.addEventListener */

// instrucciones para que se intecambien las cajas contactos y chat que son del Main
const intercambio = document.getElementById("contactos");
const intercambio2 = document.querySelector(".mensaje") // para que oculte el input de mensaje cuando esté en contactos
const botonMostrarOcultar = document.getElementById("boton");
botonMostrarOcultar.addEventListener("click", cambiarChatContacto);

function cambiarChatContacto(){
    intercambio.classList.toggle("contactos");
    intercambio2.classList.toggle("contactos");
};

// quitar fuente bold a todos
intercambio.addEventListener("click", quitarBold);

function quitarBold (e){
    if( e.target.classList.contains("negrita"))
        e.target.classList.remove("negrita")
}