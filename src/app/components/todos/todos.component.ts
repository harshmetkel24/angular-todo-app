import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos :Todo[];
  constructor() {
    this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")!) : [];
  }

  addTodo = (todo : Todo) => {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  deleteTodo = (todo : Todo) => {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  updateTodo = (todo : Todo) => {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index] = todo;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
