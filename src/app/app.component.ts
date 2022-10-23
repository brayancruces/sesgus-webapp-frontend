import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SesgusService } from './core/services/sesgus.service';
// import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sesgus';
  formAnalize!: FormGroup;

  isChecked = true;

  data: any = null;

  displayedColumns: any;
  columns: { columnDef: string; header: string; cell: (element: any) => string; }[];

  showSpinner = false;

  constructor(private _services: SesgusService){
    this.columns = [
      {
        columnDef: 'sentence',
        header: 'Sentence',
        cell: (element) => `${element.sentence}`,
      },
      {
        columnDef: 'sesgo',
        header: 'Sesgo',
        cell: (element) => `${element.sesgo}`,
      },
      {
        columnDef: 'sentiment',
        header: 'Sentiment',
        cell: (element) => `${element.sentiment}`,
      },
    ];
  }

  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //   this.dialog.open(DialogAnimationsExampleDialog, {
  //     width: '250px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }

  ngOnInit(){
    this.initForm()
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

  initForm(){
    this.formAnalize = new FormGroup({
      // url: new FormControl("https://www.bbva.pe/blog/sostenibilidad/la-lenta-y-triste-desaparicion-del-shihuahuaco.html")
      url: new FormControl()

    })
  }

  analize(){
    this.showSpinner = true;

    const bodyRequest = {
      type: this.isChecked == true ? "url" : "text",
      url: this.formAnalize.value.url
    }

    console.log(bodyRequest)
    this._services.getAnalize(bodyRequest).subscribe( (data) => {
      this.data = data.result
      console.log(data.result)
      this.showSpinner = false;
    }
    )


  }
}

