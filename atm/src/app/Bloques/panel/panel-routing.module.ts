import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PanelclaveComponent } from "./panelclave/panelclave.component";

const routes: Routes = [
    { path: 'panel-clave', component: PanelclaveComponent },
    
    
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PanelRoutingModule { }
  