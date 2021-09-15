'use strict';

function hideorshow() {
    return label.style.display === 'none';
}
function hide() {
    div.style.display = 'none';
}
function show(text) {
    div.style.display = 'block';
    p.textContent = text;
    setTimeout(hide, 3000);
}
function n() {
    const f = hideorshow();
    label.style.display = f ? 'block' : 'none';
    but1.textContent = f ? 'Войти' : 'Зарегистрироваться';
    title.textContent = f ? 'Создание аккаунта' : 'Войти';
    but2.textContent = f ? 'Зарегистрироваться' : 'Войти';
    but2.disabled = 'disables';
    form.reset();
}

const form = document.querySelector('.form');
const but1 = form.querySelector('.but');
const but2 = form.querySelector('.but0');
const label = form.querySelector('.label');
const title = document.querySelector('.title');
const div = document.querySelector('.messerror');
const p = div.querySelector('.error');
const butclose = document.querySelector('.close');
const err = document.querySelector('.err');
const email = document.querySelector('.email');
const emailreg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  
form.addEventListener('submit', event => {
    event.preventDefault();
    const arr = ['false'];
    arr.push(email.value);
    arr.push(form.elements.pas.value);
    if (hideorshow()) {
        if (localStorage.getItem('user')) {
            const user = (localStorage.getItem('user')).split(',');
            if (user[1] === arr[1] && user[2] === arr[2]) {
                user[0] = 'true';
                localStorage.setItem('user', user);
                window.location.href = 'page1.html'; 
            } else {
                show('Проверьте логин и пароль!');
            }
        } else {
            show('Зарегистрируйтесь. Нет ни одного пользователя!');
            n();
        }
    } else {
        if (localStorage.getItem('user')) {
            show('Ошибка. Вы уже зарегисрированы!');
            n();
        } else {
            if (arr[2] === form.elements.pas0.value) {
                localStorage.setItem('user', arr);
                window.location.href = 'page1.html';
            } else {
                show('Пароли не совпадают!');
            }
        }
    }
});
but1.addEventListener('click', n);
butclose.addEventListener('click', hide);

window.addEventListener('load', () => {
    let user = localStorage.getItem('user');
    if (user) {
        user = user.split(',');
        if (user[0] === 'true') {
            window.location.href = 'page1.html'; 
        }
    }
});

email.addEventListener('input', () => {
    const m = emailreg.test(email.value);
    err.style.display = m ? 'none' : 'block';
    but2.disabled = m ? false : 'disables';
    but2.style.cursor = m ? 'pointer' : 'context-menu';
});