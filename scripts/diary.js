document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.querySelector('.btn--primary');
    const entriesList = document.querySelector('.entries-list');
    
    addBtn.addEventListener('click', function() {
        const date = new Date();
        const formattedDate = date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'short'
        });
        
        const newEntry = document.createElement('li');
        newEntry.className = 'entries-list__item entries-list__item--in-progress';
        newEntry.innerHTML = `
            <i class="fas fa-spinner"></i>
            <span class="entries-list__date">${formattedDate}</span>
            <span class="entries-list__text">Новая задача</span>
        `;
        
        entriesList.appendChild(newEntry);
        
        // Прокрутка к новой записи
        newEntry.scrollIntoView({ behavior: 'smooth' });
    });
});