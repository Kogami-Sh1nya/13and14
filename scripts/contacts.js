document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    
    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Имя обязательно для заполнения';
            return false;
        } else if (nameInput.value.trim().length < 2) {
            nameError.textContent = 'Имя должно содержать минимум 2 символа';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }
    
    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email обязателен для заполнения';
            return false;
        } else if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Введите корректный email';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }
    
    function validateMessage() {
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Сообщение обязательно для заполнения';
            return false;
        } else if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Сообщение должно содержать минимум 10 символов';
            return false;
        } else {
            messageError.textContent = '';
            return true;
        }
    }
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isMessageValid) {
            // Здесь обычно отправка данных на сервер
            alert('Сообщение успешно отправлено!');
            form.reset();
        } else {
            alert('Пожалуйста, исправьте ошибки в форме');
        }
    });
});