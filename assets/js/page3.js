'use strict';

window.addEventListener('load', () => {
    const user = localStorage.getItem('user');
    if (!user) {
        window.location.href = 'index.html'; 
    }
});