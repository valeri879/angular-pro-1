import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotPipe } from 'src/app/pipes/dot.pipe';
import { CardComponent } from 'src/app/card/card.component';



@NgModule({
  declarations: [
    DotPipe,
    CardComponent
  ],
  exports: [
    CardComponent,
    DotPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
