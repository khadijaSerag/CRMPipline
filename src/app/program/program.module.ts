import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramRoutingModule } from './program-routing.module';
import { ProgramComponent } from './program.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from 'src/material.module';

@NgModule({
  declarations: [ProgramComponent],
  imports: [
    CommonModule,
    ProgramRoutingModule,
    DragDropModule,
    MatNativeDateModule,
    MaterialExampleModule,
  ],
})
export class ProgramModule {}
