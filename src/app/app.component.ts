import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { sinteticoGas } from './model/sinteticos2.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  alquilerList:Array<sinteticoGas> = new Array<sinteticoGas>();

  constructor(private http:Http){

  }

  listarAlquiler(){
    this.http
    .get("http://marchagasangular.webcindario.com/conexion.php")
    .subscribe((response)=>{
      this.alquilerList = response.json();
      console.log(this.alquilerList);
      let Alquileres = document.getElementById("Alquileres");
    });            
  }

}
