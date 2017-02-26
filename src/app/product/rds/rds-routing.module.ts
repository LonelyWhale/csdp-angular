import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RdsComponent } from './rds.component';

const rdsRoutes: Routes = [
  {
    path: '',
    component: RdsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rdsRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RdsRoutingModule { }
