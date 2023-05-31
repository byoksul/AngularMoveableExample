import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMoveableComponent, NgxMoveableModule } from 'ngx-moveable';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxMoveableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
