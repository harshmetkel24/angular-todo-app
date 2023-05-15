import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo : Todo;
  @Output() onDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() toggleDone : EventEmitter<Todo> = new EventEmitter();

  constructor() { 
    this.todo = {
      sno: 0,
      title: '',
      desc: '',
      active: false
    }
  }
  handleDelete = (todo : Todo) => {
    this.onDelete.emit(todo);
    console.log("Delete");
  }

  handleDone = (todo : Todo) => {
    todo.active = !todo.active;
    this.toggleDone.emit(todo);
    console.log("Done");
  }
}
