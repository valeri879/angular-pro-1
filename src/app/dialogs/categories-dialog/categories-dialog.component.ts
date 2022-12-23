import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {switchMap} from 'rxjs';
import {CategoriesService} from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories-dialog',
  templateUrl: './categories-dialog.component.html',
  styleUrls: ['./categories-dialog.component.css']
})
export class CategoriesDialogComponent implements OnInit {
	
	public form!: FormGroup;
	public image!: File;

  constructor(
		private _fb: FormBuilder,
		private _categoriesService: CategoriesService
	) { }

  ngOnInit(): void {
		this.form = this._fb.group({
			title: [''],
			descr: [''],
			metaKeyword: [''],
			metaDescr: [''],
			metaAuthor: [''],
			img: [''],
			isFavorite: [false]
		})
  }

	selectImage(event: any) {
		this.image = event.target.files[0];
		console.log(event.target.files[0]);
	}

	submit() {
		this._categoriesService.upload(this.image).pipe(
			switchMap((res: any) => {
				this.form.controls['img'].setValue(res['path']);
				return this._categoriesService.addCategory(this.form.value)
			})
		).subscribe(
			res => {
				console.log(res);
			}
		)
		
		/*
		this._categoriesService.addCategory(this.form.value).subscribe(
			res => {
				console.log(res);
			}
		)*/
	}

}
