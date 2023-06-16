import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { FormsModule } from '@angular/forms';
import { ComponentesModule } from '../componentes/componentes.module';
import { SaldoComponent } from './saldo/saldo.component';
import { NuevaTransferenciaComponent } from './nueva-transferencia/nueva-transferencia.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DetallesComponent } from './detalles/detalles.component';

@NgModule({
  declarations: [DashboardComponent, TransferenciasRecibidasComponent, TransferenciasEnviadasComponent, SaldoComponent, NuevaTransferenciaComponent, PerfilComponent, DetallesComponent],
  imports: [CommonModule, PagesRoutingModule, FormsModule, ComponentesModule],
})
export class PagesModule {}
