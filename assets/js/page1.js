'use strict';

const p = document.querySelector('.p');
let mobile;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    mobile = 'mobile';
} else {
    mobile = 'not mobile';
}
let OSName="Unknown OS";
if (navigator.userAgent.indexOf("Win") > 0) OSName="Windows";
if (navigator.userAgent.indexOf("Mac") > 0) OSName="MacOS";
if (navigator.userAgent.indexOf("X11") > 0) OSName="UNIX";
if (navigator.userAgent.indexOf("Linux") > 0) OSName="Linux";
let br;
if (navigator.userAgent.indexOf('Safari') > 0) {br = 'Safari'};
if (navigator.userAgent.indexOf('Firefox') > 0) {br = 'MozillaFirefox'};
if (navigator.userAgent.indexOf('MSIE') > 0 || navigator.userAgent.indexOf('NET CLR ') > 0) {br = 'Internet Explorer'};
if (navigator.userAgent.indexOf('Chrome') > 0) {br = 'Google Chrome'};
if (navigator.userAgent.indexOf('YaBrowser') > 0) {br = 'Яндекс браузер'};
if (navigator.userAgent.indexOf('OPR') > 0) {br = 'Opera'};
if (navigator.userAgent.indexOf('Konqueror') > 0) {br = 'Konqueror'};
if (navigator.userAgent.indexOf('Iceweasel') > 0) {br = 'Debian Iceweasel'};
if (navigator.userAgent.indexOf('SeaMonkey') > 0) {br = 'SeaMonkey'};
if (navigator.userAgent.indexOf('Edge') > 0) {br = 'Microsoft Edge'};
p.textContent = 'Вход выполнен с устройства: ' + OSName + ', ' + br + ', ' + mobile + '.';
