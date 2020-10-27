import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInfoPagina } from '../interface/infoPagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: IInfoPagina = {};
  cargada = false;
  

  constructor(private http: HttpClient) {

    this.http.get('assets/Data/data-pagina.json').subscribe( (resp: IInfoPagina) => {
      this.cargada = true;
        this.info = resp;
    });

   }

   cargaInfo(){
     return this.http.get("https://angular-html-1b10d.firebaseio.com/equipo.json");
   }
}
