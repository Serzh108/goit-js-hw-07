'use strict';
// Задание 1
// В HTML есть список категорий ul#categories.

{/* <ul id="categories">
  <li class="item">
    <h2>Животные</h2>

    <ul>
      <li>Кот</li>
      <li>Хомяк</li>
      <li>Лошадь</li>
      <li>Попугай</li>
    </ul>
  </li>
  <li class="item">
    <h2>Продукты</h2>

    <ul>
      <li>Хлеб</li>
      <li>Петрушка</li>
      <li>Творог</li>
    </ul>
  </li>
  <li class="item">
    <h2>Технологии</h2>

    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node</li>
    </ul>
  </li>
</ul> */}
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//  Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст
//  заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const listAnimals = document.querySelector('#categories');

const itemAnimals = listAnimals.querySelectorAll('.item');
console.log(`В списке ${itemAnimals.length} категории`);

itemAnimals.forEach(item => {
  const itemTitle = item.querySelector('h2');
  console.log(`Категория:  ${itemTitle.textContent}`);
  const innerList = item.querySelectorAll('li');
  console.log(`Количество элементов: ${innerList.length}`);
});