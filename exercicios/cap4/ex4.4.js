const formulario = document.querySelector("#form")
const tempo = document.querySelector("#hora")
const resultado = document.querySelector("#res")

function exibir(){
  const hora = Number(tempo.value)
  const fuso = hora + 5
  
  if(fuso > 24){
    fuso = fuso - 24
  }
  resultado.innerHTML = `Hora na frança: ${fuso.toFixed(2)}h.`
}