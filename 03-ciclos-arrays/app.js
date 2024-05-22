
//Ciclo while: primero evalúa y luego ejecuta
//Imprimir tabla de multiplicar del 7

/* let i = 1;

while(i <= 10){
    //7 x i = 7*i
    //console.log( "7 x " + i + " = " + (7*i) )
    console.log( `7 x ${i} = ${7*i}` )
    i++
} */


//Un programa que le pida frutas al usuario y al final las imprima en pantalla. Con ayuda del ciclo while. El usuario tiene que escribir 'salir' para finalizar el ciclo 

/* let fruta = prompt('añade una fruta o "salir" para finalizar').toLowerCase()
let mensaje = '';

while(fruta != 'salir'){
    mensaje += fruta + ' - '
    fruta = prompt('añade una fruta o "salir" para finalizar').toLowerCase()
}

console.log(mensaje) */



//Ciclo do while: primero ejecuta y luego evalúa

/* let e = 1;

do{
    console.log( `9 x ${e} = ${9*e}` )
    e++
}while(e < 1); */

//Ciclo for
//tabla de multiplicar del 6

// inicialización  |   condición   |  incremento

for(let i = 1; i <= 20; i++){
    console.log( `6 x ${i} = ${6*i}` )
}


//Arrays
//length: 5
//index:        0        1         2        3      4      
let frutas = ['piña','manzana','sandia','banano','pera'];

console.log( frutas[3] ) //banano
console.log(`El array frutas tiene ${frutas.length} elementos`)// El array frutas tiene 5 elementos 
console.log(frutas[5])//undefined
frutas[5] = 'uvas';
console.log(frutas)
console.log(`El array frutas tiene ${frutas.length} elementos`)

//Añadir elementos al array con length
frutas[frutas.length] = 'tomate'
frutas.push('mandarina')
frutas.pop()
console.log(frutas)

//Ciclos y arrays

/* let saboresHelados = ['piña','manzana','sandia','banano','pera','tomate','coco','limón']; */

//Imprimir en una lista numerada todos los sabores de helado guardados en el array saboresHelados con ayuda del ciclo for

/* for( let i = 0; i < saboresHelados.length; i++ ){
    console.log( `${i+1}-${saboresHelados[i]}` )// 1-piña
} */


//Recorrer un array de usuarios e imrpimir el saldo actual de cada uno.

let nombreUsuario = prompt('username');
let password = Number( prompt('password') );

let cuentas = [
    { nombre: 'Mali', saldo: 200, password: 12345},
    { nombre: 'Gera', saldo: 290, password: 12344 },
    { nombre: 'Maui', saldo: 67, password: 12346 }
];

for (var i = 0; i < cuentas.length; i++) {
    //console.log(`${cuentas[i].nombre} tiene ${cuentas[i].saldo} disponibles`);
    if(nombreUsuario === cuentas[i].nombre && password === cuentas[i].password){
        console.log('Bienvenido a mi banco ' + cuentas[i].nombre + '!')
        console.log(`Tu saldo actual es de ${cuentas[i].saldo}`)
    }
}

console.log('Fin del for...')

function depositar (saldo){
    cuentas[1].saldo += saldo
}

function retirar (saldo){
    cuentas[1].saldo -= saldo
}

function consultarSaldo (saldo){
    console.log(cuentas[1].saldo)
}



