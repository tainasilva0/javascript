const formulario = document.querySelector("form")
const aluno = document.querySelector("#aluno")
const n1 = document.querySelector("#n1")
const n2 = document.querySelector("#n2")
const msg = document.querySelector("#msg")
const resultado = document.querySelector("#res")

function verificar(v){
    
    v.preventDefault()

    const nome = aluno.value
    const nota1 = Number(n1.value)
    const nota2 = Number(n2.value)
    const media = (nota1 + nota2) / 2

    msg.innerHTML = `Sua média é: ${media}`

    if(media < 6.0) {
        resultado.innerHTML = `${nome}, você está reprovado!`
    } else {
        resultado.innerHTML = `Parabéns, ${nome}! Você está aprovado!`
    } 
} 
formulario.addEventListener("submit", verificar)