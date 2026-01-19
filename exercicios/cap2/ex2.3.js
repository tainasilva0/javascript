// buscar os dados do formulário //

const formulario = document.querySelector("form")
const saida1 = document.querySelector("#resp1")
const saida2 = document.querySelector("#resp2")
const saida3 = document.querySelector("#resp3")

// ação do botão "ver promoções" //

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const veiculo = Number(formulario.inVeiculo.value)
    const preco = Number(formulario.inPreco.value)

    const entrada = preco * 0.50
    const saida = (preco * 0.50) / 12

    saida1.innerHTML = `Promoção: ${veiculo}`
    saida2.innerHTML = `Preço com desconto: ${entrada}`
    saida3.innerHTML = `Preço parcelado em 12x: ${saida} `    
})