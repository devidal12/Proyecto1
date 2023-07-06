import { Component } from '@angular/core';
import { clientes } from 'src/app/datos/usuario-ejemplo';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent {
  usuario: any = clientes[1]


  cliente: any = null;

  constructor(private clienteService: ClienteService){
  }

  ngOnInit():void {

    this.cliente = this.clienteService.leerSesion();
  }
}
