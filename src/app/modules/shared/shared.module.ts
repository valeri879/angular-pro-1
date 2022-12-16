import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotPipe } from 'src/app/pipes/dot.pipe';
import { CardComponent } from 'src/app/card/card.component';
import { ConfirmationDialogComponent } from '../../dialogs/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TagsDialogComponent } from '../../dialogs/tags-dialog/tags-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DotPipe,
    CardComponent,
    ConfirmationDialogComponent,
    TagsDialogComponent
  ],
  exports: [CardComponent, DotPipe, MatDialogModule],
  imports: [ReactiveFormsModule, MatDialogModule, CommonModule]
})
export class SharedModule {}
