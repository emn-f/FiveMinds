document.addEventListener("DOMContentLoaded", function () {

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
});