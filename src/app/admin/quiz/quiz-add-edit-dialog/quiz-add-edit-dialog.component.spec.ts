import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAddEditDialogComponent } from './quiz-add-edit-dialog.component';

describe('QuizAddEditDialogComponent', () => {
  let component: QuizAddEditDialogComponent;
  let fixture: ComponentFixture<QuizAddEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizAddEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizAddEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
