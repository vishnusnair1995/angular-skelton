import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBoxComponent } from './component/alert-box/alert-box.component';
import { ArrowUpComponent } from './component/arrow-up/arrow-up.component';
import { RevrseStrigComponent } from './pipe/revrse-strig/revrse-strig.component';
import { RevrseStrigPipe } from './pipe/revrse-strig.pipe';
import { RevrseStrigDirective } from './directives/revrse-strig.directive';



@NgModule({
  declarations: [AlertBoxComponent, ArrowUpComponent, RevrseStrigComponent, RevrseStrigPipe, RevrseStrigDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
