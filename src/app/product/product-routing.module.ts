import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';

const productsRoutes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'ecs',
        loadChildren: 'app/product/ecs/ecs.module#EcsModule'
      }, {
        path: 'rds',
        loadChildren: 'app/product/rds/rds.module#RdsModule'
      }, {
        path: '',
        redirectTo: 'ecs',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
