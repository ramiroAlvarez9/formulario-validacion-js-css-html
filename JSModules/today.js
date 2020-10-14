
export function Today(){
    
    const today = new Date();
    
    moment().format('LLLL');
    
    
    const span = document.createElement('span');
    
    span.textContent = today;
    
    
    const body = document.querySelector('body');
    
    body.appendChild(span);
    
}


    
