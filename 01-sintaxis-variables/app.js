
//Primer comentario en una sola línea
// Javascript

/* 
Comentario 
En 
Multiples
línas
*/

console.log("Ejecutando desde VSCode");
console.log("Node JS, Javascript"); 

//Declarando variables

//Maneras correctas de declarar variables:

var edad = 19;
let ciudad = 'Medellin';
const color = 'Verde';
let tarjetaDeCredito = 'visa';
let usuario34 = 'jose';
const $botones = 'todos los botones';
let comida_favorita = 'hamburguesa';
// let temaPreferencia = prompt('Qué quieres aprender');
// console.log(temaPreferencia)


//Maneras incorrectas:
/* let nombre-usuario = 'pepe';
let 34usuario = 'jose';
let nuevo registro = 'rojo'; */


//Diferencia entre var, let y const

//var: permite re declarar la variable y también re asignar
var fruta = 'manzana';
var fruta = 'piña';
fruta = 'pera';
fruta = 'banano';

console.log(fruta)

//let: no permite re declaración pero si permite re asignación
let pais = 'manzana';
//let pais = 'piña'; //Esto es incorrecto
pais = 'pera';
pais = 'banano';

console.log(pais)

//const: no permite re declaración y no permite re asignación
const cancion = 'manzana';
//const cancion = 'piña'; //no es correcto
//cancion = 'pera';
//cancion = 'banano';

console.log(cancion)



//Operadores

let result = 2 * "uno"; // NaN
let jugador = null;

let mascota;
console.log(mascota) //undefined
mascota = 'rodolfo';
console.log(mascota) //rodolfo

//objeto
let guitar = {
    color: 'rojo',
    cuerdas: 6,
    marca: 'Fender',
    estuche: true
}

console.log(guitar.color)

let puntajes = 5;

console.log(puntajes)
console.log(++puntajes + " puntaje:" + puntajes)
console.log(puntajes)
console.log(puntajes++ + " puntaje:" + puntajes)
console.log(puntajes)

puntajes += 8;
console.log(puntajes)
puntajes -= 5;
console.log(puntajes)

let saldo = 200;
saldo += 50;
console.log(saldo)
saldo += 80;
console.log(saldo)
saldo -= 80;
console.log(saldo)
saldo -= 10;
console.log(saldo)

//Operadores de comparación

console.log( Boolean(6>3) ) //true
console.log( Boolean(6<3) ) //false
console.log( Boolean(4<=3) ) //false
console.log( Boolean(4>=3) ) //true

//Operadores de Igualdad
//== compara solo valor
//=== compara valor y tipo de dato

console.log( Boolean(6==3) ) //false
console.log( Boolean(3=='3') ) //true
console.log( Boolean(3==='3') ) //false

//!= compara solo valor
//!== compara valor y tipo de dato

console.log( Boolean(6!=3) ) //true
console.log( Boolean(3!='3') ) //false
console.log( Boolean(3!=='3') ) //true

//&& se deben cumplir las dos condiciones
// || se debe cumplir al menos una de las condiciones

console.log( 6!=3 && 3!=='3') //true
console.log( 6!=3 && 3!='3') //false
console.log( 6===3 && 3!='3') //false
console.log( 'pedro'== 'Pedro' && 'Pedro' == 'Pedro') //false


