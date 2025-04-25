        // Настройка Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Раскомментировать для повторной анимации:
                    // observer.unobserve(entry.target);
                } else {
                    // Раскомментировать для повторной анимации:
                    // entry.target.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.1, // Срабатывает при 10% видимости элемента
            rootMargin: '0px 0px -100px 0px' // Задержка для срабатывания
        });

        // Применяем ко всем элементам
        document.querySelectorAll('.animated-element').forEach(element => {
            observer.observe(element);
        });