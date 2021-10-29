import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParlerModule } from './parler/parler.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ParlerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
