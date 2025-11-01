// Navbar toggle
const menu = document.getElementById('nav-menu');
const hamburger = document.getElementById('nav-hamburger');
hamburger.addEventListener('click', () => menu.classList.toggle('active'));

// Scroll to top
const scrollBtn = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
