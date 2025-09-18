// Управление модальным окном
const dlg = document.getElementById('contactDialog');
const openBtn = document.getElementById('openDialog');
const closeBtn = document.getElementById('closeDialog');
const form = document.getElementById('contactForm');
let lastActive = null;

// Открытие модалки
openBtn.addEventListener('click', () => {
    lastActive = document.activeElement;
    dlg.showModal();
    dlg.querySelector('input, select, textarea, button')?.focus();
});

// Закрытие модалки
closeBtn.addEventListener('click', () => dlg.close('cancel'));

// Обработка отправки формы
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Простая валидация
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.setAttribute('aria-invalid', 'true');
            isValid = false;
        } else {
            field.removeAttribute('aria-invalid');
        }
    });
    
    if (isValid) {
        dlg.close('submit');
        form.reset();
    }
});

// Возврат фокуса после закрытия
dlg.addEventListener('close', () => {
    lastActive?.focus();
});

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});