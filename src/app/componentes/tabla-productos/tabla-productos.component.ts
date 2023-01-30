import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

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
 
}
