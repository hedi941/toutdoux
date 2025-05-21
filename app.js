const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
render();

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    todos.push(text);
    input.value = '';
    update();
  }
});

function render() {
  list.innerHTML = '';
  todos.forEach((todo, i) => {
    const li = document.createElement('li');
    li.innerHTML = `${todo} <button onclick="remove(${i})">&times;</button>`;
    list.appendChild(li);
  });
}

function remove(i) {
  todos.splice(i, 1);
  update();
}

function update() {
  localStorage.setItem('todos', JSON.stringify(todos));
  render();
}