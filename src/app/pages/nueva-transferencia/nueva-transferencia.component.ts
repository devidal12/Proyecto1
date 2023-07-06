import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencias/transferencia.service';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-nueva-transferencia',
  templateUrl: './nueva-transferencia.component.html',
  styleUrls: ['./nueva-transferencia.component.css']
})
export class NuevaTransferenciaComponent implements OnInit {

  constructor(private transferenciaService: TransferenciaService, private clienteService: ClienteService, private snackBar: MatSnackBar){}
  
  ordenante: any = null;
  

  ngOnInit(): void {
    this.ordenante = this.clienteService.leerSesion()
  }

  nuevaTransferencia: any = {
    ordenante: {
      id: null,
    },
    beneficiario: {
    id: null,
    },
    concepto: '',
    importe: 0
  };

  openSnackBar(message: string, action: string){
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  enviarTransferencia(){
    if(this.ordenante){
      this.nuevaTransferencia.ordenante.id = this.ordenante.id
      this.transferenciaService.guardar(this.nuevaTransferencia).subscribe(
        (transferenciaGuardada) => {
          console.log({transferenciaGuardada})
          this.openSnackBar("Se ha realizado una transferencia", "vale")
        },
        (error)=> {
          this.openSnackBar("Ha ocurrido un error", "vale")
        })
    }
  }

}
