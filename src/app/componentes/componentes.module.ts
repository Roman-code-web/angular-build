import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import { MaterialModule } from '../material.module';
import { ButtonDialogComponent } from './button-dialog/button-dialog.component';
import { DialogProductoComponent } from './dialog-producto/dialog-producto.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavigationComponent,
    TablaProductosComponent,
    ButtonDialogComponent,
    DialogProductoComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    NavigationComponent,
    TablaProductosComponent,
    ButtonDialogComponent,
    DialogProductoComponent
  ]
})
export class ComponentesModule { }
