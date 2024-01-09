// obtener elemento on query selector el tag div con clase container
/* tambien se podria usar

document.getElementById() <- con un id
document.getElementsByTagName() <- para obtener con una etiqueta en si
document.getElementsByClassName() <- por clase
*/

//obtiene el primer elemento div.container, si se quiere obtener todos se usa querySelectorAll
const container = document.querySelector("div.container");

console.log(container);

//crear el elemento h3
const nodoH3  = document.createElement('h3');

//añadirle un hijo de tipo h3 al padre container
container.appendChild(nodoH3);

console.log(container);

// crear un nodo de texto
const texto = document.createTextNode("Hola desde el js");

//añadir el texto al elemento creado
nodoH3.appendChild(texto);

//append puede agregar varios elementos a la vez
container.append("hola append solo", document.createElement("div"))

/***************BEFORE************ */

const container2 = document.querySelector(".container2");

//crear elemento h1
const titulo = document.createElement('h1');

//crear elemento h2
const referencia = document.createElement('h2');

//agregar el nodo al contenedor 2
container2.appendChild(referencia);

//incerta el nodo antes de la referencia dada, la referencia va despues del nodo a agregar
container2.insertBefore(titulo, referencia);

console.log(container2);

/**INCERTAR NODO ADYACENTE */

const container3 = document.querySelector(".container3");

const t2 = document.createElement('h3');

const nodoSpan = document.createElement('span');

container3.appendChild(nodoSpan);

//lo incerta como adjacente puede ser beforebegin, afterbegin, beforeend o afterend
container3.insertAdjacentElement('beforebegin', t2);

console.log(container3);
