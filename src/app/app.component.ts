import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-pro-1';

  isActive: boolean = true;

  logValue(el: HTMLInputElement) {
  }

  toggle() {
    this.isActive = !this.isActive;
  }
  
}
