import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SwapiService } from './swapi.service';
import { HttpInterceptorService } from './http-interceptor.service';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SwapiService, HttpInterceptorService, { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }]
})
export class AppModule { }
