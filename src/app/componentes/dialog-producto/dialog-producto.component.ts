import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-dialog-producto',
  templateUrl: './dialog-producto.component.html',
  styleUrls: ['./dialog-producto.component.css']
})
export class DialogProductoComponent {
  formGuardar!:FormGroup;

  constructor(private frmb :FormBuilder , private productoservice:ProductosService){
    this.formGuardar= this.frmb.group({
      codPro:['',
      [Validators.required]
      ],
      descripcion:['',
      [Validators.required]
      ],
      cantidad:['',
      [Validators.required]
      ],
      precio:['',
      [Validators.required]
      ],
      
    })
  }
  //guardar
async guardarProducto(){
  try {
    const res=this.productoservice.agregarProducto(this.formGuardar.value);
  } catch (error) {
    console.log(error);
  }
}
  //Validacion de formulario
  validacion(name: string) {
    return this.formGuardar.get(name)?.errors && (this.formGuardar.get(name)?.touched || this.formGuardar.get(name)?.dirty);
  }
}
