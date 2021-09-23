import '../styles/login.css';
import { numbers, time } from './const/constans';

let truefalse = [
  false, false, false,
];
const form = document.querySelector('.form');
const but1 = form.querySelector('.but1');
const but2 = form.querySelector('.but2');
const divnone = form.querySelector('.divnone');
const title = document.querySelector('.title');
const div = document.querySelector('.messerror');
const ptext = div.querySelector('.error');
const butclose = document.querySelector('.close');
const errmes = document.querySelectorAll('.err');
const inputs = document.querySelectorAll('.input');
const butpas = document.querySelectorAll('.butpas');
const emailreg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const emailAZ = /[A-Z,А-Я]/;
const emailaz = /[a-z,а-я]/;
const num = /[0-9]/;
const symbol = /[~`!@#$%^&*+=\-[\]\\';()/{}|\\":<>?]/;
const users = 'user';

function hideorshow() {
  return divnone.style.display === 'none';
}
function hide() {
  div.style.display = 'none';
}
function show(text) {
  div.style.display = 'block';
  ptext.textContent = text;
  setTimeout(hide, time.time5000);
}
function passwords(temporary, index) {
  inputs[index].type = temporary ? 'text' : 'password';
  butpas[index - 1].innerHTML = '<img src=./src/img/eye' + (temporary ? '1' : '') + '.png>';
}
function reset() {
  const temporary = hideorshow();
  divnone.style.display = temporary ? 'block' : 'none';
  but1.textContent = temporary ? 'Войти' : 'Зарегистрироваться';
  title.textContent = temporary ? 'Создание аккаунта' : 'Войти';
  but2.textContent = temporary ? 'Зарегистрироваться' : 'Войти';
  but2.disabled = true;
  errmes.forEach((item, index) => {
    errmes[index].style.display = 'none';
  });
  truefalse = [
    false, false, false,
  ];
  passwords(false, 1);
  passwords(false, truefalse.length - 1);
  form.reset();
}
function loginbutton(ind, noneblock, text) {
  errmes[ind].textContent = text;
  errmes[ind].style.marginBottom = '0px';
  errmes[ind].style.display = noneblock ? 'none' : 'block';
  let temporary = truefalse[0] && truefalse[1];
  temporary = temporary && (hideorshow() ? true : truefalse[truefalse.length - 1]);
  but2.disabled = !temporary;
  but2.style.cursor = temporary ? 'pointer' : 'context-menu';
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const arr0 = ['false'];
  arr0.push(inputs[0].value);
  arr0.push(inputs[1].value);
  if (hideorshow()) {
    if (localStorage.getItem(users)) {
      const user = localStorage.getItem(users).split(',');
      if (user[1] === arr0[1] && user[user.length - 1] === arr0[arr0.length - 1]) {
        user[0] = 'true';
        localStorage.setItem(users, user);
        window.location.href = './home.html';
      } else {
        show('Проверьте логин и пароль!');
      }
    } else {
      show('Зарегистрируйтесь. Нет ни одного пользователя!');
      reset();
    }
  } else if (localStorage.getItem(users)) {
    show('Ошибка. Вы уже зарегисрированы!');
    reset();
  } else if (arr0[arr0.length - 1] === inputs[arr0.length - 1].value) {
    localStorage.setItem(users, arr0);
    show('Регистрация прошла успешно. Теперь войдите');
    reset();
  } else {
    show('Пароли не совпадают!');
  }
});
but1.addEventListener('click', reset);
butclose.addEventListener('click', hide);

window.addEventListener('load', () => {
  if (localStorage.getItem(users)) {
    const user = localStorage.getItem(users).split(',');
    if (user[0] === 'true') {
      window.location.href = 'home.html';
    }
  }
});
inputs.forEach((input, index) => {
  if (index === 0) {
    input.addEventListener('input', () => {
      if (input.value.length === 0) {
        loginbutton(index, false, 'Поле не заполнено!');
      } else {
        truefalse[index] = emailreg.test(input.value);
        loginbutton(index, truefalse[index], 'Пожалуйста, введите корректный email-адрес');
      }
    });
  } else {
    input.addEventListener('input', () => {
      truefalse[index] = false;
      let temporary = emailAZ.test(input.value) && emailaz.test(input.value);
      temporary = temporary && num.test(input.value) && symbol.test(input.value);
      if (input.value.length === 0) {
        loginbutton(index, truefalse[index], 'Поле не заполнено!');
      } else if (input.value.length < numbers.number8 || input.value.length > numbers.number20) {
        loginbutton(index, truefalse[index], 'Длина пароля должна быть от 8 до 20 символов');
      } else if (temporary) {
        truefalse[index] = true;
        loginbutton(index, truefalse[index]);
      } else {
        loginbutton(index, truefalse[index], 'Пароль должен состоять минимум из 1 цифры, 1 буквы, 1 заглавной буквы и 1 спецсимвола');
        errmes[index].style.marginBottom = '-16px';
      }
    });
    input.addEventListener('keydown', event => {
      if (event.key === ',' || event.key === '.' || event.key === ' ') {
        event.preventDefault();
      }
    });
  }
});
butpas.forEach((item, index) => {
  item.addEventListener('click', () => {
    const temporary = inputs[index + 1].type === 'password';
    passwords(temporary, index + 1);
  });
});
