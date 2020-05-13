// make sure page is loaded first
document.addEventListener("DOMContentLoaded", () => {
  submit()
  make_dd()
  sortListener();
});

function submit(){
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', function (e){
    e.preventDefault();
    // create new list element
    let list = createList(e);
    // create a button for the new list element (for delete later)
    createBtn(list);
    // slap list onto DOM
    let parent = document.querySelector('#tasks');
    parent.appendChild(list);
    // clear input field after submit
    e.target.reset();
  })
}

function delete_task(e){
  e.target.parentElement.remove();
}

function createBtn(list){
  const btn = document.createElement('button');
  btn.innerText = "X";
  btn.addEventListener('click', delete_task);
  list.appendChild(btn);
}

function createList(e){
// capturing form values
  let value = e.target.querySelector('#new-task-description').value;
  let priority = e.target.querySelector('#priority').value;
  // creating new html elements for our values
  let list = document.createElement('li')
  list.innerText = value;
  // list.class = priority;
  // so we don't have to write any CSS, we style this way:
  if (priority === "High") {
    list.style = "color: red";
    list.class = "3";
  } else if (priority === "Med") {
    list.class = "2";
    list.style = "color: yellow";
  } else if (priority === "Low") {
    list.class = "1";
    list.style = "color: green";
  }
  return list;
}// create a dd menu in html

function make_dd(){
  // create a new menu and store in variavle named select
  let select = document.createElement('select');
  // set id, important because used to set class above in submit.
  select.id = "priority";
  let option_1 = document.createElement('option');
    option_1.value = "High";
    option_1.innerText = "High";
  let option_2 = document.createElement('option');
    option_2.value = "Med";
    option_2.innerText = "Med";
  let option_3 = document.createElement('option');
    option_3.value = "Low";
    option_3.innerText = "Low";
  select.append(option_1, option_2, option_3);
  let form = document.querySelector('#create-task-form');
  form.append(select);
}

function rebuildList(listAry){
  // remove unsorted
  document.querySelector('#tasks').remove()
  // repopulate with sorted
  let ul = document.createElement('ul')
  ul.id = 'tasks';
  listAry.forEach(li => {
    ul.appendChild(li);
  })
  document.querySelector('#list').appendChild(ul);
}

function sortListener(){
  // need a click listener for sort button
  document.querySelector('#sort-asc').addEventListener('click', sortAsc);
  document.querySelector('#sort-desc').addEventListener('click', sortDesc);
}

function sortAsc(){
  let listAry = getList();
  listAry.sort(function(a,b){
    return parseInt(a.class) - parseInt(b.class);
  }) 
  rebuildList(listAry);
}

function sortDesc(){
  let listAry = getList();
  listAry.sort(function(a,b){
    return parseInt(a.class) - parseInt(b.class);
  }) 
  listAry.reverse();
  rebuildList(listAry);
}

function getList(){
  let listItems = document.querySelector('#tasks').children;
  let listAry = [];
  listAry = Array.from(listItems);
  return listAry;
}