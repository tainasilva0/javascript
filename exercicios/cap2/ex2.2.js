// buscar os elementos do html //
const formulario = document.querySelector("form")
const rsp1 = document.querySelector("h3")
const rsp2 = document.querySelector("h4")

// ação do botão "pesquisar" //
formulario.addEventListener("submit", (e) => {
    const titulo = formulario.inTitulo.value
    const duracao = Number(formulario.inDuracao.value)

    const horas = duracao / 60
    const minutos = duracao % 60

    rsp1.innerText = titulo
    rsp2.innerText = `Duração: ${horas} hora(s) e ${minutos} minuto(s).`
    e.preventDefault()
})