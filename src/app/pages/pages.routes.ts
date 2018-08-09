import { RouterModule,Routes } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RvisitaComponent } from "./rvisita/rvisita.component";
import { PvisitaComponent } from "./pvisita/pvisita.component";
import { ActualizarclienteComponent } from "./actualizarcliente/actualizarcliente.component";




const pagesRoutes:Routes = [
    {
        path: '',
        component:PagesComponent,
        // canActivate:[LoginGuardGuard ],
        children:[
            {path: 'dashboard',component:DashboardComponent,data:{titulo: 'Dashboard'}},
            {path: 'rvisitas',component:RvisitaComponent,data:{titulo: 'Reporte de visitas'}},
            {path: 'pvisitas',component:PvisitaComponent,data:{titulo: 'Programación de visitas'}},
            {path: 'actualizacliente',component:ActualizarclienteComponent,data:{titulo: 'Actualizar informacion del cliente'}},
            {path: '',redirectTo:'/dashboard', pathMatch:'full'},
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);