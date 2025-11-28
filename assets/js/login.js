document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');
    const loginMessage = document.getElementById('login-message');

    loginButton.addEventListener('click', function (event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'five' && password === 'minds') {
            loginMessage.textContent = '';
            window.location.href = 'dash.html';
        } else {
            loginMessage.textContent = 'Usuário ou senha incorretos.';
        }
    });
});