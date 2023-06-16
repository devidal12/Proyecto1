import { Component } from '@angular/core';
import { clientes } from './datos/usuario-ejemplo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-banco';
  miUsuario: any = clientes [1]
}
