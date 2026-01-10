// criar referência a elementos //

const frm = document.querySelector("form")
const rsp = document.querySelector("h3")

// ação do botão "mostrar" //

frm.addEventListener("submit", (e) =>
{ 
const nome = frm.elements["inNome"].value
rsp.innerText = `Seja bem-vindo ao nosso site, ${nome}!`
e.preventDefault() 
})
