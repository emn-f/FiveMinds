// Aguarda o documento carregar para garantir que os elementos existam
document.addEventListener("DOMContentLoaded", function() {

    // --- Lógica do Modal (Popup) ---
    
    // Seleciona os elementos do modal na página 'busca.html'
    const modal = document.getElementById('details-modal');
    const openBtn = document.getElementById('open-modal-btn');
    const closeBtn = document.getElementById('close-modal-btn');

    // Verifica se os elementos existem na página atual
    if (modal && openBtn && closeBtn) {
        
        // Abre o modal ao clicar no item da busca
        openBtn.addEventListener('click', function() {
            modal.style.display = 'flex';
        });

        // Fecha o modal ao clicar no 'X'
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        // Fecha o modal ao clicar fora dele (no overlay)
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Você pode adicionar outras funções simples aqui
    // Ex: lógica para trocar as abas do chat, etc.

});