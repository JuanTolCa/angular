import { Component,  Input, OnInit } from '@angular/core';
declare var require: any;
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
    var fb  = require("./../../node_modules/firebird");
    //sys = require("sys");
    var con = fb.createConnection();
    con.connectSync ('srvddb/gds_db/ProconDev.FDB', 'SYSDBA', 'masterkey', '');

    var resfb = con.querySync ("select * from users");
    var rows = resfb.fetchSync ("all", true);
    con.commitSync ();
    //console.log (sys.inspect (rows));
  }
  ngOnInit(): void {
  }
}
