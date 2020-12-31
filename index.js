const list = document.querySelector('.list');
const input = document.getElementById('search');
const clearButton = document.getElementById('clearButton');

let arr = [];

if (list) {
  for (let i = 0; i < list.children.length; i++) {
    const item = list.children[i].attributes[0].textContent;
    arr.push(item.toLowerCase())
  }
}

const findAndFilterItems = (query, arr) => {
  const result = arr.filter(el => {

    if (el.toLowerCase().indexOf(query.toLowerCase()) !== -1) return el;
    else return false;

  });
  
  for (let i = 0; i < list.children.length; i++) {

    const item = list.children[i];
    const show = result.includes(item.textContent.toLowerCase());

    if (show) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }

  }
}

const clearFilter = () => {
  for (let i = 0; i < list.children.length; i++) {
    const item = list.children[i];

    input.value = '';
    item.classList.remove('hidden');
  } 
}

if(input) {
  input.addEventListener('keyup', () => {
    findAndFilterItems(input.value, arr);
  });
}

if (clearButton) {
  clearButton.addEventListener('click', () => {
    clearFilter();
  })
}