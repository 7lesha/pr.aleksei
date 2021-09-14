'use strict';

const button = document.querySelector('.button');
const label = document.querySelector('.label');
const input = document.querySelector('.input');
const table = document.querySelector('.table');
const div = document.querySelector('.container');
const confirm = document.querySelector('.confirm');
const cancel = document.querySelector('.cancel');

function hide() {
    div.style.display = 'none';
}

window.addEventListener('load', () => {
    const user = localStorage.getItem('user');
    if (!user) {
        window.location.href = 'index.html'; 
    }
});

cancel.addEventListener('click', hide);

let number;
confirm.addEventListener('click', () => {
    function closemess() {
        mess.remove();
    };
    hide();
    const tr = document.querySelectorAll('tr');
    tr.forEach((tr, index) => {
        if (index === number) {
            console.log(number, index);
            console.log(tr);
            tr.remove();
        }
    });
    const mess = document.createElement('div');
    mess.classList.add('mess');
    div.after(mess);
    const p = document.createElement('p');
    const close = document.createElement('button');
    close.innerHTML = "<img src=./assets/img/close.svg>";
    close.classList.add('close');
    p.textContent = 'Строка таблицы удалена';
    mess.prepend(p);
    mess.prepend(close);
    setTimeout(closemess, 5000);
    close.addEventListener('click', () => {
        closemess();
    });
});
button.addEventListener('click', () => {
    window.scrollTo(0, 0);
});
label.addEventListener('click', () => {
    if (input.checked) {
        table.style.backgroundColor = 'ghostwhite';
    } else {
        table.style.backgroundColor = 'white';
    }
});

(async function () {
    async function getUsers() {
        const response = await fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json');
        return await response.json();
    }
    const users = await getUsers();
    let female = 0;
    let male = 0;
    let greatestbalance = 0;
    users.forEach(item => {
        const tr = document.createElement('tr');
        tr.classList.add('tr');
        table.append(tr);
        let balance_and_date = ''; //parseFloat() не работает из-за $ в начале строки и ','
        for (let i = 0; i < item.balance.length; i++) {
            if (Number(item.balance[i]) || item.balance[i] === '.') {
                balance_and_date += item.balance[i];
            }
        }
        balance_and_date = parseFloat(balance_and_date);
        if (greatestbalance < balance_and_date) {
            greatestbalance = balance_and_date;
        }
        if (item.gender === 'female') {
            female++;
        } else {
            male++;
        }
        clients(tr, item.name);
        clients(tr, item.company);
        clients(tr, item.email);
        clients(tr, item.phone);
        clients(tr, item.balance);
        balance_and_date = '';  // Date.parse(item.registered) не распознает как дату из-за пробелов 
        for (let i = 0; i < item.registered.length; i++) { 
            if (item.registered[i] !== ' ') {
                balance_and_date += item.registered[i];
            }
        }
        const date = new Date(Date.parse(balance_and_date));
        clients(tr, date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear());
        const del = document.createElement('button');
        del.textContent = 'Удалить';
        del.classList.add('del');
        tr.append(del);
    });
    const p = document.querySelector('.p');
    p.textContent = 'Мужчин: ' + male + '; Женщин: ' + female + '; Наибольший баланс: ' + greatestbalance;
    function clients(tr, text) {
        const td = document.createElement('td');
        td.textContent = text;
        tr.append(td);
    }
    const del = document.querySelectorAll('.del');
    del.forEach((del, index) => {
        del.addEventListener('click', () => {
            div.style.display = 'block';
            number = index + 1;
        });
    });
})();
