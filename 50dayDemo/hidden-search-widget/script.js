var btn = document.getElementsByClassName('btn')[0];
var search = document.getElementsByClassName('search')[0];
var input = document.getElementsByClassName('input')[0];

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})