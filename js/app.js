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


// const heroSwipers = document.querySelectorAll('.pack-swiper').forEach(swiper => {
//     new Swiper(swiper, {
//         speed: 1000,
//         loop: true, // Добавьте этот параметр для бесконечной прокрутки
//         autoplay: {
//             delay: 3000,
//             disableOnInteraction: false,
//         },
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    // Функция для инициализации Swiper
    function initSwiper(element) {
        return new Swiper(element, {
            speed: 1000,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
        });
    }

    // Настройки для Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7 // Слайдер инициализируется когда 10% его площади видно
    };

    // Создаем Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const swiperElement = entry.target;
                initSwiper(swiperElement);
                observer.unobserve(swiperElement); // Прекращаем наблюдение после инициализации
            }
        });
    }, observerOptions);

    // Находим все элементы слайдеров и начинаем наблюдать за ними
    document.querySelectorAll('.pack-swiper').forEach(swiper => {
        observer.observe(swiper);
    });
});

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
//     const chatSection = document.querySelector('.chat');
//     const chatItems = document.querySelectorAll('.chat__item');
//     const chatLoop = document.querySelector('.chat__loop');
//     let animationStarted = false;
//     let scrollLocked = false;

//     // Функция для показа сообщений
//     function showMessages() {
//         if (animationStarted) return;
//         animationStarted = true;
//         chatItems.forEach((item, index) => {
//             setTimeout(() => {
//                 item.classList.add('visible');
//                 const text = item.querySelector('.msg-text')
//                 const typingIndicator = item.querySelector('.typing-indicator')
//                 // Показываем индикатор набора перед последним сообщением
//                 if (index === chatItems.length - 2) {
//                     setTimeout(() => {
//                         chatLoop.classList.add('visible');
//                     }, 0);
//                 }
//                 if(text) {
//                     setTimeout(() => {
//                         text.style.display = 'flex'
//                         typingIndicator.style.display = 'none'
//                     }, 1000)
//                 }
//             }, index * 1500);
//         });
//     }

//     // Проверка видимости блока при скролле
//     function checkVisibility() {
//         if (animationStarted || scrollLocked) return;
//         console.log();
//         const rect = chatSection.getBoundingClientRect();
//         const isVisible = (
//             rect.top <= (window.innerHeight * 0.75) && 
//             rect.bottom >= (window.innerHeight * 0.25)
//         );

//         if (isVisible) {
//             setTimeout(()=> {
//                 showMessages();
//                 window.removeEventListener('scroll', checkVisibility);
//             }, 1000)
//         }
//     }

//     // Обработчик скролла
//     window.addEventListener('scroll', checkVisibility);
    
//     // Проверить сразу при загрузке (если блок уже в зоне видимости)
//     checkVisibility();
// });


document.addEventListener('DOMContentLoaded', function() {
    const chatSection = document.querySelector('.chat');
    const chatItems = document.querySelectorAll('.chat__item');
    const chatLoop = document.querySelector('.chat__loop');
    let animationStarted = false;
    let scrollLocked = false;

    // Функция для эффекта печатающегося текста
    function typeWriter(element, text, speed) {
        let i = 0;
        element.textContent = ''; // Очищаем текст перед началом печати
        element.style.display = 'flex'; // Показываем элемент
        
        function typing() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        
        typing();
    }

    // Функция для показа сообщений
    function showMessages() {
        if (animationStarted) return;
        animationStarted = true;
        chatItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
                const textElement = item.querySelector('.msg-text');
                const typingIndicator = item.querySelector('.typing-indicator');
                
                // Показываем индикатор набора перед последним сообщением
                if (index === chatItems.length - 2) {
                    setTimeout(() => {
                        chatLoop.classList.add('visible');
                    }, 0);
                }
                
                if(textElement) {
                    setTimeout(() => {
                        // Получаем текст из атрибута data-text или из содержимого элемента
                        const textToType = textElement.dataset.text || textElement.textContent;
                        typingIndicator.style.display = 'none';
                        typeWriter(textElement, textToType, 50); // 50ms задержка между символами
                    }, 1000);
                }
            }, index * 2000);
        });
    }

    // Проверка видимости блока при скролле
    function checkVisibility() {
        if (animationStarted || scrollLocked) return;
        const rect = chatSection.getBoundingClientRect();
        const isVisible = (
            rect.top <= (window.innerHeight * 0.75) && 
            rect.bottom >= (window.innerHeight * 0.25)
        );

        if (isVisible) {
            setTimeout(()=> {
                showMessages();
                window.removeEventListener('scroll', checkVisibility);
            }, 1000);
        }
    }

    // Обработчик скролла
    window.addEventListener('scroll', checkVisibility);
    
    // Проверить сразу при загрузке (если блок уже в зоне видимости)
    checkVisibility();
});