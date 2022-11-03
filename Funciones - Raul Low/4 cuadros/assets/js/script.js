var color

document.addEventListener('keydown', function (event) { 
    if (event.key === 'a') {
    color = "yellow"

    } else if (event.key === 's') { 
    color = "purple";

    } else if (event.key === 'd') { 
    color = "orange";
    } 
    })


// Pintar Primer div

let primero = document.getElementById("primero");

function pintarPrimero(colorSeleccionado) {
    primero.style.backgroundColor = colorSeleccionado;
}

primero.addEventListener("click", () => pintarPrimero(color));

// Pintar Segundo div

let segundo = document.getElementById("segundo");

function pintarSegundo(colorSeleccionado) {
    segundo.style.backgroundColor = colorSeleccionado;
}

segundo.addEventListener("click", () => pintarSegundo(color));

// Pintar Tercer div

let tercero = document.getElementById("tercero");

function pintarTercero(colorSeleccionado) {
    tercero.style.backgroundColor = colorSeleccionado;
}

tercero.addEventListener("click", () => pintarTercero(color));

// Pintar Cuarto div

let cuarto = document.getElementById("cuarto");

function pintarCuarto(colorSeleccionado) {
    cuarto.style.backgroundColor = colorSeleccionado;
}

cuarto.addEventListener("click", () => pintarCuarto(color));