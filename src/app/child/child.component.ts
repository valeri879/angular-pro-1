import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
