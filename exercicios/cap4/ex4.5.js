const formulario = document.querySelector("#form")
const numero = document.querySelector("#num")
const resultado = document.querySelector("#res")

function calcular(){
    const escolha = Number(numero.value)
    const raiz = Math.sqrt(escolha)

    if(Number.isInteger(raiz))
        resultado.innerHTML = `O número ${escolha} tem raiz exata: ${raiz}.`
    else{ 
        resultado.innerHTML = `O número ${escolha} não tem raiz exata.` 
    }
}