const principal = document.querySelector(".container-principal");

// agregar 100 nodos de la forma tradicional
const nodosFor1 = () => {
    for(let i = 0; i < 100; i++){
        const nodo = document.createElement('input');
        nodo.className = "nodo 1";
        nodo.type = "number";
        nodo.placeholder = `hola nodo ${i+1}`;
    
        principal.appendChild(nodo);
    }
}

//nodosFor1();

const nodosFor2 = () => {
    let nodos = []

    for(let i = 0; i < 100; i++){
        const nodo = document.createElement('input');
        nodo.className = "nodo 2";
        nodo.type = "email";
        nodo.placeholder = `hola nodo 2 ${i+1}`;

        nodos.push(nodo);
    }

    return nodos;
}

// agregar los nodos
principal.append(...nodosFor2());