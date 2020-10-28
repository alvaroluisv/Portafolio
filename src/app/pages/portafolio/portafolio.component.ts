import { Component, OnInit } from '@angular/core';
import { productoIdx } from '../../interface/productos_idx';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  cargando = true;

  constructor(public Proservice: ProductosService) { 

    this.Proservice.cargarProductoIdx();
      this.cargando = false;

  }

  ngOnInit(): void {
  }

}
