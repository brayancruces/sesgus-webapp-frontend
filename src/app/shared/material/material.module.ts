import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';

// import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatTableModule,
      MatSlideToggleModule
    ],
    exports: [
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatSlideToggleModule
    ]
  })
  export class MaterialModule { }