document.addEventListener("DOMContentLoaded", function () {

    // Modal Logic
    const modal = document.getElementById('details-modal');
    const openBtn = document.getElementById('open-modal-btn');
    const closeBtn = document.getElementById('close-modal-btn');

    if (modal && openBtn && closeBtn) {
        openBtn.addEventListener('click', function () {
            modal.style.display = 'flex';
        });
        closeBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Chat Logic
    const chatMessagesContainer = document.getElementById('chat-messages-container');

    function attachChatListeners(inputId, btnId) {
        const chatInput = document.getElementById(inputId);
        const sendBtn = document.getElementById(btnId);

        if (chatInput && sendBtn && chatMessagesContainer) {
            function sendMessage() {
                const messageText = chatInput.value.trim();
                if (messageText !== "") {
                    const messageBubble = document.createElement('div');
                    messageBubble.classList.add('message-bubble', 'sent');
                    messageBubble.innerHTML = `
                        <strong>Você</strong>
                        <p>${messageText}</p>
                    `;
                    chatMessagesContainer.appendChild(messageBubble);
                    chatInput.value = "";
                    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
                }
            }

            sendBtn.addEventListener('click', sendMessage);

            chatInput.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
        }
    }

    attachChatListeners('chat-message-input', 'chat-send-btn');
    attachChatListeners('chat-message-input-mobile', 'chat-send-btn-mobile');

    if (chatMessagesContainer) {
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }
});