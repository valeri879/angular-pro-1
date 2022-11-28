import { Component, OnDestroy, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { Main, MainService } from '../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

	public data$!: Observable<Main>;
	
  constructor(
		private _mainService: MainService
  ) { }

  ngOnInit(): void {
		this.data$ = this._mainService.getMain();
  }

	ngOnDestroy(): void {
	}

}
