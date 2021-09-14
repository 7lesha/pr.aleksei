'use strict'; 

const but = document.querySelector('.but');
const a = document.querySelectorAll('.a');

but.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'index.html';
});

a.forEach((item, index) => {
    const page = window.location.href.endsWith('page' + (index + 1) + '.html');
    item.style.color = page ? 'red' : 'black';
});