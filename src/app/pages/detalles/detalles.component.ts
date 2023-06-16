import { Component } from '@angular/core';
import { transferenciasEnviadas } from 'src/app/datos/transferencia2-ejemplo';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  transferencias: any[] = transferenciasEnviadas;

}
