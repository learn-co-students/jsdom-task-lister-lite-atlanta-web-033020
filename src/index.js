document.addEventListener("DOMContentLoaded", () => {
  init();
});

let listItems = [];

function init() {
  submitForm();
}

function submitForm() {
  form = document.querySelector('#create-task-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    listItems.push(document.querySelector('#new-task-description').value);
    renderListItems();

    e.target.reset();
  });
}

function renderListItems() {
  const ul = document.querySelector('#tasks');
  ul.innerHTML = '';
  listItems.forEach(function (item) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.addEventListener('click', function (e) {
      deleteListItem(item);
      e.target.parentElement.remove();
    });
    button.innerHTML = 'x';
    li.innerHTML = `${item}  `;
    li.appendChild(button);
    ul.appendChild(li);
  })
}

function deleteListItem(item) {
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i] === item) {
      listItems.splice(i, 1);
    }
  }
}