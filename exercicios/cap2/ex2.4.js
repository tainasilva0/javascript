const formulario = document.querySelector("form")
const rsp1 = document.querySelector("#resp1")
const rsp2 = document.querySelector("#resp2")

// ação do botão "ver promoções"

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const remedio = formulario.inRemedio.value
    const preco = Number(formulario.inPreco.value)
    const desconto = ((preco * 2) * 100) / 100

    rsp1.innerHTML = `Promoção de ${remedio}`
    rsp2.innerHTML = `Na compra de dois, pague somente R$ ${desconto}`
})