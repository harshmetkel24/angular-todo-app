import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this is title';
  constructor() {
    // setTimeout(() => {
    //   this.title = 'new title'
    // }, 3000);
  }
}
