const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const uList = document.querySelector('#ingredients');

ingredients.forEach(item => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));
  li.classList.add('item');
  
  uList.appendChild(li);
});