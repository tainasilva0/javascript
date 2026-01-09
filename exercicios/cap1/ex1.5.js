// CALCULAR O DOBRO DE UM NÚMERO //

let num = prompt("Digite um número:")
let dobro = num * 2

alert(`O dobro desse número é ${dobro}.`)

// CALCULAR A SOMA DE DOIS NÚMEROS //

let alg1 = Number(prompt("Digite um número:"))
let alg2 = Number(prompt("Digite outro número:"))
let soma = alg1 + alg2

alert(`A soma desses números é ${soma}.`)

// CÁLCULO DO VALOR DE UM JANTAR //

let jantar = Number(prompt("Digite o valor do seu jantar:"))
let taxa = jantar * 0.1
let total = jantar + taxa

alert(`Taxa do garçom: R$ ${taxa.toFixed(2)} \nTotal a pagar: R$ ${total.toFixed(2)}`) /* \n significa pular uma linha*/

// DURAÇÃO DE UMA VIAGEM EM DIAS E HORAS //

let hora = Number(prompt("Quantas horas você viajou?"))
let dia = Number(prompt("Quantos dias você viajou?"))
let duracao = hora + (dia * 24)

alert(`A sua viagem teve uma duração de ${duracao} horas.`)