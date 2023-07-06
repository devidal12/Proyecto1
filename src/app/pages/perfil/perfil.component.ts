import { Component } from '@angular/core';
import { clientes } from 'src/app/datos/usuario-ejemplo';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import {MatSnackBar} from '@angular/material/snack-bar'


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  
  cliente: any = null;
  
  constructor(private clienteService: ClienteService, private snackBar: MatSnackBar){
  }

  ngOnInit():void {

    this.cliente = this.clienteService.leerSesion();
    
  }

    miUsuario: any = clientes [1]


    openSnackBar(message: string, action: string){
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

    guardarCliente(){
      this.clienteService.guardar(this.cliente).subscribe((clienteGuardado => {
        this.openSnackBar("Se ha cambiado la contraseña", "vale")
      }
      ))
    }
}
