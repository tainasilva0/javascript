const formulario = document.querySelector("#form")
const numero = document.querySelector("#num")
const resultado = document.querySelector("#res")

function verificar() {
    const escolha = Number(numero.value)

    if(escolha % 2 == 0) {
        resultado.innerHTML = `O número ${escolha} é PAR.`
    } else {
                resultado.innerHTML = `O número ${escolha} é ÍMPAR.`
    }
}