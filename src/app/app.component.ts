import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  show: boolean[] = [];

  data: { title: string, descr: string }[] = [
    { title: 'title 1', descr: 'descr 1' },
    { title: 'title 2', descr: 'descr 2' },
    { title: 'title 3', descr: 'descr 3' },
    { title: 'title 4', descr: 'descr 4' },
  ]

  constructor() {}

  public toggle(i: number): void {
    for (let j = 0; j < this.show.length; j++) {
      if (i != j) {
        this.show[j] = false;
      }
    }
    this.show[i] = !this.show[i];
  }
}
