const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listContainer = document.querySelector(".gallery");
console.log("Container UL: ", listContainer)
let listItemsMarkUp = "";

images.forEach(image => {
  const listitem = `<li class="galleryLi" >
      <img class="galleryLiImage" src="${image.url}" alt="${image.alt}"/>
    </li>`;

  listItemsMarkUp += listitem
 });

 // 5 - Insert list items into listContainer with insertAdjacentHTML() "afterbegin"
 
 listContainer.insertAdjacentHTML("afterbegin", listItemsMarkUp);

