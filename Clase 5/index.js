/** PROPAGACION DE EVENTOS */

const container = document.querySelector("#container");
console.log(container);

const div1 = document.querySelector(".div1");
console.log(div1);

const div2 = document.querySelector(".div2");
console.log(div2);

const div3 = document.querySelector(".div3");
console.log(div3);

const accion = (e) => {
    console.log(`Hola propagacion desde ${e.currentTarget.nodeName}: ${e.currentTarget.className}`);
}

div2.addEventListener('click', accion);
div3.addEventListener('click', accion);
container.addEventListener('click', accion);

/** si ahora cmambiamos de accion */
const accionNoProgaation = (e) => {
    e.stopPropagation();
    console.log(`Hola no propagacion desde ${e.currentTarget.nodeName}: ${e.currentTarget.className}`);
}

div1.addEventListener('click', accion);
div2.addEventListener('click', accionNoProgaation);
div3.addEventListener('click', accionNoProgaation);