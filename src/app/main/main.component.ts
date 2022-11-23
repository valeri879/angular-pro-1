import { Component, OnInit } from '@angular/core';
import { Main, MainService } from '../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	public mainPageData!: Main;

  constructor(
		private _mainService: MainService
  ) { }

  ngOnInit(): void {
		this._mainService.getMain().subscribe(
			res => {
				this.mainPageData = res;
				console.log(res);
			},
			error => {
				console.log(error);
			}
		)
  }

}
