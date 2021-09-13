'use strict';

const but = document.querySelector('.but');
const p = document.querySelector('.p');
p.textContent = 'Вход выполнен с устройства: ' + navigator.userAgent;
 
but.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'index.html';
});