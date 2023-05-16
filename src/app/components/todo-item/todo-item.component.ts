import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo : Todo;
  @Output() onDelete : EventEmitter<string> = new EventEmitter();
  @Output() toggleDone : EventEmitter<string> = new EventEmitter();

  constructor() { 
    this.todo = {
      _id: '',
      sno: 0,
      title: '',
      desc: '',
      active: false
    }
  }
  handleDelete = (todo : Todo) => {
    this.onDelete.emit(todo._id);
    console.log("Delete");
  }

  handleDone = (todo : Todo) => {
    todo.active = !todo.active;
    this.toggleDone.emit(todo._id);
    console.log("Done");
  }
}
