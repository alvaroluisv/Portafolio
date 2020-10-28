import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { productoIdx } from '../../interface/productos_idx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 cargando = true;

  constructor(private route: ActivatedRoute, public Productoservice: ProductosService) { }

  ngOnInit(): void {


    this.route.params.subscribe(params => {
      this.Productoservice.buscarProducto(params['termino']);
    });
    this.cargando = false;
  }

}
