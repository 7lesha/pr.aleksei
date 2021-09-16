'use strict';

const button = document.querySelector('.button');
const label = document.querySelector('.label');
const input = document.querySelector('.input');
const table = document.querySelector('.table');
const div = document.querySelector('.container');
const confirm0 = document.querySelector('.confirm');
const cancel = document.querySelector('.cancel');

function hide() {
    div.style.display = 'none';
}

(async function () {
    async function getUsers() {
        const response = await fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json');
        return await response.json();
    }
    function text() {
        p.textContent = 'Мужчин: ' + male + '; Женщин: ' + female + '; Наибольший баланс: ' + greatestbalance;
    }
    const users = await getUsers();
    let female = 0;
    let male = 0;
    let greatestbalance = 0;
    let arr = [];
    users.forEach(item => {
        const tr = document.createElement('tr');
        let balance_and_date = ''; //parseFloat() не работает из-за $ в начале строки и ','
        for (let i = 0; i < item.balance.length; i++) {
            if (Number(item.balance[i]) || item.balance[i] === '.') {
                balance_and_date += item.balance[i];
            }
        }
        arr.push(parseFloat(balance_and_date));
        if (greatestbalance < arr[arr.length-1]) {
            greatestbalance = arr[arr.length-1];
        }
        if (item.gender === 'female') {
            female++;
            tr.classList.add('f', 'tr');
        } else {
            male++;
            tr.classList.add('m', 'tr');
        }
        table.append(tr);
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
    text();
    function clients(tr, text) {
        const td = document.createElement('td');
        td.textContent = text;
        tr.append(td);
    }
    let number;
    const del = document.querySelectorAll('.del');
    del.forEach((del, index) => {
        del.addEventListener('click', () => {
            div.style.display = 'block';
            number = index + 1;
        });
    });
    cancel.addEventListener('click', hide);
    const tr = document.querySelectorAll('tr');
    confirm0.addEventListener('click', () => {
        function closemess() {
            mess.remove();
        };
        hide();
        tr.forEach((tr, index) => {
            if (index === number) {
                if (tr.classList.value === 'm tr') {
                    male--;
                } 
                if (tr.classList.value === 'f tr') {
                    female--;
                } 
                if (arr[index - 1] === greatestbalance) { 
                    arr[index - 1] = 0; //к нулю так как удалять затратнее и если удалить все строки таблицы
                    const number = arr.slice(0); // будет выводить наибольший баланс 0 а не underfined
                    number.sort((a, b) => b - a); 
                    greatestbalance = number[0];
                } else {
                    arr[index - 1] = 0;
                }
                text();
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
        setTimeout(closemess, 3000);
        close.addEventListener('click', closemess);
    });
    button.addEventListener('click', () => window.scrollTo(0, 0));
    label.addEventListener('click', () => {
        const check = input.checked;
        table.style.backgroundColor = check ? 'ghostwhite' : 'white';
    });
})();