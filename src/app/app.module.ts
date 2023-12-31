import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlotlyModule } from 'angular-plotly.js';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlotlyModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
