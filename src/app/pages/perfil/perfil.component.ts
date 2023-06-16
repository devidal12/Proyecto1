import { Component } from '@angular/core';
import { clientes } from 'src/app/datos/usuario-ejemplo';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
    miUsuario: any = clientes [1]
}
