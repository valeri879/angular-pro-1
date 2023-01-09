import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {QuizAddEditDialogComponent} from './quiz-add-edit-dialog/quiz-add-edit-dialog.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

	form!: FormGroup;

  constructor(
		private _fb: FormBuilder,
		private _matDialog: MatDialog
	) { }

  ngOnInit(): void {
		this.form = this._fb.group({
			title: [''],
			smallDescr: [''],
			descr: ['']
		})

		this.addAnswersDialog();
  }

	addAnswersDialog() {
		const dialog = this._matDialog.open(QuizAddEditDialogComponent, {
			width: '440px'
		})
	}

}
