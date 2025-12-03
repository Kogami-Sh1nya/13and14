document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.modal__close');
    const projectBtns = document.querySelectorAll('[data-project]');
    
    const projects = {
        1: {
            title: "Личный сайт",
            content: "<p>Полностью адаптивный лендинг, созданный с использованием HTML5, CSS3 (Flexbox, Grid). Включает анимации, валидацию форм и оптимизацию для мобильных устройств.</p><p><strong>Технологии:</strong> HTML, CSS, JavaScript</p>"
        },
        2: {
            title: "Todo-приложение",
            content: "<p>Приложение для управления задачами с возможностью добавления, удаления, отметки выполнения и сохранения в LocalStorage.</p>"
        },
        3: {
            title: "Интернет-магазин",
            content: "<p>SPA интернет-магазин с корзиной товаров, фильтрацией, пагинацией и mock API. Реализована авторизация пользователей.</p><p><strong>Технологии:</strong> React, React Router, Bootstrap, REST API</p>"
        },
        4: {
            title: "Портфолио на Bootstrap",
            content: "<p>Адаптивное портфолио, созданное с использованием Bootstrap 5. Включает карусель проектов, модальные окна и анимации.</p><p><strong>Технологии:</strong> Bootstrap 5, JavaScript</p>"
        }
    };
    
    projectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projects[projectId];
            
            modalTitle.textContent = project.title;
            modalBody.innerHTML = project.content;
            modal.style.display = 'flex';
        });
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Фильтрация проектов
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card-large');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Удаляем активный класс у всех кнопок
            filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('filter-btn--active');
            
            const filter = this.textContent.toLowerCase();
            
            projectCards.forEach(card => {
                if (filter === 'все' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});