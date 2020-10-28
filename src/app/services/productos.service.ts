import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productoIdx } from '../interface/productos_idx';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargada = true;
  productos: productoIdx[] = [];
  productosFiltrado: productoIdx[] = [];
  

  constructor(private http: HttpClient) { 
    this.cargarProductoIdx();

  }
  getProducto(id: string){
   return  this.http.get(`https://angular-html-1b10d.firebaseio.com/productos/${id}.json`);
  }

  cargarProductoIdx(){
    return new Promise( ( resolve, rejects) => {
      this.http.get("https://angular-html-1b10d.firebaseio.com/productos_idx.json").subscribe((data: productoIdx[]) => {
        this.productos = data;
        this.cargada = false;
        resolve();
      });
    });
  }

  buscarProducto(termino: string){
    if( this.productos.length === 0 ){
      //cargar Producto
      this.cargarProductoIdx().then( () => {
        //ejecutar despues de tener los productos
        //Aplicar filtro
          this.filtrarProductos(termino);
      });
    }else {
      // aplicar filtro
        this.filtrarProductos(termino);
    }
      // this.productosFiltrado = this.productos.filter( producto => {
      //   return true;
      // });
  }

  filtrarProductos( termino: string){
      
      this.productosFiltrado = [];

      termino = termino.toLowerCase();

      this.productos.forEach( prod => {

        const tituloLower = prod.titulo.toLowerCase();

        if( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0){
          this.productosFiltrado.push(prod);
        }
      });
  }

  
}

