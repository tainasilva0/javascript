const formulario = document.getElementById("inNome")
const botao = document.getElementById("bt")
const rsp = document.querySelector("h3")

botao.addEventListener('click', clicar)

function clicar(event) {
    event.preventDefault()
    const nome = formulario.value
    rsp.innerText = `Seja bem-vindo, ${nome}!`
}

