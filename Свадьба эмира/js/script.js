// Анимация появления секций
const observer = new IntersectionObserver((entries) => {
    
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
// Обработка формы
document.querySelector('.submit-btn').addEventListener('click', () => {
    alert('Спасибо за ответ! Мы сохранили ваши предпочтения.');
});

// JavaScript
function updateTimer() {
    const targetDate = new Date('2025-05-25T18:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.querySelector('.countdown-container').innerHTML = 
            '<div class="event-started">Событие началось!</div>';
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Добавляем ведущие нули
    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

    // Анимация переворота
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
        number.style.transform = 'rotateX(10deg)';
        setTimeout(() => {
            number.style.transform = 'rotateX(0deg)';
        }, 300);
    });
}

// Обновляем таймер каждую секунду
setInterval(updateTimer, 1000);
// Первый запуск
updateTimer();



// Координаты Markhal (Санкт-Петербург, Итальянская ул., 15)
const MARKHAL_COORDINATES = [44.935579, 34.084820];

ymaps.ready(init);

function init() {
const map = new ymaps.Map('wedding-map', {
  center: MARKHAL_COORDINATES,
  zoom: 17,
  controls: ['zoomControl']
});

// Кастомная метка
const placemark = new ymaps.Placemark(
  MARKHAL_COORDINATES,
  {
      hintContent: 'Ресторан МАРХАЛ',
  },
  {
      iconLayout: 'default#image',
      iconImageHref: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="%23212121" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"/></svg>',
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -40]
  }
);

map.geoObjects.add(placemark);
map.behaviors.disable('scrollZoom');
}

// Анимация (оставить без изменений)
const mapObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
      entry.target.classList.add('visible');
  }
});
}, { threshold: 0.1 });

document.querySelectorAll('#wedding-map').forEach(map => {
mapObserver.observe(map);
});



