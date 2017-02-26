import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../home/home.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
      }, {
        path: 'products',
        loadChildren: 'app/product/product.module#ProductModule'
      }, {
        path: 'users',
        loadChildren: 'app/user/user.module#UserModule'
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
