import { Component, OnInit } from '@angular/core';

interface Card {
	title: string;
	descr: string;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

	someText!: string;

	data: Card = {
		title: 'ჩვენი სათაური',
		descr: 'ჩვენი აღწერა'
	}

  constructor() { }

  ngOnInit(): void {
  }
	
	getDataFromChild($event: string) {
		console.log($event);
		this.someText = $event;
	}

}
