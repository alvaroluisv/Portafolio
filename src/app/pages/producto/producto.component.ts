import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { IProducto } from '../../interface/productos';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  producto: IProducto;
  id: string;

  constructor(private route: ActivatedRoute, private product: ProductosService ) { 


  }

  ngOnInit(): void {
    this.route.params.subscribe( parametros => {

      this.product.getProducto(parametros.id).subscribe((data: IProducto) => {
        this.id = parametros.id;
          this.producto = data;
      });

    });
  }

}
