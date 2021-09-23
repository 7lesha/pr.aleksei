const but = document.querySelector('.but');
const link = document.querySelectorAll('.a');
const users = 'user';

window.addEventListener('load', () => {
  if (localStorage.getItem(users)) {
    const user = localStorage.getItem(users).split(',');
    if (user[0] === 'false' && !window.location.href.endsWith('login.html')) {
      window.location.href = 'login.html';
    }
  } else if (!window.location.href.endsWith('login.html')) {
    window.location.href = 'login.html';
  }
});
but.addEventListener('click', () => {
  const user = localStorage.getItem(users).split(',');
  user[0] = 'false';
  localStorage.setItem(users, user);
  window.location.href = 'login.html';
});
link.forEach((item, index) => {
  const pages = [
    'home', 'clients', 'map',
  ];
  const page = window.location.href.endsWith(pages[index] + '.html');
  link[index].style.color = page ? 'red' : 'black';
  link[index].addEventListener('click', event => {
    if (page) {
      event.preventDefault();
    }
  });
});
