// validar nombre :
// verificar que es un string
// veriofica r qqaue lo que alla en el string  no  alla numero ni caracter es peciales@*para{}

/**
 * // funcion para validar un texto
 * validar un texto y que no sea vacion
 * @param {string} nombre 
 * @return {boolean} bolean true or false 
 * 
 */
function validarNombre(nombre) {
    const name = nombre.trim();
    //console.log("sin limpiar:", nombre,"y limpio:",name)
    const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;

    //if(!pattern.test(input.value)){ 
    if (typeof name !== 'string' || name === "" || !pattern.test(name)) {
        console.log("entro en if ")
        return false
    } else {

        return true
    }
}
console.log(validarNombre("  jose maria  "))
console.log(validarNombre("                                                      "))
console.log(validarNombre("  4239539696349636  "))


// validar email   :
//localizar (@) es te bien localizada
// vuscar que termine en punto  y estecion .com etc
// retringir los sevidores  de email o verificar el email en otro lado
// devolver verdadero o falso 

const correo = email.trim(); // con trim elimina los espacios sobrantes delante y detras
const pattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; // la parte roja con letras es lenguaje reyes para validar //lo amarillo es para agrupar // el + es para repetir las veces que quiera
// console.log("sin liampiar: ", nombre, " y limpio: ", name)
if (typeof correo !== 'string'|| correo === "" || !pattern.test(correo)){ //la exclamacion (!) hace la frase negativa, esta preguntando si name no es un string || comprobar que no sea un caracter vacio || para evitar que el usuario meta cosas que no sean letras, solo pude poner letras
    console.log("entro en el if")
    return false
} else {
    return true
}

console.log(validarEmail(" jennifer@email.com "))
console.log(validarEmail(" 68768@gmail.com "))
console.log(validarEmail(" 68768@js "))










//validar url
function validarURL(url1){
    const url = url1.trim(); // con trim elimina los espacios sobrantes delante y detras
    const pattern = /\/(\w+)\/(\w+)(\?{1}.*)?$/; // la parte roja con letras es lenguaje reyes para validar //lo amarillo es para agrupar // el + es para repetir las veces que quiera
    // console.log("sin liampiar: ", nombre, " y limpio: ", name)
    if (typeof url !== 'string'|| url === "" || !pattern.test(url)){ //la exclamacion (!) hace la frase negativa, esta preguntando si name no es un string || comprobar que no sea un caracter vacio || para evitar que el usuario meta cosas que no sean letras, solo pude poner letras
    console.log("entro en el if")
        return false
    } else {
        return true
    }
}
console.log(validarURL(" https://www.w3schools.com/ "))
console.log(validarURL(" http:/barcelonageeks.com/como-validar-una-url-usando-una-expresion-regular-en-javascript "))
console.log(validarURL(" httresion-regular-en-javascript/ "))
// validar fecha
// que se aun numeros con espacios  y conbinaciones correctas con un limite  de tipo strin
function validarFecha(fecha){
    const fecha = fecha.trim();
    const pattern =/^\d{4}([\-/. ])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
    if (typeof fecha !== 'string'|| fecha === "" || !pattern.test(fecha)){
        console.log("entro en el if")
        return false
    } else {
        return true
    }
}
console.log(validarFecha(" 09/04/2023 "))
console.log(validarFecha("  "))
console.log(validarFecha(" 09-04-2023 "))


// 5validar tiempo 
const date = new date ();
const [month, day , year] = [ date.getmont]

// validar fecha y hora de nacimiento
// validar mes
// validar semanas
// validar numero minimis y maximo
// validar telefonos:
// verificar que es un numero
//nsumero de carateres numericos limitadas a 9


// validar terminode buquedad
// validar color favoritos