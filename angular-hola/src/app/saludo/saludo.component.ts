import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {  
  destinos: DestinoViaje[];
  constructor() {    
    this.destinos=[];
   }

  ngOnInit(): void {
  }

  guardar(nombre:string,url:string){
    this.destinos.push(new DestinoViaje(nombre,url));
    console.log(this.destinos);
    return false;
  }

}

export class DestinoViaje{
  nombre:string;
  url:string;
  constructor(n:string, u:string){
    this.nombre=n;
    this.url=u;
  }
}
