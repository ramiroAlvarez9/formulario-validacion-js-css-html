//DAT
//Ingreso
//INGRESO
// Dia y hora
function Today() {
    
    const today = new Date();
    
    console.log(moment().format('LLLL'));
    
    
    const span = document.createElement('span');
    
    span.textContent = today;
    
    
    const body = document.querySelector('body');
    
    body.appendChild(span);

}



//formulario - validacion 


const formulario = document.querySelector('form');

formulario.addEventListener('submit', (e) => {
    
    e.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    if(username==='visit' && password==='visit'){
        const enlace = document.querySelector('a');
        enlace.setAttribute('href','page.html');

    }else {

        alert('password incorrecto')

    }})




Today();





