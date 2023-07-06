import { Component } from '@angular/core';
import { clientes } from './datos/usuario-ejemplo';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-banco';
  miUsuario: any = clientes [1]

  constructor(private snackBar: MatSnackBar){}

  openSnackBar(message: string, action: string){
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  cerrarSesion(){
  sessionStorage.removeItem("sesion")
  this.openSnackBar("Se ha cerrado sesión", "vale")
  
  }


}
