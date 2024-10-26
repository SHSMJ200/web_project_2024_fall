const colorButton = document.getElementById('colorButton');
const body = document.body;
const navbar = document.querySelector('nav');
const navbarlink = document.querySelector('nav a');
var counter = 0;
colorButton.addEventListener('click', () => {
    if (counter == 0) {
        body.style.backgroundColor = 'rgb(13, 46, 53)';
        colorButton.textContent = 'Night Time';
        counter = 1;
    }
    else {
        body.style.backgroundColor = 'rgb(181, 227, 227)';
        colorButton.textContent = 'Day Time';
        counter = 0;
    }
});