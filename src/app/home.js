import '../styles/home.css';

const ptext = document.querySelector('.p');
let mobile;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  mobile = 'mobile';
} else {
  mobile = 'not mobile';
}
let OSName='Unknown OS';
if (navigator.userAgent.indexOf("Win") > 0) {
  OSName='Windows';
}
if (navigator.userAgent.indexOf("Mac") > 0) {
  OSName='MacOS';
}
if (navigator.userAgent.indexOf("X11") > 0) {
  OSName='UNIX';
}
if (navigator.userAgent.indexOf("Linux") > 0) {
  OSName='Linux';
}
let brow;
if (navigator.userAgent.indexOf('Safari') > 0) {
  brow = 'Safari'
}
if (navigator.userAgent.indexOf('Firefox') > 0) {
  brow = 'MozillaFirefox'
}
if (navigator.userAgent.indexOf('MSIE') > 0 || navigator.userAgent.indexOf('NET CLR ') > 0) {
  brow = 'Internet Explorer'
}
if (navigator.userAgent.indexOf('Chrome') > 0) {
  brow = 'Google Chrome'
}
if (navigator.userAgent.indexOf('YaBrowser') > 0) {
  brow = 'Яндекс браузер'
}
if (navigator.userAgent.indexOf('OPR') > 0) {
  brow = 'Opera'
}
if (navigator.userAgent.indexOf('Konqueror') > 0) {
  brow = 'Konqueror'
}
if (navigator.userAgent.indexOf('Iceweasel') > 0) {
  brow = 'Debian Iceweasel'
}
if (navigator.userAgent.indexOf('SeaMonkey') > 0) {
  brow = 'SeaMonkey'
}
if (navigator.userAgent.indexOf('Edge') > 0) {
  brow = 'Microsoft Edge'
}
ptext.textContent = `Вход выполнен с устройства: ${OSName}, ${brow}, ${mobile}.`;
