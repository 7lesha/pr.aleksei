'use strict';

function hideorshow() {
    return label.style.display === 'none';
}

const form = document.querySelector('.form');
const but1 = form.querySelector('.but');
const but2 = form.querySelector('#button');
const label = form.querySelector('.label');
const title = document.querySelector('.title');

form.addEventListener('submit', event => {
    event.preventDefault();
    const arr = [];
    arr.push(form.elements.email.value);
    arr.push(form.elements.pas.value);
    if (hideorshow()) {
        const user = (localStorage.getItem('user')).split(',');
        const [acc, log] = user;
        if (user && acc === arr[0] && log === arr[1]) {
            console.log('ура');
            window.location.href = 'page1.html'; 
        } else {
            console.log('не было найдено такого пользователя');
        }
    } else {
        if (arr[1] === form.elements.pas0.value) {
            localStorage.setItem('user', arr);
            console.log('ура');
            window.location.href = 'page1.html'; 
        }
    }
});
but1.addEventListener('click', () => {
    const f = hideorshow();
    label.style.display = f ? 'block' : 'none';
    but1.textContent = f ? 'Войти' : 'Зарегистрироваться';
    title.textContent = but2.textContent = f ? 'Зарегистрироваться' : 'Войти';
    form.reset();
});

window.addEventListener('load', () => {
    const user = localStorage.getItem('user');
    if (user) {
        window.location.href = 'page1.html'; 
    }
});