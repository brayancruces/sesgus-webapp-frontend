import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule
    ],
    exports: [
        MatInputModule,
        MatButtonModule,
        MatCardModule
    ]
  })
  export class MaterialModule { }