document.getElementById('loginBtn').addEventListener('click', 
    function() {
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'block';
});

document.getElementById('registerBtn').addEventListener('click', 
    function() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'block';
});

function login() {
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}

function register() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'block';
}

window.onload = function() {
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}