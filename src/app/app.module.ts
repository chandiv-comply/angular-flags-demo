import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularCountriesFlagsModule } from 'angular-countries-flags';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularCountriesFlagsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
