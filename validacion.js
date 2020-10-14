// Dia y hora


import {Today} from './JSModules/today.js';


//captura de formulario

const formulario = document.querySelector('form');

//evento de submit
formulario.addEventListener('submit', (e) => {
    
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    //validacion formulario
    if(username==='visit' && password==='visit'){
        const enlace = document.querySelector('a');
        enlace.setAttribute('href','page.html');

    }else {

        alert('password incorrecto')

    }})
    
Today();

