'use strict'; 

const but = document.querySelector('.but');
const a = document.querySelectorAll('.a');

window.addEventListener('load', () => {
    if (localStorage.getItem('user')) {
        const user = localStorage.getItem('user').split(',');
        if (user[0] === 'false') {
            window.location.href = 'index.html'; 
        }
    } else {
        window.location.href = 'index.html'; 
    }
});

but.addEventListener('click', () => {
    let user = (localStorage.getItem('user')).split(',');
    user[0] = 'false';
    localStorage.setItem('user', user);
    window.location.href = 'index.html';
});

a.forEach((item, index) => {
    const page = window.location.href.endsWith('page' + (index + 1) + '.html');
    item.style.color = page ? 'red' : 'black';
    item.addEventListener('click', event => {
        if (page) {
            event.preventDefault();
        }
    });
});