// Массив с путями к изображениям и описаниями
const images = [
  { src: 'images1.jpg', description: 'Mirage' },
  { src: 'images2.jpg', description: 'AK-47' },
  { src: 'images3.jpg', description: 'M4A1-s' },
  { src: 'images4.jpg', description: 'Террорист' },
  { src: 'images5.jpg', description: 'Спецназ' }
];

let currentIndex = 0;

const currentImage = document.getElementById('currentImage');
const imageDescription = document.getElementById('imageDescription');
const slideIndicator = document.getElementById('slideIndicator');

// Функция для обновления слайдера
function updateSlider() {
  // Устанавливаем новое изображение
  currentImage.src = images[currentIndex].src;

  // Устанавливаем описание
  imageDescription.textContent = images[currentIndex].description;

  // Обновляем индикатор слайда
  slideIndicator.textContent = `${currentIndex + 1} из ${images.length}`;

  // Добавляем анимацию появления
  currentImage.classList.add('fadeIn');

  // Убираем анимацию после завершения
  setTimeout(() => {
    currentImage.classList.remove('fadeIn');
  }, 500); // Время анимации (0.5s)
}

// Обработчик кнопки "Назад"
document.getElementById('prev').addEventListener('click', () => {
  // Переключаем на предыдущее изображение
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
  updateSlider();
});

// Обработчик кнопки "Вперёд"
document.getElementById('next').addEventListener('click', () => {
  // Переключаем на следующее изображение
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
  updateSlider();
});
// Имитация авторизации (например, после входа пользователя)
function loginUser(username) {
  userLogin.textContent = username; // Устанавливаем имя пользователя
}

// Имитация выхода пользователя
document.getElementById('logout').addEventListener('click', () => {
  userLogin.textContent = 'Гость'; // Устанавливаем статус "Гость"
});
// Инициализация слайдера
updateSlider();