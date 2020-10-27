import { Component, OnInit } from '@angular/core';
import { productoIdx } from '../../interface/productos_idx';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  productos: productoIdx[] = [];
  cargando = true;

  constructor(private Proservice: ProductosService) { 

    setTimeout(() => {
      this.cargando = false;
    },1000);
    this.Proservice.cargarProductoIdx().subscribe((data: productoIdx[]) => {
      this.productos = data;
      
  });
  }

  ngOnInit(): void {
  }

}
