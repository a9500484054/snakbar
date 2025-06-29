document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.menu-burger');
    const popup = document.querySelector('.menu-popup');
    const closeBtn = document.querySelector('.menu-popup__btn-close');
    document.body.style.overflow = 'hidden';

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
    const openModalBtn = document.querySelectorAll('.openModalBtn');
    const closeBtn = document.querySelector('.close');
    
    // Открытие модального окна
    openModalBtn.forEach(el => {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Запрет прокрутки страницы
        });
    })
    
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


const heroSwipers = document.querySelectorAll('.pack-swiper').forEach(swiper => {
    new Swiper(swiper, {
        speed: 1000,
        loop: true, // Добавьте этот параметр для бесконечной прокрутки
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const menuItems = document.querySelectorAll('.menu__item');
//     const menuList = document.querySelector('.menu__list');
    
//     // Проверяем, является ли экран десктопным
//     function isDesktop() {
//         return window.matchMedia(`(min-width: 998px`).matches;
//     }
    
//     menuItems.forEach(item => {
//         item.addEventListener('click', function() {
//             if (!isDesktop()) return;
            
//             // Если элемент уже expanded, сворачиваем его
//             if (this.classList.contains('expanded')) {
//                 this.classList.remove('expanded');
//                 menuList.classList.remove('expanded');
//                 return;
//             }
            
//             // Сворачиваем все другие expanded элементы
//             document.querySelectorAll('.menu__item.expanded').forEach(expandedItem => {
//                 expandedItem.classList.remove('expanded');
//             });
            
//             // Разворачиваем текущий элемент
//             this.classList.add('expanded');
//             menuList.classList.add('expanded');
//         });
//     });
    
//     // Сворачиваем expanded элементы при изменении размера окна
//     window.addEventListener('resize', function() {
//         if (!isDesktop()) {
//             document.querySelectorAll('.menu__item.expanded').forEach(item => {
//                 item.classList.remove('expanded');
//             });
//             menuList.classList.remove('expanded');
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu__item');
    const menuList = document.querySelector('.menu__list');
    
    function isDesktop() {
        return window.matchMedia(`(min-width: 998px)`).matches;
    }
    
    menuItems.forEach(item => {
        // Обработчик при наведении
        item.addEventListener('mouseenter', function() {
            if (!isDesktop()) return;
            
            // Сворачиваем все другие expanded элементы
            document.querySelectorAll('.menu__item.expanded').forEach(expandedItem => {
                if (expandedItem !== this) {
                    expandedItem.classList.remove('expanded');
                }
            });
            
            // Разворачиваем текущий элемент
            this.classList.add('expanded');
            menuList.classList.add('expanded');
        });
        
        // Обработчик при уходе курсора (опционально)
        item.addEventListener('mouseleave', function() {
            if (!isDesktop()) return;
            
            // Можно оставить элемент развернутым до наведения на другой
            // Или добавить задержку перед сворачиванием
        });
    });
    
    // Обработчик для всего списка (чтобы сворачивать при уходе за пределы)
    menuList.addEventListener('mouseleave', function() {
        if (!isDesktop()) return;
        
        document.querySelectorAll('.menu__item.expanded').forEach(item => {
            item.classList.remove('expanded');
        });
        menuList.classList.remove('expanded');
    });
    
    window.addEventListener('resize', function() {
        if (!isDesktop()) {
            document.querySelectorAll('.menu__item.expanded').forEach(item => {
                item.classList.remove('expanded');
            });
            menuList.classList.remove('expanded');
        }
    });
});


window.addEventListener('load', function() {
  setTimeout(function() {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
    document.body.style.overflow = '';
  }, 1000); // Задержка перед исчезновением (1 секунда)
});


// document.addEventListener('DOMContentLoaded', function() {
//     const chatItems = document.querySelectorAll('.chat__item');
//     const chatLoop = document.querySelector('.chat__loop');
    
//     // Функция для последовательного показа сообщений
//     function showMessages() {
//         chatItems.forEach((item, index) => {
//             setTimeout(() => {
//                 item.classList.add('visible');
                
//                 // Показываем индикатор набора сообщения перед последним сообщением
//                 if (index === chatItems.length - 2) {
//                     setTimeout(() => {
//                         chatLoop.classList.add('visible');
//                                     // setTimeout(() => {
//                                     //     chatLoop.classList.remove('visible');
//                                     // }, 1000);
//                     }, 500);
//                 }
//             }, index * 2000); // Задержка между сообщениями - 2 секунды
//         });
//     }
    
//     // Запускаем анимацию через небольшую задержку после загрузки страницы
//     setTimeout(showMessages, 1000);
    
//     // Для демонстрации можно добавить кнопку перезапуска
//     const restartBtn = document.createElement('button');
//     restartBtn.textContent = 'Повторить переписку';
//     restartBtn.style.marginTop = '20px';
//     restartBtn.style.padding = '10px 20px';
//     restartBtn.style.backgroundColor = '#4CAF50';
//     restartBtn.style.color = 'white';
//     restartBtn.style.border = 'none';
//     restartBtn.style.borderRadius = '5px';
//     restartBtn.style.cursor = 'pointer';
    
//     restartBtn.addEventListener('click', function() {
//         chatItems.forEach(item => item.classList.remove('visible'));
//         chatLoop.classList.remove('visible');
//         showMessages();
//     });
    
//     document.querySelector('.container').appendChild(restartBtn);
// });



document.addEventListener('DOMContentLoaded', function() {
    const chatSection = document.querySelector('.chat');
    const chatItems = document.querySelectorAll('.chat__item');
    const chatLoop = document.querySelector('.chat__loop');
    let animationStarted = false;
    let scrollLocked = false;

    // Функция для блокировки скролла
    function lockScroll() {
        scrollLocked = true;
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
    }

    // Функция для разблокировки скролла
    function unlockScroll() {
        scrollLocked = false;
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
    }

    // Функция для показа сообщений
    function showMessages() {
        if (animationStarted) return;
        animationStarted = true;
        // lockScroll();

        chatItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
                
                // Показываем индикатор набора перед последним сообщением
                if (index === chatItems.length - 2) {
                    setTimeout(() => {
                        chatLoop.classList.add('visible');
                        // setTimeout(() => {
                        //     chatLoop.classList.remove('visible');
                        // }, 1000);
                    }, 500);
                }

                // Разблокируем скролл после последнего сообщения
                if (index === chatItems.length - 1) {
                    // setTimeout(unlockScroll, 1000);
                }
            }, index * 2000);
        });
    }

    // Проверка видимости блока при скролле
    function checkVisibility() {
        if (animationStarted || scrollLocked) return;
        console.log();
        const rect = chatSection.getBoundingClientRect();
        const isVisible = (
            rect.top <= (window.innerHeight * 0.75) && 
            rect.bottom >= (window.innerHeight * 0.25)
        );

        if (isVisible) {
            showMessages();
            window.removeEventListener('scroll', checkVisibility);
        }
    }

    // Обработчик скролла
    window.addEventListener('scroll', checkVisibility);
    
    // Проверить сразу при загрузке (если блок уже в зоне видимости)
    checkVisibility();

    // Для демонстрации можно добавить кнопку перезапуска
    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Повторить переписку';
    restartBtn.style.marginTop = '20px';
    restartBtn.style.padding = '10px 20px';
    restartBtn.style.backgroundColor = '#4CAF50';
    restartBtn.style.color = 'white';
    restartBtn.style.border = 'none';
    restartBtn.style.borderRadius = '5px';
    restartBtn.style.cursor = 'pointer';
    
    restartBtn.addEventListener('click', function() {
        animationStarted = false;
        chatItems.forEach(item => item.classList.remove('visible'));
        chatLoop.classList.remove('visible');
        // Прокрутить к блоку и запустить анимацию
        chatSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(checkVisibility, 1000);
    });
    
    document.querySelector('.container').appendChild(restartBtn);
});