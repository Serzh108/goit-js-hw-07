'use strict';
// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество 
// элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

/* <div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div> */

/* <div id="boxes"></div> */
const input = document.querySelector('input[type="number"]');
const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

destroy.addEventListener('click', handlerDestroy);
render.addEventListener('click', handlerRender);

function createBoxes(amount) {
  let itemDiv = [];
  for (let i = 0; i < amount; i++) {
    const currentDiv =  document.createElement('div');
    currentDiv.innerHTML = i + 1;
    currentDiv.style.width = (30 + 10 * i)+'px';
    currentDiv.style.height = (30 + 10 * i)+'px';
    currentDiv.style.backgroundColor = randomColor();
    itemDiv.push(currentDiv);
  }
  boxes.append(...itemDiv);
}

function handlerRender() {
  createBoxes(input.value);
  input.value = '';
}

function handlerDestroy() {
  boxes.innerHTML = '';
  input.value = '';
}

function randomColor() {
  const color = () => Math.floor((Math.random()) * 255 + 1); 
  return `rgb(${color()}, ${color()}, ${color()})`
} 
