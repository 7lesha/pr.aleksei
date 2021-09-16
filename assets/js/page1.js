'use strict';

const p = document.querySelector('.p');
// const text = navigator.userAgent.split(' ');
// let mobile = 'not mobile';
// text.forEach(item => {if (item === 'Mobile') mobile = item});
p.textContent = 'Вход выполнен с устройства: ' + navigator.userAgent;
//text[1].slice(1) + ' ' + text[2] + ' ' + text[3] + ' ' + text[10] + ' ' + mobile;
