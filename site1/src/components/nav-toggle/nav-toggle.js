const navToggle = document.querySelector('.c-nav-toggle');
const nav = document.querySelector('.c-nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('c-nav--visible');
});
