import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcsComponent } from './ecs.component';
import { EcsRoutingModule } from './ecs-routing.module';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'angular2-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdSliderModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    EcsRoutingModule,
    FormsModule,
    SelectModule,
    NgbModule,
    MdSliderModule
  ],
  declarations: [EcsComponent]
})
export class EcsModule { }
