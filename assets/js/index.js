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
    err1.style.display = 'none';
    err2.style.display = 'none';
    err3.style.display = 'none';
    form.reset();
    tfpas1 = tfpas2 = tfemail = false;
}
function c(err, m, text) {
    err.textContent = text;
    err.style.display = m ? 'none' : 'block';
    const g = tfemail && tfpas1 && (hideorshow() ? true : (tfpas2 ? true : false));
    but2.disabled = g ? false : 'disables';
    but2.style.cursor = g ? 'pointer' : 'context-menu';
}

let tfpas1, tfpas2, tfemail = false;
const form = document.querySelector('.form');
const but1 = form.querySelector('.but');
const but2 = form.querySelector('.but0');
const label = form.querySelector('.label');
const title = document.querySelector('.title');
const div = document.querySelector('.messerror');
const p = div.querySelector('.error');
const butclose = document.querySelector('.close');
const err1 = document.querySelector('.err1');
const err2 = document.querySelector('.err2');
const err3 = document.querySelector('.err3');
const email = document.querySelector('.email');
const pas1 = document.querySelector('.pas1');
const pas2 = document.querySelector('.pas2');
const emailreg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  
form.addEventListener('submit', event => {
    event.preventDefault();
    const arr = ['false'];
    arr.push(email.value);
    arr.push(pas1.value);
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
            if (arr[2] === pas2.value) {
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
    tfemail = m ? true : false;
    if (email.value.length === 0) {
        c(err1, m, 'Поле не заполнено!');
    } else {
        c(err1, m, 'Ошибка!');
    }
});
pas1.addEventListener('input', () => {
    if (pas1.value.length === 0) {
        tfpas1 = false;
        c(err2, false, 'Поле не заполнено!');
    } else if (pas1.value.length < 5) {
        tfpas1 = false;
        c(err2, false, 'Минимум 5 символов');
    } else {
        tfpas1 = true;
        c(err2, true);
    }
});
pas2.addEventListener('input', () => {
    if (pas2.value.length === 0) {
        tfpas2 = false;
        c(err3, false, 'Поле не заполнено!');
    } else if (pas2.value.length < 5) {
        tfpas2 = false;
        c(err3, false, 'Минимум 5 символов');
    } else {
        tfpas2 = true;
        c(err3, true);
    }
});