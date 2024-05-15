
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