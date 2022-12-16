import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-tags-dialog',
  templateUrl: './tags-dialog.component.html',
  styleUrls: ['./tags-dialog.component.css']
})
export class TagsDialogComponent implements OnInit {
  tagControl: FormControl = new FormControl('', [Validators.required]);

  constructor(
    private _tagsService: TagsService,
    public matDialogRef: MatDialogRef<TagsDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  submit() {
		console.log(this.data);
		/*
    this._tagsService.addTag({ title: this.tagControl.value }).subscribe(
      () => {
        this.matDialogRef.close(true);
      },
      err => {
        this.matDialogRef.close();
      }
    );*/
  }
}
