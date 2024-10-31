
function pintar_negro(){
    const elemento = document.querySelector("body")
    elemento.style.backgroundColor = "black"
}

function pintar_rojo(){
    const elemento = document.querySelector("body")
    elemento.style.backgroundColor = "red"
}

function pintar_amarillo(){
    const elemento = document.querySelector("body")
    elemento.style.backgroundColor = "yellow"
}
/* Se debe llamar a la función para que se ejecute*/
//pintar_amarillo()

/* ¿Qué se repite en estas funciones? */
/* ¿Qué tienen de distinto estas funciones? */

pintar= function(color){
    const elemento = document.querySelector("body")
    elemento.style.backgroundColor = color
} 

function multiplesPar(par1, par2, par3){
    console.log(par2)
}

multiplesPar(1,2,3)

// COLOR GROSOR TIPO
pintar_border_header =function(color, grosor, tipo){
    const ele=document.querySelector("header")
    ele.style.border= color + " " + grosor + " " + tipo
}

pintar_border =function(color, grosor, tipo, elemento){
    const ele=document.querySelector(elemento)
    ele.style.border= color + " " + grosor + " " + tipo
}

pintar("purple")

//pintar_border_header("green", "3px", "dotted")

pintar_border("green", "3px", "solid", "header")

//valor por defecto
pintar2= function(color="black"){
    const elemento = document.querySelector("body")
    elemento.style.backgroundColor = color
} 

pintar2()
pintar("crimson")
pintar("orange")

function multiplesPar2(par1, par2=2, par3=3){
    console.log(par2+par3)
}

multiplesPar2(3)