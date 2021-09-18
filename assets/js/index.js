'use strict';

function hideorshow() {
    return divnone.style.display === 'none';
}
function hide() {
    div.style.display = 'none';
}
function show(text) {
    div.style.display = 'block';
    p.textContent = text;
    setTimeout(hide, 5000);
}
function reset() {
    const temporary = hideorshow();
    divnone.style.display = temporary ? 'block' : 'none';
    but1.textContent = temporary ? 'Войти' : 'Зарегистрироваться';
    title.textContent = temporary ? 'Создание аккаунта' : 'Войти';
    but2.textContent = temporary ? 'Зарегистрироваться' : 'Войти';
    but2.disabled = true;
    err[0].style.display = err[1].style.display = err[2].style.display = 'none';
    true_false = [false, false, false];
    passwords(false, 1);
    passwords(false, 2);
    form.reset();
}
function login_button(err, none_block, text) {
    err.textContent = text;
    err.style.marginBottom = '0px';
    err.style.display = none_block ? 'none' : 'block';
    const temporary = true_false[0] && true_false[1] && (hideorshow() ? true : (true_false[2] ? true : false));
    but2.disabled = temporary ? false : true;
    but2.style.cursor = temporary ? 'pointer' : 'context-menu';
}
function passwords(temporary, index) {
    inputs[index].type = temporary ? 'text' : 'password';
    butpas[index - 1].innerHTML = "<img src=./assets/img/eye" + (temporary ? '1' : '') + ".png>";
}

let true_false = [false, false, false];
const form = document.querySelector('.form');
const but1 = form.querySelector('.but1');
const but2 = form.querySelector('.but2');
const divnone = form.querySelector('.divnone');
const title = document.querySelector('.title');
const div = document.querySelector('.messerror');
const p = div.querySelector('.error');
const butclose = document.querySelector('.close');
const err = document.querySelectorAll('.err');
const inputs = document.querySelectorAll('.input');
const butpas = document.querySelectorAll('.butpas');
const emailreg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const AZ = /[A-Z,А-Я]/;
const az = /[a-z,а-я]/;
const num = /[0-9]/;
const symbol = /[~`!@#$%\^&*+=\-\[\]\\';()/{}|\\":<>\?]/;

form.addEventListener('submit', event => {
    event.preventDefault();
    const arr = ['false'];
    arr.push(inputs[0].value);
    arr.push(inputs[1].value);
    if (hideorshow()) {
        if (localStorage.getItem('user')) {
            let user = localStorage.getItem('user').split(',');
            if (user[1] === arr[1] && user[2] === arr[2]) {
                user[0] = 'true';
                localStorage.setItem('user', user);
                window.location.href = 'page1.html'; 
            } else {
                show('Проверьте логин и пароль!');
            }
        } else {
            show('Зарегистрируйтесь. Нет ни одного пользователя!');
            reset();
        }
    } else {
        if (localStorage.getItem('user')) {
            show('Ошибка. Вы уже зарегисрированы!');
            reset();
        } else {
            if (arr[2] === inputs[2].value) {
                localStorage.setItem('user', arr);
                show('Регистрация прошла успешно. Теперь войдите');
                reset();
            } else {
                show('Пароли не совпадают!');
            }
        }
    }
});
but1.addEventListener('click', reset);
butclose.addEventListener('click', hide);

window.addEventListener('load', () => {
    if (localStorage.getItem('user')) {
        const user = localStorage.getItem('user').split(',');
        if (user[0] === 'true') {
            window.location.href = 'page1.html'; 
        }
    }
});
inputs.forEach((inputs, index) => {
    if (index === 0) {
        inputs.addEventListener('input', () => {
            if (inputs.value.length === 0) {
                login_button(err[index], false, 'Поле не заполнено!');
            } else {
                const temporary = emailreg.test(inputs.value);
                true_false[index] = temporary ? true : false;
                login_button(err[index], true_false[index], 'Пожалуйста, введите корректный email-адрес');
            }
        });
    } else {
        inputs.addEventListener('input', () => {
            true_false[index] = false;
            const d = AZ.test(inputs.value) && az.test(inputs.value) && num.test(inputs.value) && symbol.test(inputs.value);
            if (inputs.value.length === 0) {
                login_button(err[index], true_false[index], 'Поле не заполнено!');
            } else if (inputs.value.length < 8 || inputs.value.length > 20) {
                login_button(err[index], true_false[index], 'Длина пароля должна быть от 8 до 20 символов');
            } else if (d){
                true_false[index] = true;
                login_button(err[index], true_false[index]);
            } else {
                login_button(err[index], true_false[index], 'Пароль должен состоять минимум из 1 цифры, 1 буквы, 1 заглавной буквы и 1 спецсимвола');
                err[index].style.marginBottom = '-16px';
            }
        });
        inputs.addEventListener('keydown', event => {
            if (event.key === ',' || event.key === '.' || event.key === ' ') {
                event.preventDefault();
            }
        });
    }
});
butpas.forEach((butpas, index) => {
    butpas.addEventListener('click', () => {
        const temporary = inputs[index + 1].type === 'password';
        passwords(temporary, index + 1);
    });
});