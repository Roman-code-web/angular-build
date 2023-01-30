import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductosService } from 'src/app/servicios/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {
  listaProductos:any=[];

  constructor(private productoservice:ProductosService){}

  ngOnInit(): void {
    this.productoservice.obtenerProducto().subscribe(
      res=>{
        this.listaProductos=res;
      },
      error=>{
        console.log(error);
      }
    )
  }
  eliminarProducto(producto:Producto){
    Swal.fire({
      title: 'Estas Seguro de Eliminar este Producto?',
      text: "no podrá revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Producto Eliminado',
        })
        const res=this.productoservice.eliminarProducto(producto);
      }
    })
  }
}
