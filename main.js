const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#list');

function navToggle(){
    menu.classList.toggle('show');
    document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)