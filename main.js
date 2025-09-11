const dlg = document.getElementById('contactDialog');
const openBtn = document.getElementById('openDialog');
const closeBtn = document.getElementById('closeDialog');
const form = document.getElementById('contactForm');
let lastActive = null;
openBtn.addEventListener('click', () => {
    lastActive = document.activeElement;
    dlg.showModal(); // модальный режим +
    затемнение
    dlg.querySelector('input,select,textarea,button')?.focus();
});
closeBtn.addEventListener('click', () => dlg.close('cancel'));
form?.addEventListener('submit', (e) => {
    // валидация см. 1.4.2; при успехе закрываем окно
});
dlg.addEventListener('close', () => { lastActive?.focus(); });
// Esc по умолчанию вызывает событие 'cancel' и закрывает <dialog>