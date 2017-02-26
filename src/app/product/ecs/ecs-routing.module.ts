import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EcsComponent } from './ecs.component';

const ecsRoutes: Routes = [
  {
    path: '',
    component: EcsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ecsRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class EcsRoutingModule { }
