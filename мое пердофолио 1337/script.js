// Получаем ссылку на кнопку по ID
const button = document.getElementById('myButton');
// Получаем ссылку на элемент для вывода сообщений
const messageBox = document.getElementById('messageBox');

// Добавляем обработчик события "click" на кнопку
button.addEventListener('click', function() {
  // Создаем сообщение для вывода
  const message = document.createElement('p');
  message.textContent = 'Привет! Кнопка была нажата.';
    
  // Добавляем сообщение в messageBox
    messageBox.appendChild(message);
});