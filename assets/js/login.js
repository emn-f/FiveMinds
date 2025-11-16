document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');
    const loginMessage = document.getElementById('login-message');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Lógica de autenticação
        if (username === 'five' && password === 'minds') {
            loginMessage.textContent = ''; // Limpa qualquer mensagem de erro
            window.location.href = 'dash.html'; // Redireciona para a página principal
        } else {
            loginMessage.textContent = 'Usuário ou senha incorretos.';
        }
    });
});