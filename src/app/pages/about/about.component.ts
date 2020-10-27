import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { equipo } from '../../interface/equipo';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  dataInfo: equipo[] = [];

  constructor(private infoService: InfoPaginaService) { }

  ngOnInit(): void {
    this.infoService.cargaInfo().subscribe( (data: equipo[]) => {
     
      this.dataInfo = data;
    });
  }

}
