import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessHomeComponent } from './business-home/business-home.component';
import { BusinessAdvansedCategoryComponent } from './business-advansed-category/business-advansed-category.component';
import { BusinessDialogueComponent } from './shared/component/business-dialogue/business-dialogue.component';
import { FormatcurrencyPipe } from './shared/pipe/formatcurrency.pipe';


@NgModule({
  declarations: [BusinessHomeComponent, BusinessAdvansedCategoryComponent, BusinessDialogueComponent, FormatcurrencyPipe],
  imports: [
    CommonModule,
    BusinessRoutingModule
  ]
})
export class BusinessModule { }
