import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productoIdx } from '../interface/productos_idx';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargada = true;
  

  constructor(private http: HttpClient) { 
    this.cargarProductoIdx();

  }
  cargarProductos(){
    return this.http.get("https://angular-html-1b10d.firebaseio.com/productos.json");
  }

  cargarProductoIdx(){
    return this.http.get("https://angular-html-1b10d.firebaseio.com/productos_idx.json");
  }
}
