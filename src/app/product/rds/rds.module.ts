import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsComponent } from './rds.component';
import { RdsRoutingModule } from './rds-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RdsRoutingModule
  ],
  declarations: [RdsComponent]
})
export class RdsModule { }
