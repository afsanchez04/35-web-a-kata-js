//Condicionales

/* let telefono = Number( prompt('que versión de iphone tiene') );

if(telefono >= 13 ){
    console.log('Puedes entrar al grupo de whatsapp')
}else{
    console.log('no puedes entrar al grupo')
} */

//Estructura if, else if, else
// .toLowerCase() //convierte cadena de caracteres a minúscula
// .toUpperCase() //convierte cadena de caracteres a mayúscula

//colombia   Colombia  ColOmBia  COLOMBIA

let tuPais = prompt('dime un país').toLowerCase();

if(tuPais === 'colombia'){
    console.log('bandeja paisa')
}else if(tuPais === 'mexico'){
    console.log('mole')
}else if(tuPais === 'peru'){
    console.log('hamburguesa')
}else if(tuPais === 'argentina'){
    console.log('choripan')
}else{
    console.log('No come')
}
