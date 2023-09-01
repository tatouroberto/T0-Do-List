import './style.css';
import reload from './assets/reload.svg';
import entericon from './assets/EnterIcon.svg';
import { data } from './dataArray.js';
import Trash from './assets/TrashBasket.svg';

const loadImg = document.querySelector('.reload');
const entericons = document.querySelector('.enter_icon');
loadImg.src = reload;
entericons.src = entericon;
class TodoList {
  constructor() {
    this.todoList = document.getElementById('todo_list');
    this.todoDescription = document.getElementById('description');
    this.clearAllButton = document.getElementById('clear_all_button');
    this.reloadButton = document.getElementById('reload');
    this.dataArray = data;

    this.reload();
  }

      displayItems = () => {
        this.clearList();
        for (let i = 0; i < this.dataArray.length; i += 1) {
          const todo = this.dataArray[i];
          const todoItem = document.createElement('li');
          todoItem.classList.add('todo_item');

          const check = document.createElement('input');
          check.type = 'checkbox';
          check.id = this.dataArray[i].index;
          check.classList.add('checkbox');
          if (todo.completed === true) {
            check.checked = true;
          }
          todoItem.appendChild(check);

          const todoItemDescription = document.createElement('span');
          todoItemDescription.classList.add('description');
          if (todo.completed === true) {
            todoItemDescription.classList.add('completed');
          }
          todoItemDescription.textContent = `${todo.description}`;
          todoItem.appendChild(todoItemDescription);

          const trashIcon = document.createElement('img');
          trashIcon.src = Trash;
          trashIcon.classList.add('trash');
          todoItem.appendChild(trashIcon);
          trashIcon.id = this.dataArray[i].index;

          this.todoList.appendChild(todoItem);
        }
      }

      clearList = () => {
        this.todoList.innerHTML = '';
      }

      reload = () => {
        this.reloadButton.addEventListener('click', () => {
          this.clearList();
          this.displayItems();
        });
      }
}
const todo = new TodoList();
todo.reload();