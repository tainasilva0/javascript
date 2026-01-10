// criar referência a elementos //

const formulario = document.querySelector("form")
const rsp = document.querySelector("h3")

// ação do botão "mostrar" //

formulario.addEventListener("submit", (e) =>
{ 
const nome = formulario.elements["inNome"].value
rsp.innerText = `Seja bem-vindo ao nosso site, ${nome}!`
e.preventDefault() 
})