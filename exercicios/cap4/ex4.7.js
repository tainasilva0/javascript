const formulario = document.querySelector("#form")
const velocidade = document.querySelector("#vel")
const resultado = document.querySelector("#res")

function verificar(){
    const km = Number(velocidade.value)

    if(km <= 60){
        resultado.innerHTML = `Situação: Sem multas.`
    } else if(km <= 1.20 * 60){
        resultado.innerHTML = `Situação: Multa leve.`
    } else{
        resultado.innerHTML = `Situação: Multa grave.`
    }
}