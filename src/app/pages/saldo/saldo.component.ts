import { Component } from '@angular/core';
import { clientes } from 'src/app/datos/usuario-ejemplo';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent {
  usuario: any = clientes[1]
}
