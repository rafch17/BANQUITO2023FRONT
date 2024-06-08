import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelclaveComponent } from './panelclave/panelclave.component';
import { FormsModule } from '@angular/forms';
import { PanelRoutingModule } from './panel-routing.module';



@NgModule({
  declarations: [
    PanelclaveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PanelRoutingModule,
  ]
})
export class PanelModule { }
