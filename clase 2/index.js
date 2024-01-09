const container = document.querySelector(".container");

console.log(container.outerHTML);

container.innerHTML = `
        <h3>Hola t1</h3>
        <h4 id="eliminar">hola t2</h4>    
        <h5>hola t3</h5>
    `;

console.log(container.outerHTML);

//remplazar textos <- reemplaza el Hola t1, con Nuevo titulo, debe estar escrito exactamente igual
let contenedorHTML  = container.outerHTML.replace("Hola t1", "Nuevo Titulo");

container.innerHTML = contenedorHTML;

console.log(container);

/** eliminar y reemplazar nodos
 * removeChild
 * remove
 * replaceChild
 */

container.innerHTML = `
        <h3 id="remplazar">Hola t1</h3>
        <h4 id="eliminar">hola t2</h4>    
        <h5 id="eliminar2">hola t3</h5>
    `;

const nodoaEliminar = document.querySelector("#eliminar");
console.log(nodoaEliminar);

container.removeChild(nodoaEliminar);

//Segunda forma de eliminar

const eliminar2 = document.querySelector("#eliminar2");

eliminar2.remove();

//Remeplazar un nodo
const rem = document.querySelector("#remplazar");

const nuevoNodo = document.createElement('h1');
//colocar texto al nuevo nodo
nuevoNodo.textContent = "Nuevo nodo";

//reemplazar el nodo rem por el nuevo nodo
container.replaceChild(nuevoNodo, rem);