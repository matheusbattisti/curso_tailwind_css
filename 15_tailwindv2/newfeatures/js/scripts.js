const btn = document.querySelector('#dark-mode');
const html = document.querySelector('html');

btn.addEventListener('click', function() {

  html.classList.toggle('dark');

});