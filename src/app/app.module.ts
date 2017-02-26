import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, ConnectionBackend, Jsonp } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { RouterModule } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemAppDataService } from './data/in-mem-app-data.service';
import { SelectModule } from 'angular2-select';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { GlobalDataService } from './services/global-data.service';
import { AppRoutingModule } from './app-routing.module';
import { WikipediaService } from './services/wikepedia.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    // InMemoryWebApiModule.forRoot(InMemAppDataService),
    SelectModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MaterialModule.forRoot()
  ],
  providers: [GlobalDataService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
