//your JS code here. If required.
function showData() {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (savedUsername && savedPassword) {
        document.getElementById('existing').style.display = 'block';
    }
};

document.getElementById('submit').onclick = function () {
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
};

document.getElementById('existing').onclick = function () {
    const savedUsername = localStorage.getItem('username');
    alert(`Logged in as ${savedUsername}`);
};
showData();