const button = document.querySelector('.menu-button');
const header = document.querySelector('.site-header');
button.addEventListener('click', () => {
  const open = header.classList.toggle('nav-open');
  button.setAttribute('aria-expanded', open);
  button.textContent = open ? '×' : '☰';
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('nav-open');
  button.setAttribute('aria-expanded', 'false');
  button.textContent = '☰';
}));
