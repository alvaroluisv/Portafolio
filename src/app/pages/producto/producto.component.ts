import { Component, OnInit } from '@angular/core';
import { productoIdx } from '../../interface/productos_idx';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos: productoIdx[] = [];

  constructor(private Proservice: ProductosService) { 

    this.Proservice.cargarProductoIdx().subscribe((data: productoIdx[]) => {
        console.log(data);
    });

  }

  ngOnInit(): void {
  }

}
