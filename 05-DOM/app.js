//<p>holamundo</p>
//Ejemplo de cómo se ven los elementos de HTML en javascript

/* 

const p = {
    innerText: 'holamundo',
    style: {
        color: 'red',
        fontFamily: 'cursive',
        fontSize: '2em',
        textDecoration: 'underline'
    },
    id: '',
    class: '',
    toLowerCase: function (){
        return 'el texto está en minúscula'
    }
}
p.style.color = 'blueviolet';
console.log( p.toLowerCase() ) 

*/



//1. Variables
//const titulo = document.getElementById('titulo');
const titulo = document.querySelector('#titulo');
const miBtn = document.querySelector('#btn');

console.log(titulo)

//2. Declaración de funciones
//Función declararda
function cambiarContent (){
    titulo.innerText = 'Comiendo hamburguesas 🍔';
    titulo.style.textDecoration = 'underline';
}

//3. Eventos
miBtn.addEventListener('click',cambiarContent)


//realizar un contador que incremente hasta 20 y decremente hasta mínimo 0

//Pedir un dato al usuario por medio de un input. Ese resultado guardado se debe comparar en una condicional. Se pretende que sea como un formulario de validación de datos.


//1. Captura de variables
const userInput = document.querySelector('#userInput');
const passInput = document.querySelector('#passInput');
const btnEnviar = document.querySelector('#btnEnviar');

const userReal = 'admin';
const passReal = 'admin';

//2. Crear las funciones
const validarUsuario = () => {

    for (let i = 0; i < users.length; i++) {
        if(userInput.value === users[i].nombre){
            console.log( `Nombre: ${users[i].nombre} Saldo: ${users[i].saldo}` )
            userInput.value = ''
            passInput.value = ''
            return;
        }
    }

    alert('no se encuentra tu usuario')

    /* if(userInput.value === userReal && passInput.value === passReal){
        alert('Bienvenido ' + userInput.value)
    }else{
        alert('Usuario o contraseña incorrecta');
    } */

    userInput.value = ''
    passInput.value = ''
} 

//3. Llamado de eventos
btnEnviar.addEventListener('click',validarUsuario)












