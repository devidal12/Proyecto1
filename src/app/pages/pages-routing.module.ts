import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { SaldoComponent } from './saldo/saldo.component';
import { NuevaTransferenciaComponent } from './nueva-transferencia/nueva-transferencia.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'transferencias-recibidas',
    component: TransferenciasRecibidasComponent,
  },
  {
    path: 'transferencias-enviadas',
    component: TransferenciasEnviadasComponent,
  },
  {
    path: 'saldo',
    component: SaldoComponent,
  },
  {
    path: 'nueva-transferencia',
    component: NuevaTransferenciaComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: 'detalles/:id',
    component: DetallesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
