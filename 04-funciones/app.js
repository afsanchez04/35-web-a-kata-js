

/* function saludar (nombre, equipo){
    return `Hola ${nombre} bienvenido al equipo ${equipo}`
}

let mensaje = saludar('Fabio', 'Rojo');

console.log( mensaje ) */

//función que realiza multiplicación

/* let numeroUno = prompt('dame un nuúmero');
let numeroDos = prompt('dame otro número');

function multiplicar (num1, num2){
    let multiplicacion = num1 * num2;
    return multiplicacion
}

let resultado = multiplicar(numeroUno,numeroDos)
console.log(resultado) */

//Función que determine cuanto debes ahorrar al mes según tus ingresos. 
//El usuario debe ahorrar el 10% mensual

/* let ingresos = Number( prompt('dime tu ingreso') );

function determinarAhorro (ingreso){
    let ahorro =  ingreso*0.1
    return `Debes ahorrar ${ahorro} al mes.`
}

let mensaje = determinarAhorro(ingresos)
console.log(mensaje) */



/* function determinarAhorro (){
    let ingresos = Number( prompt('dime tu ingreso') );

    function printAhorro (ingreso){
        let ahorro =  ingreso*0.1
        return ahorro
    }

    return `Debes ahorrar ${printAhorro(ingresos)} al mes.`

} */

/* let mensaje = determinarAhorro()
console.log(mensaje) */

//Expresión de función
const determinarAhorro = function (){
    let ingresos = Number( prompt('dime tu ingreso') );

    function printAhorro (ingreso){
        let ahorro =  ingreso*0.1
        return ahorro
    }

    return `Debes ahorrar ${printAhorro(ingresos)} al mes.`

}

//Función de tipo flecha o arrow function

/* const sumarTres = (n1,n2,n3) => {
    console.log('Ejecutando función de tipo flecha')
    let result = n1+n2+n3
    console.log(`El resultado de la suma es: ${result}`)
    return result
    
}

sumarTres(6,8,4) */

//Otra figura de arrow function

const saludame = nombre => `Hola ${nombre}`;

console.log( saludame('pepe') )


//Crear una función que recorra un array de objetos y muestre en pantalla solo los usuarios que tengan saldo mayor a 320. Esta función pide como parámetro el array de objetos.

const mostrarUsuarios = array => {

    for (let i = 0; i < array.length; i++) {
        if(array[i].saldo > 320){
            console.log( `Nombre: ${array[i].nombre} Saldo: ${array[i].saldo}` )
        }
    }

}
mostrarUsuarios(users)




//Cuáles son las funciones que usted cree que debe tener su cajero automático.

//Posibles funciones del cajero automático:
//Consultar saldo, depositar, retirar, depositar a otra cuanta, loggearse, recargar el móvil, cerrar sesión, cambiar contraseña.

/* function consultarSaldo (user){
    //Con el ciclo for consulto el saldo del array de objetos
    return usuarios.saldo;
} */

/* function depositar(cantidad, user){
    //Con el ciclo for consulto el saldo del array de objetos
    return user.saldo += cantidad;
} */

/* function retirar(cantidad){
    //Con el ciclo for consulto el saldo del array de objetos
    return user.saldo -= cantidad;
} */