import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

//Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { RvisitaComponent } from './rvisita/rvisita.component';
import { PvisitaComponent } from './pvisita/pvisita.component';
import { ActualizarclienteComponent } from './actualizarcliente/actualizarcliente.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
    PvisitaComponent
  ]
})
export class PagesModule { }
