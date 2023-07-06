import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { transferenciasEnviadas } from 'src/app/datos/transferencia2-ejemplo';
import { TransferenciaService } from 'src/app/services/transferencias/transferencia.service';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  transferencias: any = null;
  
  constructor(private route: ActivatedRoute, private transferenciaService: TransferenciaService){}

  ngOnInit(): void {
    let transferenciaIdString = this.route.snapshot.paramMap.get('id');
    let transferenciaId;
    if(transferenciaIdString){
      transferenciaId = parseInt(transferenciaIdString);
      this.transferenciaService.obtenerTransferenciaPorId(transferenciaId).subscribe((
        transferencia) => {
          this.transferencias = transferencia
        }
      )
    }
  }


}
