const formulario = document.querySelector("form")
const nome = document.querySelector("#pessoa")
const altura = document.querySelector("#alt")
const peso = document.querySelector("#peso")
const res = document.querySelector("#res")

formulario.addEventListener("submit", verificar)

function verificar(v){
    v.preventDefault()

    const alturaValor = Number(altura.value)
    const pesoValor = Number(peso.value)
    const imc = (pesoValor / (alturaValor * alturaValor)).toFixed(2)
    
    let msg = ""

    if(imc < 18.5){
        msg = `abaixo do peso`
    } else if(imc < 25){
        msg = `com peso normal`
    } else if(imc < 30){
        msg = `com sobrepeso`
    } else if(imc < 35){
        msg = `com obesidade grau I`
    } else if(imc < 40){
        msg = `com obesidade grau II`
    } else {
        msg = `com obesidade grau III`

    }  res.innerHTML = `${nome.value}, você está ${msg}.`
}

formulario.addEventListener("reset", () => {
    res.innerHTML = ""
})
