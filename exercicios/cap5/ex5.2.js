const formulario = document.querySelector("#form")
resultado1 = document.querySelector("#res1")
resultado2 = document.querySelector("#res2")

// usando o FOR
function exibir() {
    const numero = Number(document.querySelector("#num").value)
    for (let cresc = 0; cresc <= numero; cresc++ )
        resultado1.innerHTML += `${cresc}, `

    for (let decresc = numero; decresc >= 0; decresc-- )
        resultado2.innerHTML += `${decresc}, `
} 

// usando o WHILE
function exibir() {
    const numero = Number(document.querySelector("#num").value)
    let cresc = 0
    while(cresc <= numero) {
        resultado1.innerHTML += `${cresc}, `
        cresc++
    }

    let decresc = numero
    while(decresc >= 0) {
        resultado2.innerHTML += `${decresc}, `
        decresc--
    }
} 

// usando o DO WHILE
function exibir() {
    const numero = Number(document.querySelector("#num").value)
    let cresc = 0
    do {
        resultado1.innerHTML += `${cresc}, `
        cresc++
    } while(cresc <= numero)

    let decresc = numero
    do {
        resultado2.innerHTML += `${decresc}, `
        decresc--
    } while(decresc >= 0)
}