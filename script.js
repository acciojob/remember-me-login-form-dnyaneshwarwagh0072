const form = document.getElementById('login-form');
const existingButton = document.getElementById('existing');

// Check if there are saved details in local storage
const savedUsername = localStorage.getItem('username');
const savedPassword = localStorage.getItem('password');

if (savedUsername && savedPassword) {
    existingButton.style.display = 'none';
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;

    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);

    if (rememberMe) {
        existingButton.style.display = 'block';
    }
});

existingButton.addEventListener('click', function () {
    const savedUsername = localStorage.getItem('username');
    alert(`Logged in as ${savedUsername}`);
});