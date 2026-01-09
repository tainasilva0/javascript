// VIZINHOS DE UM NÚMERO //

const num = Number(prompt("Digite um número:"))
const ant = num - 1
const suc = num + 1

alert(`Antecessor do seu número: ${ant}\nSucessor do seu número: ${suc}`)

// DIVISÃO DA CONTA DE UM PEDIDO DA PIZZARIA //

const conta = Number(prompt("Qual o valor da despesa?"))
const amigos = Number(prompt("Quantas pessoas na mesa?"))
const divisao = conta / amigos

alert(`Os amigos pagarão ${divisao} cada um.`)

// FORMA DE PAGAMENTO //

const prod = Number(prompt("Informe o valor do produto escolhido:"))
confirm("Formas de pagamento:\nCrédito\nDébito")
const deb = prod / 0.9
alert(`Pagamento à vista: R$ ${deb.toFixed(2)}`)
const cred = prod / 3
alert(`Pagamento parcelado em 3x: R$ ${cred}`)

// MÉDIA DE NOTAS //

const nota1 = Number(prompt("Primeira nota do aluno:"))
const nota2 = Number(prompt("Segunda nota do aluno:"))
const media = (nota1 + nota2)/2

alert(`A média das notas do aluno é ${media.toFixed(1)}`)