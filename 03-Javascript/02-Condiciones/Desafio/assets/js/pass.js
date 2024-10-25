function CheckPass() {

    let num1 = document.querySelector("#pass1").value;
    let num2 = document.querySelector("#pass2").value;
    let num3 = document.querySelector("#pass3").value; 
    let par = document.querySelector("#textPass")

    let result = num1 + num2 + num3;

    
    if ( result === "911" ) {
        par.innerHTML = "Password 1 correcto"
    } else if ( result === "714" ) {
        par.innerHTML = "Password 2 correcto"
    } else {
        par.innerHTML = "Password incorrecto"
    }


}