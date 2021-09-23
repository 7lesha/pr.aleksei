import '../styles/clients.css';
import { time } from './const/constans';

const button = document.querySelector('.button');
const label = document.querySelector('.label');
const input = document.querySelector('.input');
const table = document.querySelector('.table');
const div = document.querySelector('.container');
const confirm0 = document.querySelector('.confirm');
const cancel = document.querySelector('.cancel');

(async function () {
  async function getUsers() {
    const response = await fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json');
    return response.json();
  }
  const users = await getUsers();
  let female = 0;
  let male = 0;
  let greatestbalance = 0;
  const arr0 = [];
  users.forEach(item => {
    const tabletr = document.createElement('tr');
    let balanceanddate = '';
    for (let temporary = 0; temporary < item.balance.length; temporary += 1) {
      if (Number(item.balance[temporary]) || item.balance[temporary] === '.' || item.balance[temporary] === '0') {
        balanceanddate += item.balance[temporary];
      }
    }
    arr0.push(parseFloat(balanceanddate));
    if (greatestbalance < arr0[arr0.length - 1]) {
      greatestbalance = arr0[arr0.length - 1];
    }
    if (item.gender === 'female') {
      female += 1;
      tabletr.classList.add('f', 'tr');
    } else {
      male += 1;
      tabletr.classList.add('m', 'tr');
    }
    table.append(tabletr);
    function clients(trtext, text0) {
      const tabletd = document.createElement('td');
      tabletd.textContent = text0;
      trtext.append(tabletd);
    }
    clients(tabletr, item.name);
    clients(tabletr, item.company);
    clients(tabletr, item.email);
    clients(tabletr, item.phone);
    clients(tabletr, item.balance);
    balanceanddate = '';
    for (let temporary = 0; temporary < item.registered.length; temporary += 1) {
      if (item.registered[temporary] !== ' ') {
        balanceanddate += item.registered[temporary];
      }
    }
    const date = new Date(Date.parse(balanceanddate));
    clients(tabletr, date.toLocaleDateString());
    const del = document.createElement('button');
    del.textContent = 'Удалить';
    del.classList.add('del');
    tabletr.append(del);
  });
  const infop = document.querySelector('.p');
  function text() {
    infop.textContent = 'Мужчин: ' + male + '; Женщин: ' + female + '; Наибольший баланс: ' + greatestbalance;
  }
  text();
  let number;
  const buttonsdel = document.querySelectorAll('.del');
  buttonsdel.forEach((buttondel, index) => {
    buttondel.addEventListener('click', () => {
      div.style.display = 'block';
      number = index + 1;
    });
  });
  function hide() {
    div.style.display = 'none';
  }
  cancel.addEventListener('click', hide);
  const infotr = document.querySelectorAll('tr');
  confirm0.addEventListener('click', () => {
    hide();
    infotr.forEach((texttr, index) => {
      if (index === number) {
        if (texttr.classList.value === 'm tr') {
          male -= 1;
        }
        if (texttr.classList.value === 'f tr') {
          female -= 1;
        }
        if (arr0[index - 1] === greatestbalance) {
          arr0[index - 1] = 0;
          const temporary = arr0.slice(0);
          temporary.sort((first, second) => second - first);
          greatestbalance = temporary[0];
        } else {
          arr0[index - 1] = 0;
        }
        text();
        texttr.remove();
      }
    });
    const mess = document.createElement('div');
    mess.classList.add('mess');
    div.after(mess);
    const ptext = document.createElement('p');
    const close = document.createElement('button');
    close.innerHTML = '<img src=./src/img/close.svg>';
    close.classList.add('close');
    ptext.textContent = 'Строка таблицы удалена';
    mess.prepend(ptext);
    mess.prepend(close);
    function closemess() {
      mess.remove();
    }
    setTimeout(closemess, time.time3000);
    close.addEventListener('click', closemess);
  });
  button.addEventListener('click', () => window.scrollTo(0, 0));
  label.addEventListener('click', () => {
    const check = input.checked;
    table.style.backgroundColor = check ? 'ghostwhite' : 'white';
  });
})();
