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
    fetch('http://localhost:5000/todos').then(res => res.json()).then(data => {
      this.todos = data;
  });
  }

  addTodo = (todo : Todo) => {
    console.log(todo);
    this.todos.push(todo);
    fetch('http://localhost:5000/todos/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  deleteTodo = (_id : string) => {
    console.log(_id);
    fetch('/'+_id, {
      method: 'DELETE',
    }).then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      fetch('/').then(res => res.json()).then(data => {
        this.todos = data;
    });
    }
    );
  }

  updateTodo = (_id : string) => {
    console.log(_id);
    fetch('/toggle/'+_id, {
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
