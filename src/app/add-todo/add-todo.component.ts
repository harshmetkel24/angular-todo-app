import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  sno : number;
  title : string;
  desc : string;

  constructor() {
    this.sno = 0;
    this.title = "";
    this.desc = "";
   }

   @Output() addTodo : EventEmitter<Todo> = new EventEmitter();
   

  onSubmit = () => {
    console.log("form submitted");
    const todo = {
      sno : this.sno,
      title : this.title,
      desc : this.desc,
      active : true
    }
    this.addTodo.emit(todo);
  }

}
