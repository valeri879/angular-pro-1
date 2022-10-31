import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

	@Input() data!: any;
	@Output() dataFromChild = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
		console.log(this.data)
  }
	
	sendData() {
		console.log('data has been sent')
		this.dataFromChild.emit('informacia shvili komponentidan');
	}

}
