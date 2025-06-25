document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.menu-burger');
    const popup = document.querySelector('.menu-popup');
    const closeBtn = document.querySelector('.menu-popup__btn-close');
    
    burgerBtn.addEventListener('click', function() {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
    });
    
    closeBtn.addEventListener('click', function() {
        popup.classList.remove('active');
        document.body.style.overflow = ''; // Восстанавливаем скролл
    });
    
    // Закрытие при клике вне меню
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeBtn = document.querySelector('.close');
    
    // Открытие модального окна
    openModalBtn.addEventListener('click', function() {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Запрет прокрутки страницы
    });
    
    // Закрытие модального окна
    closeBtn.addEventListener('click', function() {
        closeModal();
    });
    
    // Закрытие при клике вне модального окна
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Функция для закрытия с анимацией
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Возврат прокрутки страницы
        
        // Удаляем модальное окно из DOM после завершения анимации
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
    
    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
});