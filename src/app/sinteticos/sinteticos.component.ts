import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { sinteticoGas } from '../model/sinteticos2.model';

@Component({
  selector: 'sinteticos',
  templateUrl: './sinteticos.component.html',
  styleUrls: ['./sinteticos.component.css']
})
export class SinteticosComponent implements OnInit {

  private canchaACrear:sinteticoGas;

  constructor(private http:Http) {
    this.canchaACrear = new sinteticoGas();    
   }

  ngOnInit() {

  }

  public guardarAlquiler()
  {
    this.http.post(
      "http://marchagasangular.webcindario.com/conexion.php",
      this.canchaACrear
    ).subscribe((response)=>{
      let respuesta = response.json();
      if(respuesta.resultado == 1){
        alert('El alquiler guardado con éxito');
      }      
      else{
        alert("Hubo un error al guardar el alquiler");
      }
    });

  }
}
