const formulario = document.querySelector("#form")
const mostrar = document.querySelector("#res")

// usando o FOR 
function exibir() {
    const numero = Number(document.querySelector("#num").value)
    for(let tabuada = 0; tabuada <= 10; tabuada++) {
        mostrar.innerHTML += `${numero} x ${tabuada} = ${numero * tabuada} <br>`
    }
} 

// usando o WHILE 
function exibir() {
    const numero = Number(document.querySelector("#num").value)
    let tabuada = 0
    while (tabuada <= 10) {
        mostrar.innerHTML += `${numero} x ${tabuada} = ${numero * tabuada ++} <br>`
    }
} 

// usando o DO WHILE
function exibir() {
    const numero = Number(document.querySelector("#num").value)
    let tabuada = 0
    do {
        mostrar.innerHTML += `${numero} x ${tabuada} = ${numero * tabuada ++} <br>`
    } while (tabuada <= 10)
} 