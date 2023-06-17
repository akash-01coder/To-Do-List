const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function (event) {
  event.preventDefault(); 
  const task = input.value.trim(); 

  if (task !== '') {
    const li = document.createElement('li');
    li.innerText = task;
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-btn');
    li.appendChild(deleteButton);
    todoList.insertBefore(li,todoList.firstChild);
    input.value = '';
  }
});

todoList.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-btn')) {
    const listItem = event.target.parentElement;
    todoList.removeChild(listItem);
  }
});
