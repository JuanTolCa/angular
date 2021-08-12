import { Component,  Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @Input() destinosOri:string[];
  title = 'app en angular hola';
  leyenda = 'nueva leyenda declarada';
  constructor(){ 
    this.destinosOri=[];
  }
  ngOnInit(): void {
  }
}
