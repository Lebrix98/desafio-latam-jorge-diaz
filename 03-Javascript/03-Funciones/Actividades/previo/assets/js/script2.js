function pintar(color){
    const elemento = document.querySelector("body")
    elemento.style.backgroundColor = color
}

function agregarBorde(elementoID, color){
    const elemento = document.querySelector('#'+elementoID)
    elemento.style.border="dashed 3px "+color
}

function agregarBorde2(elementoID){
    const elemento = document.querySelector('#'+elementoID)
    const color = document.querySelector('#color').value
    elemento.style.border="dashed 3px "+color
}