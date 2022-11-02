import { Component } from '@angular/core';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-pro-1';

  isActive: boolean = true;

  users: User[] = [
    { firstName: 'Bacho', lastName: 'Mindiashvili', gender: 'male', age: 20 },
    { firstName: 'Val', lastName: 'Do', gender: 'male', age: 29 },
    { firstName: 'Vika', lastName: 'Kharitonashvili', gender: 'famale', age: 18 },
  ];
}
