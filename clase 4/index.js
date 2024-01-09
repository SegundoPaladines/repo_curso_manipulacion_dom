//obtener el div#container por id
const container = document.querySelector("#container");

//crear un input
const input = document.createElement('input');
input.id = "idInput";

//agregar el unput en el div
container.appendChild(input);

/** EVENT LISTENER */
//funcion
const clikEnInput = () => {
    console.log("Ay, ayyy ayay");
}

//funcion
const otroClikEnInput = () => {
    console.log("Otro clic en el impput");
}

const escribirEnInput = (e) => {
    console.log(e.target.value);
    
    //si el usuario ingresa una p
    if(e.data === "p"){
        console.log("escribiste la p");
    }
}

//colocar el event listener para que escuche el clik, al dar click llamama a la funcion click en input
input.addEventListener('click', otroClikEnInput);

//click x2
input.addEventListener('click', clikEnInput);

//evento cuando escriben en el input
input.addEventListener('input', (event) => escribirEnInput(event));

/**
 * Para eliminar eventos de un elemento se usa: elemento.removeEventListener(evento, accion)
 * 
 * 
 */

input.removeEventListener('click', otroClikEnInput);