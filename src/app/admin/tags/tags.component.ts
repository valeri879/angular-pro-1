import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {TagsService} from 'src/app/services/tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

	tags$!: Observable<any[]>;

	tagControl: FormControl = new FormControl('', [Validators.required])

  constructor(
		private _tagsService: TagsService
	) { }

  ngOnInit(): void {
		this._getTags();
  }

	private _getTags() {
		this.tags$ = this._tagsService.getAllTag();
	}

	addTag() {
		const data = {
			title: this.tagControl.value 
		}
		this._tagsService.addTag(data).subscribe(
			res => {
				this._getTags();
				console.log(res);
			},
			err => {
				console.log(err);
			}
		)
	}

	delete(tagId: string) {
		this._tagsService.deleteTag(tagId).subscribe(
			() => {
				this._getTags();
			},
			err => {
				console.log(err)
			}
		)
	}
}
