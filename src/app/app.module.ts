import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HttpClientModule // Import HttpClientModule here
  ],
  providers: [],

})
export class AppModule { }

