import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
