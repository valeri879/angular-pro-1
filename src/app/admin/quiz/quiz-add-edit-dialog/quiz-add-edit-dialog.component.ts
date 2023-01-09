import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-quiz-add-edit-dialog',
  templateUrl: './quiz-add-edit-dialog.component.html',
  styleUrls: ['./quiz-add-edit-dialog.component.css']
})
export class QuizAddEditDialogComponent implements OnInit {

	form!: FormGroup;

  constructor(
		private _fb: FormBuilder
	) { }

  ngOnInit(): void {
		this.form = this._fb.group({
			question: [''],
			answers: this._fb.array([])
		});

		console.log(this.form)
  }

	get answers(): FormArray {
		return this.form.controls['answers'] as FormArray
	}

	addAnswer() {
		const group = this._fb.group({
			answer: [''],
			isCorrect: [false]
		});
		
		this.answers.push(group);

		console.log(this.form.value);

	}


	delete(i: number) {
		this.answers.removeAt(i);
	}

}
