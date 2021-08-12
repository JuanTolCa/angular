import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {  
  destinos: string[];
  constructor() {    
    this.destinos=['Pais1','Pais2','Destino3'];
   }

  ngOnInit(): void {
  }

}
