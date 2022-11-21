import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angular-pro-1';

  form!: FormGroup;

/*   email: FormControl = new FormControl('', [Validators.required]);
  password: FormControl = new FormControl(); */

  constructor(
    private _fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.form = this._fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rePassword: ['', [Validators.required]],
      address: this._fb.array([])
    });
  }

  get address(): FormArray {
    return this.form.controls['address'] as FormArray
  }

  addAddress() {
    const address = this._fb.group({
      country: ['', [Validators.required]],
      city: ['', [Validators.required]]
    });

    this.address.push(address);

    console.log('form array values', this.address.value)
  }

  submit() {
    console.log('form', this.form.controls);
/*     console.log(`email`, this.email.invalid);
    console.log(`password`, this.password.invalid); */
  }
}
