document.addEventListener('DOMContentLoaded', function () {
  init();
});

function init() {
  formControl();
}

// Initialize variable to store list items
const listItems = [];

function formControl() {
  // Define form and new task HTML elements
  const form = document.querySelector('#create-task-form');
  const newTask = document.querySelector('#new-task-description');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Add item to array
    addItem(newTask.value);

    // Render array into li elements
    renderList();

    // Reset form
    e.target.reset();
  });
}

function addItem(item) {
  // Add item to array
  listItems.push(item);
}

function deleteItem(item) {
  // Loop through listItems and remove element from array
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i] === item) {
      listItems.splice(i, 1);
      break;
    }
  }
}

function renderList() {
  // Find tasks ul and clear contents
  const ul = document.querySelector('#tasks');
  ul.innerHTML = '';

  // Create list items
  listItems.forEach(function (item) {
    // Create li and write task item
    const li = document.createElement('li');
    li.innerHTML = `${item}  `

    // Create delete button with interaction
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'x';
    deleteButton.addEventListener('click', (e) => {
      e.target.parentElement.remove();
      deleteItem(item);
    });

    // Append delete button to li
    li.appendChild(deleteButton);

    // Append li to ul
    ul.appendChild(li);
  });
}