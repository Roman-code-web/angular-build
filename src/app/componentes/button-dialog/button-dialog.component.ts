import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogProductoComponent } from '../dialog-producto/dialog-producto.component';

@Component({
  selector: 'app-button-dialog',
  templateUrl: './button-dialog.component.html',
  styleUrls: ['./button-dialog.component.css']
})
export class ButtonDialogComponent {
  constructor(private matdialog: MatDialog ){}
  openDialog(){
    this.matdialog.open(DialogProductoComponent)
  }
}
