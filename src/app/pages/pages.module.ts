import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

//Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { RvisitaComponent } from './rvisita/rvisita.component';
import { PvisitaComponent } from './pvisita/pvisita.component';
import { ActualizarclienteComponent } from './actualizarcliente/actualizarcliente.component';

//Rutas
import { PAGES_ROUTES } from './pages.routes';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PAGES_ROUTES
  ],
  declarations: [
    DashboardComponent,
    RvisitaComponent,
    PvisitaComponent,
    ActualizarclienteComponent
  ],
  exports:[
    DashboardComponent,
    RvisitaComponent,
    PvisitaComponent,
    ActualizarclienteComponent
  ]
})
export class PagesModule { }
