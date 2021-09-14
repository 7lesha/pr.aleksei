'use strict';

const p = document.querySelector('.p');
p.textContent = 'Вход выполнен с устройства: ' + navigator.userAgent;

window.addEventListener('load', () => {
    const user = localStorage.getItem('user');
    if (!user) {
        window.location.href = 'index.html'; 
    }
});