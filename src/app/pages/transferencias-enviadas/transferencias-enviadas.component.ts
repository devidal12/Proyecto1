import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencias/transferencia.service';



@Component({
  selector: 'app-transferencias-enviadas',
  templateUrl: './transferencias-enviadas.component.html',
  styleUrls: ['./transferencias-enviadas.component.css']
})
export class TransferenciasEnviadasComponent implements OnInit{

  transferencias: any[] = [];

  cliente : any;

  constructor(private transferenciaService : TransferenciaService, private clienteService: ClienteService){
  }

  ngOnInit(){
      this.cliente = this.clienteService.leerSesion();
      if(this.cliente != null) {
        this.cargarTransferenciasPorIdOrdenante()
      } else { console.log("No has iniciado sesión")}
  }

  cargarTransferencias(){
    this.transferenciaService.obtenerTransferencias().subscribe((transferencias: any) => {
      console.log({transferencias});
      this.transferencias = transferencias;
    });
  }
  cargarTransferenciasPorIdOrdenante(){
    this.transferenciaService.obtenerTransferenciasPorIdOrdenante(this.cliente.id).subscribe((transferencias: any) => {
      console.log({transferencias});
      this.transferencias = transferencias;
    });
  }
}
