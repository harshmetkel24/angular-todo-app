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
    this.todos = [];
    fetch('https://todo-app-backend-2jah.onrender.com/todos').then(res => res.json()).then(data => {
      console.log(data);
      this.todos = data;
  });
  }

  addTodo = (todo : Todo) => {
    console.log(todo);
    this.todos.push(todo);
    fetch('https://todo-app-backend-2jah.onrender.com/todos/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
  }

  deleteTodo = (_id : string) => {
    console.log(_id);
    fetch('https://todo-app-backend-2jah.onrender.com/todos/delete/'+_id, {
      method: 'DELETE',
    }).then(response => response.json())
    .then(data => {
      // update todos array
      console.log('Success:', data);
    }
    ).catch((error) => {
      console.error('Error:', error);
    });

  }

  updateTodo = (_id : string) => {
    console.log(_id);
    fetch('https://todo-app-backend-2jah.onrender.com/toggle/'+_id, {
      method: 'POST',
    }).then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      fetch('/').then(res => res.json()).then(data => {
        this.todos = data;
    });
    }
    );
  }
}
